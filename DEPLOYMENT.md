# Инструкции по развертыванию Patternist Wiki

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий**
   ```bash
   git clone <repository-url>
   cd Patternist
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите сервер разработки**
   ```bash
   npm run dev
   ```

4. **Откройте браузер**
   Перейдите по адресу [http://localhost:3000](http://localhost:3000)

## 🌐 Развертывание в продакшене

### Vercel (Рекомендуется)

1. **Подключите репозиторий к Vercel**
   - Зайдите на [vercel.com](https://vercel.com)
   - Подключите ваш GitHub/GitLab репозиторий
   - Vercel автоматически определит Next.js проект

2. **Настройки развертывания**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Переменные окружения** (если нужны)
   ```env
   NODE_ENV=production
   ```

### Netlify

1. **Создайте файл `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Разверните через Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

### Docker

1. **Создайте Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app

   # Install dependencies based on the preferred package manager
   COPY package.json package-lock.json* ./
   RUN npm ci

   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .

   # Next.js collects completely anonymous telemetry data about general usage.
   # Learn more here: https://nextjs.org/telemetry
   # Uncomment the following line in case you want to disable telemetry during the build.
   ENV NEXT_TELEMETRY_DISABLED 1

   RUN npm run build

   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app

   ENV NODE_ENV production
   ENV NEXT_TELEMETRY_DISABLED 1

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public

   # Set the correct permission for prerender cache
   RUN mkdir .next
   RUN chown nextjs:nodejs .next

   # Automatically leverage output traces to reduce image size
   # https://nextjs.org/docs/advanced-features/output-file-tracing
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs

   EXPOSE 3000

   ENV PORT 3000
   ENV HOSTNAME "0.0.0.0"

   CMD ["node", "server.js"]
   ```

2. **Соберите и запустите контейнер**
   ```bash
   docker build -t patternist-wiki .
   docker run -p 3000:3000 patternist-wiki
   ```

## 🔧 Настройка окружения

### Переменные окружения

Создайте файл `.env.local` для локальной разработки:

```env
# Основные настройки
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Аналитика (опционально)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
```

### Настройка домена

1. **Добавьте кастомный домен в Vercel/Netlify**
2. **Настройте DNS записи**
3. **Обновите переменные окружения**
   ```env
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

## 📊 Мониторинг и аналитика

### Google Analytics

1. **Создайте аккаунт GA4**
2. **Добавьте ID в переменные окружения**
3. **Настройте отслеживание событий**

### Sentry (для отслеживания ошибок)

1. **Создайте проект в Sentry**
2. **Добавьте DSN в переменные окружения**
3. **Настройте интеграцию с Next.js**

## 🔒 Безопасность

### HTTPS

- Vercel и Netlify автоматически предоставляют SSL сертификаты
- Для собственных серверов используйте Let's Encrypt

### Заголовки безопасности

Добавьте в `next.config.js`:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📈 Оптимизация производительности

### Изображения

- Используйте Next.js Image компонент
- Оптимизируйте изображения перед загрузкой
- Используйте WebP формат

### Код

- Включите tree shaking
- Используйте динамические импорты для больших компонентов
- Минимизируйте bundle size

### Кэширование

- Настройте CDN кэширование
- Используйте Service Workers для офлайн функциональности
- Оптимизируйте кэширование статических ресурсов

## 🔄 CI/CD

### GitHub Actions

Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build project
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🆘 Устранение неполадок

### Частые проблемы

1. **Ошибка сборки**
   - Проверьте версию Node.js (требуется 18+)
   - Очистите кэш: `rm -rf .next node_modules && npm install`

2. **Проблемы с зависимостями**
   - Удалите `package-lock.json` и `node_modules`
   - Переустановите: `npm install`

3. **Ошибки TypeScript**
   - Проверьте типы: `npm run type-check`
   - Обновите зависимости: `npm update`

### Логи

- **Локально**: `npm run dev` показывает логи в консоли
- **Vercel**: Логи доступны в Dashboard
- **Netlify**: Логи в разделе Functions

## 📞 Поддержка

Если у вас возникли проблемы:

1. Проверьте [документацию Next.js](https://nextjs.org/docs)
2. Создайте Issue в репозитории
3. Обратитесь к команде разработки

---

**Удачного развертывания! 🚀**

# Инструкция по созданию репозитория на GitHub

## Вариант 1: Через веб-интерфейс GitHub (Рекомендуется)

1. **Откройте GitHub** в браузере: https://github.com/new

2. **Создайте новый репозиторий**:
   - Repository name: `troll-mini-app`
   - Description: `Farcaster Mini App built with Vite, React, TypeScript, and Wagmi`
   - Visibility: выберите Public или Private
   - **НЕ** создавайте README, .gitignore или лицензию (они уже есть в проекте)
   - Нажмите "Create repository"

3. **Подключите удаленный репозиторий**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/troll-mini-app.git
   ```

4. **Отправьте код**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## Вариант 2: Через GitHub CLI (если установлен)

Установите GitHub CLI и выполните:

```bash
# Авторизация (первый раз)
gh auth login

# Создание репозитория и отправка кода
gh repo create troll-mini-app --public --source=. --remote=origin --push
```

## Вариант 3: Используя SSH

Если вы настроили SSH ключи:

```bash
# Подключите удаленный репозиторий (после создания на GitHub)
git remote add origin git@github.com:YOUR_USERNAME/troll-mini-app.git

# Отправьте код
git branch -M main
git push -u origin main
```

## После публикации

Проект будет доступен по адресу:
`https://github.com/YOUR_USERNAME/troll-mini-app`

## Настройка деплоя

Для автоматического деплоя:

### Vercel
```bash
npx vercel --prod
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

Или подключите репозиторий к Vercel/Netlify через их веб-интерфейс для автоматического деплоя при каждом push.

## Настройка GitHub Pages (опционально)

1. В настройках репозитория: Settings > Pages
2. Source: Deploy from a branch
3. Branch: main / dist
4. Save

Ваше приложение будет доступно по адресу:
`https://YOUR_USERNAME.github.io/troll-mini-app/`


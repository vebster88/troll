# Настройка манифеста и изображений

## ✅ Что уже настроено

1. **Манифест обновлён** (`public/.well-known/farcaster.json`):
   - Название: "Dancing Troll"
   - Все URL-ы указывают на production домен
   - Добавлен `buttonTitle` для кнопки
   - Настроен `splashBackgroundColor`

2. **Мета-теги обновлены** (`index.html`):
   - Frame metadata с кнопкой "Dance with Troll 🎉"
   - Open Graph теги для социальных сетей
   - Twitter Card метаданные
   - Splash screen в fc:frame

3. **Структура папок создана**:
   - `public/images/` - папка для всех изображений

## 📸 Необходимые изображения

Добавьте следующие файлы в `public/images/`:

### 1. icon.png (512x512px)
**Путь:** `public/images/icon.png`  
**URL:** `https://troll-farcaster.vercel.app/images/icon.png`

### 2. splash.png (600x400px)
**Путь:** `public/images/splash.png`  
**URL:** `https://troll-farcaster.vercel.app/images/splash.png`

### 3. og-image.png (1200x630px)
**Путь:** `public/images/og-image.png`  
**URL:** `https://troll-farcaster.vercel.app/images/og-image.png`

### 4. frame-image.png (900x600px)
**Путь:** `public/images/frame-image.png`  
**URL:** `https://troll-farcaster.vercel.app/images/frame-image.png`

## 🎨 Где используются изображения

| Изображение | Используется в | Размер | Формат |
|------------|----------------|--------|--------|
| `icon.png` | Манифест, заголовок приложения | 512x512px | PNG |
| `splash.png` | Экран загрузки, Frame splash | 600x400px | PNG |
| `og-image.png` | Open Graph, Twitter Card | 1200x630px | PNG/JPG |
| `frame-image.png` | Frame в ленте Farcaster | 900x600px | PNG |

## 🚀 После добавления изображений

1. Разместите файлы в `public/images/`
2. Убедитесь, что имена файлов точно соответствуют указанным
3. Закоммитьте и запушьте изменения:
   ```bash
   git add public/images/
   git commit -m "Add Mini App images"
   git push
   ```
4. Vercel автоматически задеплоит изображения
5. Проверьте доступность по URL-ам:
   - https://troll-farcaster.vercel.app/images/icon.png
   - https://troll-farcaster.vercel.app/images/splash.png
   - и т.д.

## ⚙️ Настройка accountAssociation

Для полной настройки Mini App нужно сгенерировать `accountAssociation`:

1. Откройте Warpcast
2. Перейдите: Настройки > Разработчик > Домены
3. Добавьте домен: `troll-farcaster.vercel.app`
4. Скопируйте сгенерированные данные:
   - `header`
   - `payload`
   - `signature`
5. Вставьте их в `public/.well-known/farcaster.json`

## 📋 Текущая конфигурация

### Кнопка Frame
- **Текст:** "Dance with Troll 🎉"
- **Действие:** Открыть Mini App
- **URL:** https://troll-farcaster.vercel.app

### Splash Screen
- **Изображение:** `/images/splash.png`
- **Цвет фона:** #181818 (тёмный)

### Метаданные
- **Название:** Dancing Troll
- **Описание:** Click on the dancing troll and watch it perform tricks!
- **Версия:** 1.0.0

## ✅ Checklist

- [x] Манифест обновлён с правильными URL
- [x] Мета-теги настроены
- [x] Структура папок создана
- [ ] Добавлены реальные изображения
- [ ] Сгенерирован accountAssociation
- [ ] Изображения проверены на доступность
- [ ] Манифест зарегистрирован в Farcaster

## 🔗 Полезные ссылки

- [Farcaster Mini Apps Docs](https://miniapps.farcaster.xyz)
- [Farcaster Debug Tool](https://farcaster.xyz/~/developers/mini-apps/debug)
- [Manifest Tool](https://farcaster.xyz/~/developers/mini-apps/manifest)


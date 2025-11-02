# Troll Mini App

This is a [Vite](https://vitejs.dev) project bootstrapped with [`@farcaster/create-mini-app`](https://github.com/farcasterxyz/miniapps/tree/main/packages/create-mini-app).

A Farcaster Mini App built with Vite, React, TypeScript, and Wagmi for seamless blockchain integration.

For documentation and guides, visit [miniapps.farcaster.xyz](https://miniapps.farcaster.xyz/docs/getting-started).

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## 📦 Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI framework
- **TypeScript** - Type safety
- **Wagmi** - React Hooks for Ethereum
- **@farcaster/frame-sdk** - Farcaster Mini App SDK
- **@farcaster/miniapp-wagmi-connector** - Wallet connector for Mini Apps

## 🎯 Features

- ✅ Farcaster Mini App integration
- ✅ Wallet connection via Wagmi
- ✅ Message signing
- ✅ Error handling and loading states
- ✅ Production-ready configuration
- ✅ SEO and social media meta tags

## 📝 Configuration

### `farcaster.json`

The `/.well-known/farcaster.json` is served from the [public
directory](https://vite.dev/guide/assets) and can be updated by editing
`./public/.well-known/farcaster.json`.

**Important**: Before deploying, update the following fields:
- `iconUrl` - Your app icon URL
- `homeUrl` - Your production URL
- `splashImageUrl` - Your splash screen image URL

You can also use the `public` directory to serve static images for `splashBackgroundImageUrl`.

### Frame Embed

The `fc:frame` meta tag in `index.html` makes your root app URL sharable in feeds:

```html
<head>
  <meta name="fc:frame" content='{"version":"next","imageUrl":"https://placehold.co/900x600.png?text=Frame%20Image","button":{"title":"Open","action":{"type":"launch_frame","name":"App Name","url":"https://app.com"}}}' /> 
</head>
```

## 🚢 Deployment

1. **Update configuration**:
   - Edit `public/.well-known/farcaster.json` with your production URLs
   - Update `index.html` meta tags with your domain

2. **Build for production**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Vercel: `vercel --prod`
   - Netlify: `netlify deploy --prod`
   - Or upload `dist/` folder to your hosting

4. **Test**:
   - Visit your deployed URL
   - Check `https://your-domain.com/.well-known/farcaster.json`

## 🔧 Local Testing

For local testing with Farcaster, you can use ngrok:

```bash
npx ngrok http 5173
```

Use the ngrok URL for testing in Warpcast.

## 📚 Resources

- [Farcaster Mini Apps Documentation](https://miniapps.farcaster.xyz/docs/getting-started)
- [Wagmi Documentation](https://wagmi.sh)
- [Vite Documentation](https://vitejs.dev)


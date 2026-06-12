# Shake Learnings 📱

A mobile-first web app built with **Svelte 5** and **SvelteKit** that displays inspirational learnings. Shake your device to get a new random learning, or use the button on desktop.

## Features

- 🤳 **Device shake detection** using shake.js
- 🎯 **Random learning selection** with no consecutive repeats
- 📱 **Mobile optimized** UI with Tailwind CSS
- 🧪 **Unit tests** with Vitest
- 🚀 **GitHub Pages deployment** via GitHub Actions
- ⚡ **Fast development** with Vite + HMR

## Quick Start

### Development

```bash
npm install
npm run dev
# Visit http://localhost:5173
```

To test on mobile:
1. Get your dev machine's IP: `ifconfig | grep inet`
2. Visit `http://<your-ip>:5173` on your phone
3. Shake your device to see new learnings!

### Testing

```bash
npm run test        # Run tests
npm run test:unit   # Run with watch mode
```

### Building

```bash
npm run build       # Create production build (outputs to ./build)
npm run preview     # Preview production build locally
```

## Project Structure

```
src/
├── lib/
│   ├── learnings.ts           # Learning data and selection logic
│   └── LearningDisplay.svelte # Learning display component
├── routes/
│   ├── +page.svelte        # Main page with shake integration
│   └── layout.css          # Global styles
```

## Deployment to GitHub Pages

1. **Push to GitHub** with the main branch
2. **Enable GitHub Pages** in repo settings:
   - Set source to "GitHub Actions"
3. **GitHub Actions automatically**:
   - Runs tests
   - Builds the project
   - Deploys to `https://<username>.github.io/<repo-name>`

The workflow is defined in `.github/workflows/deploy.yml`

## Tech Stack

- **Framework**: SvelteKit 2.x
- **Build**: Vite
- **Styling**: Tailwind CSS 4.x
- **Testing**: Vitest
- **Shake Detection**: shake.js
- **Adapter**: @sveltejs/adapter-static

## Customization

### Add More Learnings

Edit `src/lib/learnings.ts`:

```typescript
export const learnings: Learning[] = [
  { title: 'Your Title', message: 'Your inspirational message' },
  // Add more learnings...
];
```

### Change Shake Sensitivity

In `src/routes/+page.svelte`, adjust the threshold:

```typescript
const myShake = new Shake({ threshold: 15 }); // Lower = more sensitive
```

## License

MIT


## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

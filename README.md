# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deployment (clerknova.com)

Hosted on the Oracle Cloud VM, served by Nginx in front of a Node process.

```bash
NITRO_PRESET=node-server npm run build    # -> .output (self-contained, ~1.6MB)
# ship .output to the server, then:
sudo systemctl restart clerknova-site
```

- Site process: `clerknova-site.service` on 127.0.0.1:3000
- Nginx vhost `clerknova-web` proxies clerknova.com -> :3000 (TLS via Let's Encrypt)
- Backend API is a separate project/repo at api.clerknova.com

### Brand assets

The mark lives in `public/brand/` and is served from our own domain. It used to
be three `.asset.json` pointer files whose url was a Lovable preview path
(`/__l5e/assets-v1/...`); that path only exists on Lovable's host, so on
clerknova.com every logo 404'd and the nav, footer and chat mock-up showed a
broken image. The same applied to `og:image`, which pointed at a `lovable.app`
screenshot — which is what search results and shared links were showing.

Replacing a logo means replacing the PNGs in `public/brand/` and rebuilding.
Keep them small: the originals were 1536x1024 and 2 MB each, displayed at 44px.

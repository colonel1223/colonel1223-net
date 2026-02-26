# colonel1223.net

Research portfolio and interactive project hub.

## Live

**[colonel1223.net](https://colonel1223.net)**

## What's here

Full research site built with Next.js, deployed via GitHub Pages. Includes:

- **Interactive demos** — Live versions of CHIMERA, conformal prediction, alignment tax visualization, Markov models, risk comparison tools, and more (`/demos/`)
- **Papers** — Research writeups including *Lead Into Gold* (2026) (`/papers/`)
- **Research notes** — Working documentation across all projects (`/research/`)
- **Philosophy** — Framework and thesis pages (`/philosophy/`)
- **Infrastructure** — Technical architecture documentation (`/infrastructure/`)

## Structure

```
├── index.html              # Landing page
├── demos/                  # 10+ interactive visualizations
│   ├── chimera/
│   ├── alignment-tax/
│   ├── conformal/
│   ├── matrix/
│   ├── cosmic-horror/
│   ├── markov/
│   ├── risk-comparison/
│   ├── timeline/
│   └── ...
├── papers/
├── research/
├── philosophy/
├── src/                    # Next.js source
│   ├── app/
│   ├── components/
│   ├── content/
│   └── lib/
├── assets/
│   ├── css/core.css
│   └── js/site.js
└── package.json
```

## Run locally

```bash
npm install && npm run dev
```

## License

MIT

# 🚀 create-scafty

A modern CLI to scaffold a backend API with **Express**, **TypeScript**, **ESLint**, and **Prettier** — instantly.

---

## ✨ Features

- ⚡ Instant backend setup
- 🟦 Optional TypeScript support
- 🧹 ESLint (with import sorting)
- 💅 Prettier configuration
- 📁 Optional `src/` structure
- 📦 Choose your package manager (npm / pnpm / yarn)
- 🌐 Express API starter included
- 🧱 Modular and scalable architecture

---

## 📦 Usage

### 1. Create a new project

```bash
npm create scafty@latest
```

or

```bash
npx create-scafty
```

---

### 2. Follow the prompts

You’ll be asked to configure:

- Project name
- TypeScript support
- ESLint setup
- Import sorting
- Prettier
- `src/` directory
- Package manager

---

### 3. Start development

```bash
cd your-project
npm run dev
```

---

## 📁 Generated Structure

Example output:

```bash
your-project/
├── src/
│   └── index.ts / index.js
├── package.json
├── tsconfig.json (if TS selected)
├── eslint.config.js (if enabled)
├── .prettierrc (if enabled)
```

---

## 🚀 Express Starter

The generated project includes a minimal Express server:

```ts
app.get('/', (req, res) => {
  res.json({ message: 'API running 🚀' });
});
```

---

## ⚙️ Requirements

- Node.js >= 18
- npm / pnpm / yarn

---

## 🛠 Development (for contributors)

Clone the repo:

```bash
git clone <your-repo-url>
cd create-scafty
```

Install dependencies:

```bash
npm install
```

Build the CLI:

```bash
npm run build
```

Test locally:

```bash
npm link
create-scafty
```

---

## 📦 Publishing

```bash
npm run build
npm publish --access public
```

---

## 🧠 Roadmap

- [ ] CLI flags (`--ts`, `--eslint`)
- [ ] Multiple templates (MVC, Clean Architecture)
- [ ] Git initialization
- [ ] Environment file generator
- [ ] Plugin system

---

## 🤝 Contributing

Pull requests are welcome!
Feel free to open issues for suggestions or bugs.

---

## 📄 License

MIT

---

## 💡 Inspiration

Inspired by modern scaffolding tools like:

- create-vite
- create-next-app

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

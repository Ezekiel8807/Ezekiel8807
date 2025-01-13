# 💬 About Me

### Hey👋

### I'm Ayebidun Ezekiel.

A full-stack developer with over 5 years of experience working with different javascript libraries and frameworks. I’m currently working on my portfolio, currently learning

- 👯 I’m looking to collaborate on projects,
- 🔭 I’m currently working on my portfolio,
- 🌱 I’m currently learning react-native,
- 💬 Ask me about anything

[![An image of @ezekiel8807's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/ezekiel8807)](https://holopin.io/@ezekiel8807)

# 📫 How to reach me:

- Portfolio: [website](http://ezefizzy-ezekiel8807.vercel.app/)
- Linkin: [Connect](https://linkedin.com/in/Ezekiel8807)
- Facebook: [Add Me](https://web.facebook.com/Ezekiel8807)
- Twitter: [Follow Me](https://twitter.com/AyebidunEzekiel)

[![An image of @ezekiel8807's Holopin badges, which is a link to view their full Holopin profile](https://holopin.me/ezekiel8807)](https://holopin.io/@ezekiel8807)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

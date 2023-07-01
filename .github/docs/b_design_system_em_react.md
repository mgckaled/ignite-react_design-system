# Parte 2 - Design System em React

- `themeMap: {...defaultThemeMap, height: 'space', width: 'space',}` - associar tokens para determinadas propriedades. É importatne inserir o `defaultThemeMap` para não substituir as associações padrão.

- `npx sb init --builder @storybook/builder-vite --type react --use-npm` - comando para implementar o _StoryBook_. `sb` = storybook, `init` = dar início, `--builder` = builder, `@storybook/builder-vite` = usar o vite por debaixo do panos (mais rápido), `--type react` = conversão do código

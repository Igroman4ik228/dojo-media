# Додзё Медиа

![Preview](docs/images/preview.png)

**Стек:** Astro · TypeScript · CSS Modules

## Быстрый старт

Обязательно необходимо Node.js ≥ 22 и npm

В корне проекта выполните:

```sh
npm i
npm run dev
```

Для просмотра результата сборки:

```sh
npm run build
npm run preview
```

## Команды

| Команда              | Что делает                                  |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Запускает сервер разработки                 |
| `npm run lint:type`  | Проверяет Astro-файлы и типы                |
| `npm run build`      | Собирает статический сайт в `dist/`         |
| `npm run preview`    | Запускает локальный просмотр готовой сборки |
| `npm run format`     | Проверяет форматирование Prettier           |
| `npm run format:fix` | Исправляет форматирование Prettier          |

## Где вносить изменения перед публикацией

Пути от корня проекта:

| Где                                                  | Что изменить                                                                                                                                                            |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `astro.config.mjs`                                   | Домен `site` и путь `base` (`'/'` для корня домена).                                                                                                                    |
| `src/layouts/MainLayout/MainLayout.astro`            | `title`, `description`, `og:site_name`, `socialImage`, `socialImageAlt`, `apple-mobile-web-app-title` и `theme-color`. Превью и первый экран используют `workshop.png`. |
| `public/favicon/`, `public/favicon/site.webmanifest` | Иконки, названия и цвета приложения.                                                                                                                                    |
| `public/robots.txt`, метатег `robots` в layout       | Разрешения на обход и индексацию.                                                                                                                                       |
| `.github/workflows/deploy.yml`                       | Ветки публикации; замените `npm run lint:type:fix` на существующий `npm run lint:type`.                                                                                 |

Пути компонентов указаны относительно `src/components/`.

| Где                                                                 | Что изменить                                                                                  |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ContactLink/ContactLink.astro`                                     | Ссылку `href={'#'}` у кнопки «Обсудить проект» на контактную.                                 |
| `Footer/Footer.astro`                                               | Email в ссылке и тексте, год и подпись.                                                       |
| `Projects/Projects.ts`                                              | Названия, ссылки вместо `#`, теги, изображения и `alt`; изображения — в `src/assets/images/`. |
| `Header/Header.astro`, `Hero/Hero.astro`, `Projects/Projects.astro` | Название, тексты, город и подпись с числом проектов.                                          |

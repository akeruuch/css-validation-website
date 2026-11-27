# Практическая работа 53

Это продолжение проекта из лекции 52. Добавлена проверка JavaScript через ESLint.

## Что находится в папке

- index.html — страница сайта.
- style.css и responsive.css — оформление страницы.
- script.js — кнопки калькулятора.
- calculator.js — сложение, вычитание, умножение и деление.
- eslint.config.js — настройки проверки JavaScript.
- .stylelintrc.json — настройки проверки CSS из прошлой работы.
- .github/workflows — две автоматические проверки GitHub Actions.
- package.json и package-lock.json — список и версии зависимостей.

## Как запустить

Открыть терминал в этой папке.

```powershell
.\start-site.cmd
```

Открыть http://127.0.0.1:8153. Для остановки сервера нажать Ctrl+C.

## Как проверить код

На этом компьютере:

```powershell
.\check-js.cmd
.\check-css.cmd
```

Если установлен npm: `npm ci`, затем `npm run lint:js` и `npm run lint:css`.
После push на GitHub результат находится во вкладке Actions.

# Лекция 52 — автоматическая проверка CSS

Учебный сайт IT-студии «Сигнал»: отдельный проект на основе подготовленной в лекции 44 статической страницы. Сервер и Docker для Stylelint не нужны.

## Файлы

- `index.html` — страница; `script.js` — фильтры и меню; `images/` — иллюстрации.
- `style.css` — основные стили; `responsive.css` — медиазапросы 1100/760 px и reduced motion. Обе таблицы подключены в HTML.
- `.stylelintrc.json` — три правила из лекции.
- `package.json` и `package-lock.json` — зависимость Stylelint и зафиксированное дерево пакетов.
- `.github/workflows/css-check.yml` — CSS Validation: push и pull_request в main, также ручной запуск.

## Проверка самостоятельно

В терминале VS Code откройте корень этого проекта. При установленном Node.js с npm:

```powershell
npm ci
npx stylelint "**/*.css"
npm run lint:css
```

Две последние команды эквивалентны. Успех — код 0, обычная проверка может ничего не напечатать. Для подробного списка: `npx stylelint "**/*.css" --formatter verbose`.

На этом компьютере также можно выполнить `.\check-css.cmd`: скрипт использует уже установленный Stylelint и доступный Node.js. В Codex npm отсутствовал, поэтому использована официальная копия npm из registry.npmjs.org в рабочей папке work/tooling52/npm; зависимости установлены командами npm init, npm install и проверены npm ci. В GitHub npm предоставляет setup-node.

## Повторить эксперимент

Добавьте в конец style.css `body { colr: blue; }`, выполните локальную проверку. Ожидается `Unknown property "colr"`, правило `property-no-unknown`, код 2. Затем сохраните и отправьте изменение:

```powershell
git add style.css
git commit -m "Demonstrate CSS error"
git push origin main
```

В GitHub откройте Actions → CSS Validation → запуск → css-check → Check CSS. Удалите ошибочный блок, снова выполните lint, commit и push. Последний запуск должен стать Success. Не добавляйте node_modules в Git: папка исключена через .gitignore.

## Ограничения

Три правила проверяют неверный HEX, повтор свойств внутри блока и неизвестные свойства. Они не гарантируют корректность всех CSS-значений, форматирования, адаптивности и внешнего вида. Страницу нужно дополнительно открыть в браузере. Публикация сайта в этом задании не настраивается.


## Продолжение — лекция 53

В том же репозитории добавлен ESLint 10 и JavaScript Validation. Stylelint и CSS Validation сохранены. Повторная инициализация npm не нужна: package.json уже существует.

Файлы: eslint.config.js — flat config; calculator.js — четыре операции и разбор чисел; script.js — подключение формы, меню и фильтров; tests/calculator.test.mjs — семь тестов. В package.json установлен type: module; script.js подключён как модуль, document и console объявлены в конфигурации readonly-глобальными.

На этом компьютере из корня проекта:

```powershell
.\check-js.cmd
.\check-css.cmd
.\start-site.cmd
```

После запуска сервера откройте http://127.0.0.1:8153/#calculator. Для остановки нажмите Ctrl+C в терминале сервера. Если порт уже занят этим предпросмотром, просто откройте адрес. Модулям нужен HTTP-сервер; не открывайте index.html двойным щелчком. Docker не требуется.

При доступном npm: npm ci, npm run lint:js, npm run lint:css, npm test. Команда npm run lint запускает обе проверки.

Правила: no-undef=error, no-unused-vars=warn, no-console=off. Предупреждение не делает обычную проверку неуспешной; для строгого режима можно добавить --max-warnings 0. Ошибка lint даёт код 1.

GitHub → Actions → JavaScript Validation → js-check → Check JavaScript. После успешного lint дополнительно запускается Test calculator. Для эксперимента добавьте console.log(undefinedLecture53); в script.js, выполните commit и push, затем удалите строку и повторите commit/push. Последняя версия должна проходить проверку. CSS Validation работает отдельным workflow.

Ответы на вопросы лекции 53 находятся в ANSWERS53.md.

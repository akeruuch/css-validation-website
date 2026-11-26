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

На этом компьютере также можно выполнить `powershell -ExecutionPolicy Bypass -File .\check-css.ps1`: скрипт использует уже установленный Stylelint и доступный Node.js; глобальные настройки PowerShell не меняются. В Codex npm отсутствовал, поэтому использована официальная копия npm из registry.npmjs.org в рабочей папке work/tooling52/npm; зависимости установлены командами npm init, npm install и проверены npm ci. В GitHub npm предоставляет setup-node.

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

# Интеграция в Тильду

1. Загрузите в Tilda Files:
   - `styles.css`
   - `myapp.umd.js`

2. Подключите стили в секции `<head>` вашего сайта:

```html
<link rel="stylesheet" href="/storage/путь/до/styles.css" />
```

3. Вставьте в HTML-блок (без `iframe`) следующий код, чтобы подключить React, ReactDOM и ваш скрипт:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="/storage/путь/до/myapp.umd.js"></script>

<div id="app"></div>

<script>
  ReactDOM.createRoot(document.getElementById("app"))
    .render(React.createElement(MyApp.default));
</script>
```

> Замените `/storage/путь/до/` на фактический URL, который выдаёт Tilda после загрузки файлов.

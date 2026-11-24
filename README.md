# Мои заметки — экзаменационный проект

Простое full-stack приложение: HTML/CSS/JavaScript + Node.js/Express + SQLite.

## Запуск

Нужен установленный Node.js (желательно версия 20 или новее).

```bash
npm install
npm start
```

Откройте в браузере:

http://localhost:3000

## Как устроен проект

- `public/index.html` — разметка страницы.
- `public/style.css` — внешний вид.
- `public/script.js` — запросы от клиента к серверу.
- `server.js` — сервер и API.
- `database.js` — подключение к SQLite и создание таблицы.
- `notes.db` — файл базы данных, создаётся автоматически.

## Таблица

`notes`:
- `id` — идентификатор заметки;
- `title` — название;
- `content` — текст.

## Проверка SQL

Откройте базу данных в SQLite и выполните:

```sql
SELECT * FROM notes;
```

## API

- `GET /api/notes` — получить все заметки.
- `POST /api/notes` — добавить заметку.

Пример JSON для POST:

```json
{
  "title": "Первая заметка",
  "content": "Текст заметки"
}
```

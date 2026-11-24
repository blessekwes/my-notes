const express = require("express");
const db = require("./database");

const app = express();
const PORT = 3000;


app.use(express.json());


app.use(express.static("public"));


app.get("/api/notes", (req, res) => {
    const notes = db.prepare("SELECT * FROM notes ORDER BY id DESC").all();
    res.json(notes);
});


app.post("/api/notes", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Заполните все поля" });
    }

    const result = db.prepare(
        "INSERT INTO notes (title, content) VALUES (?, ?)"
    ).run(title, content);

    res.json({
        id: result.lastInsertRowid,
        title: title,
        content: content
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});

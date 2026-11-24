const form = document.getElementById("noteForm");
const notesBlock = document.getElementById("notes");


async function loadNotes() {
    const response = await fetch("/api/notes");
    const notes = await response.json();

    notesBlock.innerHTML = "";

    notes.forEach(note => {
        const item = document.createElement("div");
        item.className = "note";

        const title = document.createElement("h3");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        item.append(title, content);
        notesBlock.append(item);
    });
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        form.reset();
        loadNotes();
    } else {
        alert("Не удалось добавить заметку");
    }
});


loadNotes();

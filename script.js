function openLab(name) {
    alert(name + " খুলেছে! 🔐\nএটা শুধু অনুমোদিত ল্যাবের জন্য ব্যবহার করো।");
}

function showNotes() {
    const note = prompt("তোমার Cybersecurity Note লিখো:");

    if (note) {
        localStorage.setItem("myNote", note);
        alert("Note save হয়েছে ✅");
    }
}

function showNote() {
    const note = localStorage.getItem("myNote");

    if (note) {
        alert("তোমার Note:\n\n" + note);
    } else {
        alert("এখনো কোনো Note নেই।");
    }
}

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

function appendValue(value) {
    document.getElementById("display").value += value;
}

// Mengubah d menjadi D besar agar standar camelCase
function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        // eval akan menghitung otomatis string di dalam display
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
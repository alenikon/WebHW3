const celsy = Number.parseFloat(prompt("Введите температуру в Цельсиях"));

alert(`Температура ${celsy} градусов Цельсия равна ${faren(celsy).toFixed(1)}`);

function faren(celsy) {
    return 9 / 5 * celsy + 32
}
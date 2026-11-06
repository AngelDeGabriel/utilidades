// utils.test.js - Pruebas Unitarias con Jest
const { capitalizarTexto, calcularDescuento, evaluarContrasena } = require('./utils');

test('Debe capitalizar la primera letra correctamente', () => {
    expect(capitalizarTexto('gabriel')).toBe('Gabriel');
});

test('Debe calcular el precio final aplicando el descuento de temporada', () => {
    // Tarea del compañero: Si cambia el porcentaje o la regla, actualizar aquí
    expect(calcularDescuento(200, 10)).toBe(180);
});

test('Debe marcar la contraseña como insegura si tiene menos de 8 caracteres', () => {
    expect(evaluarContrasena('abc123')).toBe('Insegura');
});
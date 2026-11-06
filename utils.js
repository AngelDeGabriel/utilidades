// utils.js - Módulo de Utilidades del Sistema

function capitalizarTexto(texto) {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function calcularDescuento(precioOriginal, porcentajeDescuento) {
    if (precioOriginal <= 0 || porcentajeDescuento < 0) return 0;
    
    // REGLA DE NEGOCIO: Descuento base actual del 10%
    const descuento = (precioOriginal * porcentajeDescuento) / 100;
    return precioOriginal - descuento;
}

function evaluarContrasena(password) {
    if (!password || password.length < 8) {
        return "Insegura";
    }
    return "Segura";
}

module.exports = {
    capitalizarTexto,
    calcularDescuento,
    evaluarContrasena
};
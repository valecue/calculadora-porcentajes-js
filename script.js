function calcular() {
    let valor = document.getElementById('valor').value;
    let porcentaje = document.getElementById('porcentaje').value;

    if (valor === '' || porcentaje === '') {
        document.getElementById('resultado').innerText = 'Por favor, complete ambos campos.';
        return;
    }

    let resultado = (valor * porcentaje) / 100;

    document.getElementById('resultado').innerText = `El ${porcentaje}% de ${valor} es ${resultado}.`;
}
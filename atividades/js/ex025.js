//Crie um programa em JavaScript que faça a conversão entre diferentes escalas de temperatura (Celsius, Fahrenheit e Kelvin). 
//O programa deve incluir funções para converter de uma escala para outra e uma função separada para exibir os resultados na tela. 
//As funções devem receber como parâmetros a temperatura a ser convertida e a escala de origem.

//Requisitos:
//Funções com retorno: As funções de conversão devem retornar o valor convertido.
//Parâmetros e argumentos: As funções devem receber parâmetros, como a temperatura e a escala de origem.
//Procedimento: A função de exibição deve imprimir o resultado na tela.


// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Função para converter Celsius para Kelvin
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

// Função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Função para converter Fahrenheit para Kelvin
function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
}

// Função para converter Kelvin para Celsius
function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}

// Função para converter Kelvin para Fahrenheit
function kelvinParaFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
}

// Função principal de conversão de temperatura
function converterTemperatura(temperatura, escalaOrigem, escalaDestino) {
    if (escalaOrigem === 'Celsius') {
        if (escalaDestino === 'Fahrenheit') return celsiusParaFahrenheit(temperatura);
        if (escalaDestino === 'Kelvin') return celsiusParaKelvin(temperatura);
    } else if (escalaOrigem === 'Fahrenheit') {
        if (escalaDestino === 'Celsius') return fahrenheitParaCelsius(temperatura);
        if (escalaDestino === 'Kelvin') return fahrenheitParaKelvin(temperatura);
    } else if (escalaOrigem === 'Kelvin') {
        if (escalaDestino === 'Celsius') return kelvinParaCelsius(temperatura);
        if (escalaDestino === 'Fahrenheit') return kelvinParaFahrenheit(temperatura);
    }
    return null; // Retorna null se a escala for inválida
}

// Função para exibir o resultado na tela
function exibirResultado(temperatura, escalaOrigem, escalaDestino) {
    const resultado = converterTemperatura(temperatura, escalaOrigem, escalaDestino);
    if (resultado !== null) {
        alert(`A temperatura de ${temperatura}° ${escalaOrigem} é igual a ${resultado.toFixed(2)}° ${escalaDestino}.`);
    } else {
        alert("Erro: Escala de temperatura inválida.");
    }
}

//Exibir o resultado
exibirResultado(100, 'Celsius', 'Fahrenheit');  // Exemplo de Celsius para Fahrenheit
exibirResultado(10, 'Kelvin', 'Celsius');       // Exemplo de Kelvin para Celsius
exibirResultado(300, 'Fahrenheit', 'Kelvin');   // Exemplo de Fahrenheit para Kelvin

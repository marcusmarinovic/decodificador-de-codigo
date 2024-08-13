// Função para decodificar o texto
function decodeText() {
    let encodedText = document.getElementById("encodedText").value;

    // Primeiro, inverta a string
    let decodedText = encodedText.split('').reverse().join('');

    // Depois, substitua as letras para recuperar o texto original
    decodedText = decodedText.replace(/a/g, 'a');
    decodedText = decodedText.replace(/e/g, 'e');
    decodedText = decodedText.replace(/i/g, 'i');
    decodedText = decodedText.replace(/o/g, 'o');
    decodedText = decodedText.replace(/u/g, 'u');

    document.getElementById("decodedResult").textContent = `Texto decodificado: ${decodedText}`;
}

// Função para codificar o texto
function encodeText() {
    let decodedText = document.getElementById("decodedText").value;

    // Substitua as letras conforme desejado
    let encodedText = decodedText.replace(/e/g, 'e');
    encodedText = encodedText.replace(/a/g, 'a');
    encodedText = encodedText.replace(/o/g, 'o');
    encodedText = encodedText.replace(/i/g, 'i');
    encodedText = encodedText.replace(/u/g, 'u');

    // Depois, inverta a string para codificar
    encodedText = encodedText.split('').reverse().join('');

    document.getElementById("encodedResult").textContent = `Texto codificado: ${encodedText}`;
}


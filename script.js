// Função para mostrar o right-image-container e ocultar o text-output
function mostrarRightImageContainer() {
    document.getElementById('right-image-container').style.display = 'block';
    document.getElementById('text-output').style.display = 'none';
}

// Função para mostrar o text-output e ocultar o right-image-container
function mostrarTextOutput() {
    document.getElementById('right-image-container').style.display = 'none';
    document.getElementById('text-output').style.display = 'block';
}

// Função para mostrar o botão de copiar
function mostrarBotaoCopiar() {
    document.getElementById('copy-botao').style.display = 'block';
}

// Função da criptografia
function criptografar() {
    var textoOriginal = document.getElementById('text-input').value;

    // Chamar a função de criptografia
    var textoCriptografado = criptografarPalavra(textoOriginal);

    // Exibir o texto criptografado no text-output
    document.getElementById('text-output').value = textoCriptografado;

    // Atualizar a mensagem abaixo da imagem
    document.getElementById('image-caption').innerText = "Texto criptografado!";

    // Chamar a função para mostrar o text-output
    mostrarTextOutput();

    // Chamar a função para mostrar o botão de copiar
    mostrarBotaoCopiar();
}


function descriptografar() {
    var textoCriptografado = document.getElementById('text-input').value;

    // Chamar a função de descriptografia
    var textoOriginal = descriptografarPalavra(textoCriptografado);

    // Exibir o texto descriptografado no text-output
    document.getElementById('text-output').value = textoOriginal;

    // Atualizar a mensagem abaixo da imagem
    document.getElementById('image-caption').innerText = "Texto descriptografado!";

    // Chamar a função para mostrar o text-output
    mostrarTextOutput();

    // Chamar a função para mostrar o botão de copiar
    mostrarBotaoCopiar();
}

function criptografarPalavra(palavra) {
    // Mapear cada letra da palavra pra versão criptografada
    var letraCriptografada = palavra.split('').map(function (letra) {
        switch (letra) {
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'a':
                return 'ai';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return letra;
        }
    });

    // Juntar as letras criptografadas para formar a palavra criptografada
    return letraCriptografada.join('');
}

function descriptografarPalavra(palavraCriptografada) {
    // Mapear cada letra da palavra criptografada pra versão original
    var letraOriginal = palavraCriptografada.split(/(enter|imes|ai|ober|ufat)/).map(function (part) {
        switch (part) {
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ai':
                return 'a';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return part;
        }
    });

    // Juntar as partes pra formar a palavra original
    return letraOriginal.join('');
}

function copiarMensagem() {
    // Seleciona o conteúdo da textarea
    var mensagemTextarea = document.getElementById('text-output');
    mensagemTextarea.select();

    // Copia o conteudo 
    document.execCommand('copy');

    // Deseleciona o texto
    mensagemTextarea.setSelectionRange(0, 0);

    // Atualiza a mensagem abaixo da imagem
    document.getElementById('image-caption').innerText = "Mensagem copiada!";
}

// Esconde o botão de copiar 
document.getElementById('copy-button').style.display = 'none';
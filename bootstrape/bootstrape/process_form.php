<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando dados do formulário
    $avaliacao_secao = $_POST['questi_secao'];
    $avaliacao_cor = $_POST['questi_cor'];
    $comentario = $_POST['comentario'];

    // Criando ou abrindo o arquivo para escrever
    $file = fopen("avaliacao.txt", "a");

    // Formatando os dados
    $data = "Avaliação do Conteúdo: $avaliacao_secao\n";
    $data .= "Avaliação da Apresentação: $avaliacao_cor\n";
    $data .= "Comentário: $comentario\n";
    $data .= "-----------------------------\n";

    // Escrevendo no arquivo
    fwrite($file, $data);

    // Fechando o arquivo
    fclose($file);

    // Exibir mensagem de agradecimento e redirecionar após 10 segundos
    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Avaliação Recebida</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                font-family: Arial, sans-serif;
            }
            .message {
                text-align: center;
            }
        </style>
        <script>
            setTimeout(function() {
                window.location.href = "index.html"; // Alterar para o nome da página inicial
            }, 5000); // 10000 ms = 10 segundos
        </script>
    </head>
    <body>
        <div class="message">
            <h1>Obrigado pela sua avaliação!</h1>
            <p>Você será redirecionado para a página inicial em 5 segundos.</p>
        </div>
    </body>
    </html>
    ';
}
?>

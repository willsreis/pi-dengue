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

    // Redirecionar ou exibir uma mensagem de sucesso
    echo "Obrigado pela sua avaliação!";
}

?>

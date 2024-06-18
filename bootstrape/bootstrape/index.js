// let casos = [];
// let data = [];
// let jsonData;

// fetch('data.json')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(json){
//         jsonData = json.reverse();
//         jsonData.forEach(function(item) {
//             appendCase(item);
//             appendDate(item);
//         })
//             console.log(casos);
//         })
//     .catch(function(error) {
//         console.error('Erro:', error)
//     });


// function appendCase(object) {
//     casos.push(object['casos'])
// }

// function appendDate(object) {
//     rawDate = object['SE']
//     let dataSemana = rawDate.slice(-2)
//     let dataAno = rawDate.slice(0,4)
//     actualDate = `Semana ${dataSemana} de ${dataAno}`
//     data.push(actualDate)
// }
async function buscarDados() {
    try{
    const response = await fetch('./data.json')
    const jsonData = await response.json()
    const results = jsonData.results || jsonData;
    return results
    }
    catch(error){
        console.error('Não foi possível retornar os dados:', error);
        return [];
    }}

let dadosJson;

const casosTexto = document.getElementById('casosTexto')
const alertaTexto = document.getElementById('alertaTexto')
const cardAtual = document.getElementById('cardAtual')

async function definirAlerta() {
dadosJson = await buscarDados();

let nivelAlerta;
const rawAlerta = dadosJson[dadosJson.length - 1]['nivel'];
if (rawAlerta == 1) {
    nivelAlerta = 'verde'
    cardAtual.classList.add('bg-success')
} else if (rawAlerta == 2){
    nivelAlerta = 'amarelo'
    cardAtual.classList.add('bg-warning')
} else if (rawAlerta === 3){
    nivelAlerta = 'laranja'
    cardAtual.classList.add('bg-warning')
} else{
    nivelAlerta = 'vermelho'
    cardAtual.classList.add('bg-danger')
}
alertaTexto.textContent = `O nível de alerta em Indaiatuba essa semana foi ${nivelAlerta}!`
}

async function definirNroCasos(){
    let nroCasos;
    dadosJson = await buscarDados();
    nroCasos = dadosJson[dadosJson.length - 1]['casos'];
    casosTexto.textContent = `Indaiatuba teve ${nroCasos} casos de dengue essa semana`
}

definirAlerta();
definirNroCasos();
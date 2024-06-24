async function buscarDados() {
    try{
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=08&ey_start=2008&ew_end=25&ey_end=2029')
    const jsonData = await response.json()
    const results = jsonData.results || jsonData;
    return results
    }
    catch(error){
        console.error('Não foi possível retornar os dados:', error);
        return false;
    }}

let dadosJson;

const casosTexto = document.getElementById('casosTexto')
const alertaTexto = document.getElementById('alertaTexto')
const cardAtual = document.getElementById('cardAtual')

async function definirAlerta() {
dadosJson = await buscarDados();
if (dadosJson == false) {
    alertaTexto.textContent = 'Sentimos muito, parece que ocorreu um erro ao buscar as informações'
} else{
let nivelAlerta;
const rawAlerta = dadosJson[0]['nivel'];
if (rawAlerta == 1) {
    nivelAlerta = 'verde'
    cardAtual.classList.add('text-success')
} else if (rawAlerta == 2){
    nivelAlerta = 'amarelo'
    cardAtual.classList.add('text-warning')
} else if (rawAlerta === 3){
    nivelAlerta = 'laranja'
    cardAtual.classList.add('text-warning')
} else{
    nivelAlerta = 'vermelho'
    cardAtual.classList.add('text-danger')
}
alertaTexto.textContent = `O nível de alerta é ${nivelAlerta}!`
return true
}}

function unixConverter(timestamp){
    let currentDate = new Date(timestamp)
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let year = String(currentDate.getFullYear());
    let month= String(months[currentDate.getMonth()]);
    let date = String(currentDate.getDate());
    if (date.length<2) {
        date = '0'+date
    }
    currentDate = date+'/'+month+'/'+year
    return currentDate
}

async function definirNroCasos(){
    let nroCasos;
    let data;
    dadosJson = await buscarDados();
    nroCasos = dadosJson[0]['casos'];
    data = dadosJson[0]['data_iniSE']
    data = unixConverter(data)
    casosTexto.textContent = `Indaiatuba teve ${nroCasos} casos de dengue essa semana (${data})`
    return data
}

let apiStatus = definirAlerta();
if (apiStatus != false){
    definirNroCasos();}

//Mensagem de recebimento no formulário

const submitBtn = document.getElementById('submitBtn')
submitBtn.onclick = function() {
    alert('Muito Obrigado por compartilhar a sua opinião!\nA página vai ser recarregada agora')
}
const submitBtn = document.getElementById('submitBtn');
const dataConsulta = document.getElementById('dataConsulta');
const casosNotificados = document.getElementById('casosNotificados');
const nivelPerigo = document.getElementById('nivelPerigo');

let apiJson = [{"data_iniSE":1717286400000,"SE":202423,"casos_est":0.0,"casos_est_min":0,"casos_est_max":0,"casos":0,"p_rt1":0.0,"p_inc100k":0.0,"Localidade_id":0,"nivel":1,"id":352050920242319884,"versao_modelo":"2024-06-10","tweet":null,"Rt":0.0,"pop":266593.0,"tempmin":13.22635,"umidmax":82.6953,"receptivo":0,"transmissao":0,"nivel_inc":0,"umidmed":68.56465,"umidmin":45.99925,"tempmed":18.1142,"tempmax":25.39215,"casprov":0,"casprov_est":null,"casprov_est_min":null,"casprov_est_max":null,"casconf":null,"notif_accum_year":277},{"data_iniSE":1716681600000,"SE":202422,"casos_est":1.0,"casos_est_min":1,"casos_est_max":1,"casos":1,"p_rt1":0.0,"p_inc100k":0.3751036227,"Localidade_id":0,"nivel":1,"id":352050920242219884,"versao_modelo":"2024-06-10","tweet":null,"Rt":0.0065131607,"pop":266593.0,"tempmin":12.632644,"umidmax":93.1353128571,"receptivo":0,"transmissao":0,"nivel_inc":0,"umidmed":80.610192,"umidmin":59.6973334286,"tempmed":15.8507308571,"tempmax":20.3913281429,"casprov":1,"casprov_est":null,"casprov_est_min":null,"casprov_est_max":null,"casconf":null,"notif_accum_year":277},{"data_iniSE":1716076800000,"SE":202421,"casos_est":37.0,"casos_est_min":37,"casos_est_max":37,"casos":37,"p_rt1":0.0,"p_inc100k":13.8788337708,"Localidade_id":0,"nivel":4,"id":352050920242119884,"versao_modelo":"2024-06-10","tweet":null,"Rt":0.1968701333,"pop":266593.0,"tempmin":17.3433628571,"umidmax":89.0533441429,"receptivo":0,"transmissao":0,"nivel_inc":1,"umidmed":70.6258657143,"umidmin":47.3877594286,"tempmed":21.3273637143,"tempmax":26.9788131429,"casprov":37,"casprov_est":null,"casprov_est_min":null,"casprov_est_max":null,"casconf":null,"notif_accum_year":277},{"data_iniSE":1715472000000,"SE":202420,"casos_est":239.0,"casos_est_min":239,"casos_est_max":239,"casos":239,"p_rt1":0.2920393348,"p_inc100k":89.6497650146,"Localidade_id":0,"nivel":4,"id":352050920242019884,"versao_modelo":"2024-06-10","tweet":null,"Rt":0.9517799616,"pop":266593.0,"tempmin":17.4235684286,"umidmax":83.2251842857,"receptivo":0,"transmissao":0,"nivel_inc":2,"umidmed":63.8356781429,"umidmin":40.421608,"tempmed":22.3518988571,"tempmax":28.7261331429,"casprov":236,"casprov_est":null,"casprov_est_min":null,"casprov_est_max":null,"casconf":null,"notif_accum_year":277}]

let dataApi = String(apiJson[0]['SE']);
semanaApi = dataApi.slice(4,6)
anoApi = dataApi.slice(0,4)
let casosApi = apiJson[0]['casos'];
let perigoApi = apiJson[0]['nivel'];
var dataAtual = new Date();
dataAtual = String(dataAtual).slice(4)

submitBtn.onclick = function apiFetch () {
    //não está fazendo fetch da api, está pegando os dados inseridos manualmente na variável apiJson
    //dataApi ('data_iniSE, no json) retorna um valor que eu não sei interpretar, de acordo com o dicionário:
    //"data_ini_SE : Primeiro dia da semana epidemiológica (Domingo)"

    dataConsulta.textContent = `Data da semana da consulta: ${dataApi}`
    casosNotificados.textContent = `O número de casos essa semana foi: ${casosApi}`
    if (perigoApi == 1) {
        nivelPerigo.textContent = 'O nível de alerta da semana foi verde';
    }
    if (perigoApi == 2) {
        nivelPerigo.textContent = 'O nível de alerta da semana foi amarelo';
    }
    if (perigoApi == 3) {
        nivelPerigo.textContent = 'O nível de alerta da semana foi laranja';
    }
    if (perigoApi == 4) {
        nivelPerigo.textContent = 'O nível de alerta da semana foi vermelho'
    }
}
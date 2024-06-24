// URL da API que fornece os dados de dengue com CORS Anywhere
const apiUrl = 'https://cors-anywhere.herokuapp.com/https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=08&ey_start=2008&ew_end=25&ey_end=2029';

// Função para buscar os dados da API
async function fetchDengueData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Verifica se os dados estão aninhados em um objeto "results"
        const results = data.results || data;

        console.log('Dados brutos da API:', results);  // Verifica os dados recebidos
        return results;
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        return [];
    }
}

// Função para formatar os dados para o Chart.js
function formatDataForChart(data) {
    console.log('Formatando os dados para o Chart.js');

    // Mapeia os dados corretamente
    const labels = data.map(entry => {
        // Ajuste na propriedade do timestamp conforme a estrutura dos dados recebidos
        const timestamp = entry.data_iniSE;
        // Verifica se o timestamp é válido
        if (!timestamp) return 'Data Indisponível';

        // Converte milissegundos para data legível
        const date = new Date(parseInt(timestamp));

        // Formata a data como DD/MM/YYYY
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return formattedDate;
    });

    const cases = data.map(entry => entry.casos);

    labels.reverse();
    cases.reverse();

    console.log('Labels:', labels);
    console.log('Casos:', cases);

    return {
        labels: labels,
        datasets: [{
            label: 'Número de Casos de Dengue',
            data: cases,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
}


// Função para criar o gráfico
async function createChart() {
    const dengueData = await fetchDengueData();
    const chartData = formatDataForChart(dengueData);

    console.log('Dados para o gráfico:', chartData);  // Verificar os dados antes de criar o gráfico

    const ctx = document.getElementById('dengueChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Tipo de gráfico
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
            },
            scales: {
                x: {
                    type: 'category', // Definir o tipo de escala como categoria
                    title: {
                        display: true,
                        text: 'Tempo'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Número de Casos'
                    }
                }
            }
        }
    });
}

// Criar o gráfico quando a página carregar
window.onload = createChart;

let casos = []
let mês = []

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


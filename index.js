async function getMunicipios(UF) {
    const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + UF + "/municipios"
    );

    const data = await response.json();

    return data.map((municipio) => municipio.nome);
}

function getSelectorValue() {
    let myVar = document.getElementById("selector").value;
    getMunicipios(myVar).then(municipios => {

        const listaMunicipios = document.getElementById("list");
        const itensLista = document.getElementsByTagName("li");

        while (itensLista[0]) {
            listaMunicipios.removeChild(itensLista[0]);
        }
        console.log(itensLista);
        for (let i = 0; i < municipios.length; i++) {
            const municipio = municipios[i];

            const li = document.createElement("li");
            li.innerHTML = municipio;

            listaMunicipios.appendChild(li);
        }
    });
}


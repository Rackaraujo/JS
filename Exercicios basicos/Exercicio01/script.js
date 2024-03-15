const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const s = document.getElementById('s');
    const min = document.getElementById('min');
    const h = document.getElementById('h');
    const d = document.getElementById('d');

    const qtdS = tempo % 60;
    const qtdMin = Math.floor((tempo % (60 * 60)) / 60);
    const qtdH = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdD = Math.floor(tempo / (60 * 60 * 24));

    s.textContent = formatarDigito(qtdS);
    min.textContent = formatarDigito(qtdMin);
    h.textContent = formatarDigito(qtdH);
    d.textContent = formatarDigito(qtdD);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0 ){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}

const tempoRestante = () => {
    const dataEvento = new Date ('2024-01-01 00:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());
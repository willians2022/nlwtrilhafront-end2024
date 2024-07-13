const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-13 12:00"),
    finalizada: false
}

const criarItemDeAtividade = (atividade) => {
    return `
    <div>
        <input type="checkbox">
        <span> Academia em grupo </span>
        <time> Sábado, 13 de julho às 15h </time>
    </div>
    `
}

const section = document.querySelector('section')
section.innerHTML = criarItemDeAtividade(atividade)
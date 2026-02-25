// Dados fictícios dos cursos/dicas
const conteudos = [
    { titulo: "Mecatrônica", desc: "Como não queimar o PLC no primeiro teste." },
    { titulo: "Logística", desc: "Planilhas de Excel que vão salvar seu estágio." },
    { titulo: "TI / Software", desc: "O guia definitivo de Git para iniciantes." },
    { titulo: "Eletrotécnica", desc: "Cálculos de carga sem dor de cabeça." }
];

const container = document.getElementById('cards-container');
const themeBtn = document.getElementById('theme-toggle');

// Renderizar Cards
conteudos.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <h3>${item.titulo}</h3>
            <p>${item.desc}</p>
            <small>Postado por: Veterano_01</small>
        </div>
    `;
});

// Lógica de Dark Mode
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeBtn.innerText = "🌙 Dark Mode";
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️ Light Mode";
    }
});
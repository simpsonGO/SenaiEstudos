document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Digitação no Hero
    const title = document.querySelector('#home h1');
    const text = title.innerText;
    title.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 2. Filtro de Projetos na Tabela
    // (Simula uma busca real conforme você digita)
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Filtrar práticas...';
    searchInput.className = 'form-control mb-3 w-50';
    
    const tabelaProjetos = document.querySelector('#projetos .container');
    const tabela = document.querySelector('table tbody');
    
    // Insere o campo de busca antes da tabela
    tabelaProjetos.insertBefore(searchInput, document.querySelector('.table-responsive'));

    searchInput.addEventListener('keyup', () => {
        const value = searchInput.value.toLowerCase();
        const rows = tabela.querySelectorAll('tr');

        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(value) ? '' : 'none';
        });
    });

    // 3. Log de Inicialização (Console Debug)
    console.log("Sistemas de Mecatrônica Online... Status: 100%");
});

// 4. Função para destacar a linha da tabela ao clicar
const rows = document.querySelectorAll('tbody tr');
rows.forEach(row => {
    row.addEventListener('click', () => {
        rows.forEach(r => r.classList.remove('table-primary'));
        row.classList.add('table-primary');
    });
});
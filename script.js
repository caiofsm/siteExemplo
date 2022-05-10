const delay = ms => new Promise(res => setTimeout(res, ms));

const container = document.getElementById("main-content");

const linksMenu = document.querySelectorAll('.menu-list a')

const html = document.querySelector('html');

linksMenu.forEach(elemento =>
{
    const nome = elemento.textContent?.toLowerCase().replace(' ','')+'.html';
    elemento.addEventListener('click', () => trocarDePagina(nome, elemento))
});

function carregarPagina(pagina)
{
    fetch('pages/' + pagina)
        .then(async function (response)
        {
            container.insertAdjacentHTML('afterbegin', (await response.text()))
            container.children[0].style.opacity = 0;
            await delay(300);
            container.children[0].style.opacity = 1;
        });
}

async function trocarDePagina(pagina, elemento)
{
    container.children[0].style.opacity = 0;
    linksMenu.forEach(a => { a.classList.remove('is-active') })
    elemento.classList.add('is-active')
    await delay(300)
    container.removeChild(container.children[0]);
    carregarPagina(pagina);
}

carregarPagina('teste.html')

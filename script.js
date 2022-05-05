const container = document.getElementById("main-content");

const linksMenu = document.querySelectorAll('.menu-list a')

//console.log(linksMenu)

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
        });
}

function trocarDePagina(pagina, elemento)
{
    container.removeChild(container.children[0]);
    linksMenu.forEach(a => { a.classList.remove('is-active') })
    elemento.classList.add('is-active')
    carregarPagina(pagina);
}

carregarPagina('teste.html')

//console.log(container)
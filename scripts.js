
const list = document.querySelector('ul')
const botaoMostrarTudo = document.querySelector('.show-all')
const botãoMap = document.querySelector('.map-all') //procurando a classe do botão do MAP
const somarTudoValores =document.querySelector('.somarTudo')
const filtrarTudo = document.querySelector('.filtrarTudo')



let minhaLista = ''//variavel começando por vazia


function showAll(produtosArray) { //tudo que esta dentro dessa função só irá ser executado depois que o botão for clicado. 

    minhaLista = '' //reseta a variavel minha lista para impedir que as informações sejam copiadas. 

    produtosArray.forEach((produtos) => {
        minhaLista += `
            <li>
                <img src= ${produtos.src}>
                <p>${produtos.name}</p>
                <p class="price">R$ ${produtos.price}</p>
            </li>`
    });

    list.innerHTML = minhaLista
}

// o proximo objetivo é ao clicar no botão de map, e dar o desconto no sprodutos mostrando os mesmos na tela. 


function mostrarMap (){ //função que será executada ao clicar no botão de MAP no index.html - para das desconto nos produtos. 
    const newPrices = menuOptions.map((produtos) => ({ //essa variavel vai representar campo por campo
        ...produtos, // com o spread operatoe, ele vai esparramar todas as informações do array usado e so altera o que eu mandar. 
        price:produtos.price * 0.9, //calculo para dar 10% de desonto. 
        
    }))

    showAll(newPrices) //coloca os itens na tela. 

    //Spread Operator -> nova ferramenta que pode ser utilizada para evitar de ficar repetindo coisas.
    // ...produtos.nome do que quero mudar.

}

//FAZER A OPERAÇÃO DO REDUCE PARA VERIFICAR O PREÇO DE TODOS OS PRODUTOS. 

function somarTudo(){
    const totalValue = menuOptions.reduce((acumulador,valorAtual) => acumulador + valorAtual.price, 0)

    list.innerHTML = 
            `<li>
                <p> O valor total dos itens é R$ ${totalValue}</p>
            </li>`
}

//FAZENDO O FILTRO DAS INFORMAÇÕES

function filtrarValores() {
    const filterJustVegan = menuOptions.filter((produtos) => produtos.vegan)      
    
    showAll(filterJustVegan)

}


//os ouvintes dos botões ao serem clicados dentro da minha aplicação.

botaoMostrarTudo.addEventListener('click', () => showAll(menuOptions)) //preciso descobrir quando meu botao foi clicado. 
botãoMap.addEventListener('click', mostrarMap) //preciso descobrir quando meu botao foi clicado. 
somarTudoValores.addEventListener('click', somarTudo)
filtrarTudo.addEventListener('click', filtrarValores)



//meu objeto(dicionário) que vai armazenar todos os meus produtos que tenho na loja
const items = [
    {
        "id":0,//cada produto vai ter um ID
        "nome":"camiseta",//um nome
        "img":"./img/imagem.png",//ima imagem
        "quantidade":0
    },
    {
        "id":1,//cada produto vai ter um ID
        "nome":"short",//um nome
        "img":"./img/imagem.png",//ima imagem
        "quantidade":0
    },
    {
        "id":2,//cada produto vai ter um ID
        "nome":"sapato",//um nome
        "img":"./img/imagem.png",//ima imagem
        "quantidade":0
    }    
]
//essa é a forma mais moderna de se criar uma função é o mesmo que function inicializarLoja () {}
inicializarLoja = () => {
    //aqui vou colocar o meu container onde ficam todos os meus produtos
    var containerProdutos = document.querySelector('div#produtos');

    //agora vou percorrer todos os meu produtos de forma dinâmica e colocar dentro do meu container
    /*for(let i=0;i<items.length;i++){
        console.log(items[i].nome);
    }*/
    //outra forma de fazer a mesma coisa que esse for é usar a função map() do JS, a map recebe como parâmetro uma arrow function
    //e a arrow function recebe uma variável qualquer como parâmetro para ser a callback da arrow function no meu caso os items.nome
    items.map((juca) => {//aqui como parâmetro da arrow eu uso qualquer variável que vai o elemento mapeado do item então fica assim, variavel.id ou varial.nome etc
        //console.log(juca.nome)
        //todo esse HTML vai ser adicionado à minha página de forma dinâmica via DOM
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+juca.img+`" />
            <p>`+juca.nome+`</p>
            <a key="`+juca.id+`" href="">Adicionar ao Carrinho</a>

        `

    })
}
inicializarLoja()
/********************************************************************NO VÍDEO PAREI EM 11:30 */

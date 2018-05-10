let tree = new BinaryTree();
$().ready(()=>{
    $('#btnInserir').click(inserir);
    $('#btnBuscar').click(buscar);
    $('#btnRemover').click(remover);
    $('#btnEmOrdem').click(mostrarEmOrdem);
    $('#btnPreOrdem').click(mostrarPreOrdem);
    $('#btnPosOrdem').click(mostrarPosOrdem);
});
function mostrarItem(item){
    let el = $('#saida');
    el.empty();
    el.append(`<span class="ui label">${item}</span>`);
}
function incluir(item){
    $('#saida').append(`<span class="ui label">${item}</span>`);
}

function inserir(){
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    tree.insert(num);
    mostrarItem('Inserido: '+num);
}
function buscar(){
    alert('Clicado buscar');
}
function remover(){
    alert('Clicado remover');
}
function mostrarEmOrdem(){
    $('#saida').empty();
    tree.inOrderTraverse(incluir);
}
function mostrarPreOrdem(){
    $('#saida').empty();
    tree.preOrderTraverse(incluir)
}
function mostrarPosOrdem(){
    $('#saida').empty();
    tree.postOrderTraverse(incluir)
}


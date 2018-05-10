let tree = new BinaryTree();
$().ready(()=>{
    $('#btnInserir').click(inserir);
    $('#btnBuscar').click(buscar);
    $('#btnRemover').click(remover);
    $('#btnEmOrdem').click(mostrarEmOrdem);
    $('#btnPreOrdem').click(mostrarPreOrdem);
    $('#btnPosOrdem').click(mostrarPosOrdem);
});
function mostrar(data){
    let el = $('#saida');
    el.empty();
    el.append(data);
}
function inserir(){
    let num = parseInt(prompt("informe o numero a inserir na arvore:"));
    mostrar(`<span class="ui label">${num}</span>`);
}
function buscar(){
    alert('Clicado buscar');
}
function remover(){
    alert('Clicado remover');
}
function mostrarEmOrdem(){
    alert('Clicado mostrarEmOrdem');
}
function mostrarPreOrdem(){
    alert('Clicado mostrarPreOrdem');
}
function mostrarPosOrdem(){
    alert('Clicado mostrarPosOrdem');
}
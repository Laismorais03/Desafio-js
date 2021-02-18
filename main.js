
function compra(){
    var $lista = document.querySelector('ul');
    var $produto = document.querySelector("#produto").value;
    var $email = document.querySelector("#email").value;
    var $compra = document.querySelector("#comprar").value;
    var $quantidade = document.querySelector("#quantidade").value;
var $preço= document.querySelector('#preço');
    $compra.addEventListener("click",function compra(){
        var compra = $produto.value; 
        console.log(compra);
    

 let preçopac = $preço*$quantidade;

 let parcelas = preçopac/$quantidade;

 total= preçopac.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
parcelas = parcelas.toLocaleString('pt-br',{style:'currency', currency: 'BRL'});
 return
 document.write("O"+$email+"tem o total de:"+preçopac);
 document.write("Opções de parcelas de:"+parcelas);
 });
};
const botoes=document.querySelectorAll(".botao");

for( let i = 0 < botoes.length; j++){
  botoes [i].onclick = function(){
    for(let j=0; j< botoes.length; j++){
        botes [j].classlist.remove("ativo");
    }
    botes[i].classlist.add("ativo")
  }
}
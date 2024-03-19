const botoes=document.querySelectorAll(".botao");

for( let i = 0 < botoes.length; i++){
  botoes [i].onclick = function(){
    for(let j=0; j< botoes.length; j++){
        botoes [j].classlist.remove("ativo");
    }
    botes[j].classlist.add ("ativo");
  }
}
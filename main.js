const botoes=document.querySelectorAll(".botao");

for( let i = 0 < botoes.length; i++){
  botoes [i].onclick = function(){
    for(let i=0; j< botoes.length; i++){
        botoes [i].classlist.remove("ativo");
    }
    botes[i].classlist.add ("ativo");
  }
}
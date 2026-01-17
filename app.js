function cadastrar(){
  localStorage.setItem("whatsapp", document.getElementById("whatsapp").value);
  localStorage.setItem("inicioTeste", new Date().getTime());
  window.location.href="app.html";
}

const inicio = localStorage.getItem("inicioTeste");
const whatsapp = localStorage.getItem("whatsapp");
const usuarios = JSON.parse(localStorage.getItem("usuarios_premium")) || {};
const agora = new Date().getTime();
const limite = 24*60*60*1000;

if(document.getElementById("conteudo")){
  if(usuarios[whatsapp] && agora < usuarios[whatsapp]){
    document.getElementById("conteudo").innerHTML="<h3>Premium ativo</h3>";
  } else if(agora - inicio <= limite){
    document.getElementById("conteudo").innerHTML="<h3>Teste grátis ativo (24h)</h3>";
  } else {
    document.getElementById("conteudo").innerHTML="<h3>Teste expirado</h3>";
  }
}

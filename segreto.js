const bottoneSegreto = document.getElementById('bottoneSegreto')
function mostraBottone() {
  bottoneSegreto.style.display = 'block';
}

bottoneSegreto.addEventListener('click', function() {
  alert('Oh no, cliccando tale bottone ti sei offerto volontatio agli Hunger Games D: ... Ti consigliamo di scappare, se riesci, altrimenti prendi arco e frecce e preparati alla sopravvivenza!');
});

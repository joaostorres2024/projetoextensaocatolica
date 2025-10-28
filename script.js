const pergunta = document.querySelectorAll('.pergunta');

pergunta.forEach(pergunta => {
  pergunta.addEventListener('click', () => {
    const resposta = pergunta.nextElementSibling;
    resposta.classList.toggle('ativa');
  });
});

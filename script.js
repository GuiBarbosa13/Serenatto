const switchModoNouturno = document.querySelector('#switchModoNoturno');
const bodyProjeto = document.querySelector('body');

function mudarTema (){
    const modo = switchModoNouturno.checked ? 'dark' : 'light';
    bodyProjeto.setAttribute('data-bs-theme', modo)
}

switchModoNouturno.addEventListener('click', mudarTema);
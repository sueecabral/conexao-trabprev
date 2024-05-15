// const hamburguer = document.querySelector(".hamburguer");

// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => nav.classList.toggle("active"));



// const hamburguer = document.querySelector(".hamburguer");
// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => {
//   nav.classList.toggle("active");
  
//   if (nav.classList.contains("active")) {
//     // Desativar scroll quando o menu estiver ativo
//     document.body.style.overflow = 'hidden';
//   } else {
//     // Ativar scroll quando o menu estiver fechado
//     document.body.style.overflow = '';
//   }
// });

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    // Defina a altura máxima do menu como a altura da janela
    nav.style.maxHeight = window.innerHeight + 'px';
    // Desativar scroll quando o menu estiver ativo
    document.body.style.overflow = 'hidden';
  } else {
    // Remova a altura máxima do menu
    nav.style.maxHeight = null;
    // Ativar scroll quando o menu estiver fechado
    document.body.style.overflow = '';
  }
});


// const hamburguer = document.querySelector(".hamburguer");

// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => nav.classList.toggle("active"));



const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

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

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    // Adicionar classe "menu-ativo" ao body
    document.body.classList.add("menu-ativo");

    // Desativar scroll da página
    document.body.style.overflow = 'hidden';
  } else {
    // Remover classe "menu-ativo" do body
    document.body.classList.remove("menu-ativo");

    // Ativar scroll da página
    document.body.style.overflow = '';
  }
});
const elementosAnimados = document.querySelectorAll(".valores__card, .beneficios");

const mostrarElemento = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

elementosAnimados.forEach((elemento) => {
  mostrarElemento.observe(elemento);
});

const beneficios = document.querySelectorAll(".beneficios__item");

beneficios.forEach((beneficio) => {
  beneficio.addEventListener("click", () => {
    beneficio.classList.toggle("activo");
  });
});
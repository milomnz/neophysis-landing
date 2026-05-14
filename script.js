const form = document.querySelector('.neo-physis-form');
const fields = Array.from(document.querySelectorAll('.neo-physis-form__field'));
const status = document.querySelector('#neo-physis-form-status');

const messages = {
  name: 'Escribe tu nombre completo.',
  email: 'Ingresa un correo electrónico válido.',
  area: 'Selecciona un área de investigación.',
  message: 'Comparte una propuesta de al menos 20 caracteres.',
};

const validateField = (field) => {
  const input = field.querySelector('.neo-physis-form__input');
  const feedback = field.querySelector('.neo-physis-form__feedback');
  const value = input.value.trim();
  let isValid = true;
  let message = '';

  if (input.hasAttribute('required') && !value) {
    isValid = false;
    message = messages[input.id] || 'Este campo es obligatorio.';
  } else if (input.type === 'email' && value && !input.checkValidity()) {
    isValid = false;
    message = messages.email;
  } else if (input.id === 'message' && value.length > 0 && value.length < 20) {
    isValid = false;
    message = messages.message;
  }

  field.classList.toggle('is-valid', isValid && value.length > 0);
  field.classList.toggle('is-invalid', !isValid);
  feedback.textContent = message;

  return isValid;
};

fields.forEach((field) => {
  const input = field.querySelector('.neo-physis-form__input');

  input.addEventListener('input', () => {
    validateField(field);
    status.textContent = '';
    status.className = 'neo-physis-form__status';
  });

  input.addEventListener('blur', () => {
    validateField(field);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const invalidFields = fields.filter((field) => !validateField(field));

  if (invalidFields.length > 0) {
    status.textContent = 'Revisa los campos marcados para continuar con tu propuesta.';
    status.className = 'neo-physis-form__status is-error';
    invalidFields[0].querySelector('.neo-physis-form__input').focus();
    return;
  }

  status.textContent = 'Propuesta enviada. Nuestro equipo revisará tu información pronto.';
  status.className = 'neo-physis-form__status is-success';
  form.reset();

  fields.forEach((field) => field.classList.remove('is-valid', 'is-invalid'));
  fields.forEach((field) => {
    const feedback = field.querySelector('.neo-physis-form__feedback');
    feedback.textContent = '';
  });
});

// Activa una entrada suave al cargar la sección en la vista.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.neo-physis-cta')?.classList.add('is-ready');
});

/* ======================================
   VALORES Y BENEFICIOS - INTERACTIVIDAD
   ====================================== */

// Animación de entrada para cards de valores
const elementosAnimados = document.querySelectorAll('.valores__card, .beneficios');

const mostrarElemento = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
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

// Interactividad de botones de beneficios
const beneficios = document.querySelectorAll('.beneficios__item');

beneficios.forEach((beneficio) => {
  beneficio.addEventListener('click', () => {
    beneficio.classList.toggle('activo');
  });
});

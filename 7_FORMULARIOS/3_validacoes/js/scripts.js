(function() {
  'use strict'

  let forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {

    form.addEventListener('submit', function (event) {
      if(!form.checkValidity()) {
        event.preventDefault(); // não deixa ser enviado para o servidor.
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);

  });
})()
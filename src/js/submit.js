let fields = document.querySelectorAll('.contact-form-field'); // select all inputs
let submitButton = document.querySelector('.modal-btn'); // select submit btn

fields = Array.from(fields); // Turn fields into an Array to access the ".every" method.

fields.forEach(field => {
  field.addEventListener('keyup', () => {
    submitButton.disabled = !fields.every(field => field.value);
  });
});

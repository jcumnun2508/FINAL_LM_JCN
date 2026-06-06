console.log("¡Sí! El archivo script.js se está leyendo correctamente.");
document.addEventListener(
    'DOMContentLoaded', () => {
  'use strict'

  const form = document.getElementById('miFormulario')
  const modalElement = document.getElementById('modalFormulario')

  if (!form || !modalElement) return;

  form.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()

    if (!form.checkValidity()) {
      form.classList.add('was-validated')
    } else {
      const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement)
      modalInstance.hide()
    }
  }, false)

  modalElement.addEventListener('hidden.bs.modal', () => {
    form.reset()
    form.classList.remove('was-validated')
  })
})
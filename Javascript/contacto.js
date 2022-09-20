//ALERTA Y CODIGO PARA EL ENVIO AUTOMATICO DE RESPUESTA AL CONTACTO
const btn = document.getElementById('button');

const alertaEmail = () => {
  Swal.fire({
    icon: 'success',
    title: 'Genial!',
    text: 'El Comentario se envio correctamente, revisa la casilla de SPAM de tu correo! :)',
  })
};

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_pcwkqyf';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alertaEmail();
      }, (err) => {
        alert(JSON.stringify(err));
      });
  });

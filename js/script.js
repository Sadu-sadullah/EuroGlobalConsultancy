document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = document.querySelector('.theme-button-one'); 
        btn.textContent = 'Sending...';

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        let selectedServices = [];

        for (const checkbox of checkboxes) {
          selectedServices.push(checkbox.value);
        }

        if (selectedServices.length === 0) {
          selectedServices = ["none"];
        }

        let parms = {
          name: document.querySelector('input[placeholder="Name *"]').value,
          phone: document.getElementById('phone').value,
          email: document.querySelector('input[placeholder="Email *"]').value,
          service: selectedServices,
          message: document.querySelector('textarea').value
        }

        const form = document.getElementById('form');

        const serviceID = 'service_6bdfto4';
        const templateID = 'template_gcoled7';

        emailjs.send(serviceID, templateID, parms)
            .then(() => {
                btn.textContent = 'SEND';
                Swal.fire({
                  title: "Success!",
                  text: "The email has been sent! We will get back to you shortly!",
                  icon: "success"
                });
                document.forms[0].reset();
            }, (err) => {
                btn.textContent = 'SEND';
                alert(JSON.stringify(err));
            });
    });
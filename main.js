function onClick (event) {
    event.preventDefault();
    
    const mensaje = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario', 
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }
  function cleanForm() {
      let formulario = document.getElementById('formulario');    
      formulario.reset();    
  }

  let boton = document.getElementById("enviar");
   boton.addEventListener("click", onClick);
    async function getclima(){
     try { let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.18332&lon=-65.33128&appid=39f18590c50e933ada60859361ed6bc4");
      let ipResponse = await response.json();
       console.log(ipResponse);
        let tempactual = ipResponse.main.temp - 273.15;
         let tempact= tempactual.toFixed(2)+ 'ºC';
          document.getElementById('resultado').innerHTML = tempact;
           console.log(tempact);
           } 
           catch { 
            console.log("Algo paso, no se pudo resolver...");
           }
           } 
           getclima();
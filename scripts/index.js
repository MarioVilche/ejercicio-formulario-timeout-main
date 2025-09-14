// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
const button = document.querySelector(".login-btn")

button.addEventListener("click", () => {



  // 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
  // Deberás agregar la función correspondiente para simular dicha demora.

  const estado = document.querySelector("#loader")
  estado.classList.remove("hidden")

  const estadoFinal = document.querySelector("#error-container")
  estadoFinal.classList.replace("small", "hidden")

  setTimeout(() => {
    // 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."


    // 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
    // 1) Que el primer input sea un email válido.
    const email = document.querySelector("#email-input").value
    const emailValido = /\S+@\S+\.\S+/.test(email);

    // 2) Que la contraseña tenga al menos 5 caracteres.
    const contraseña = document.querySelector("#password-input").value

    const passValida = contraseña.length >= 5;

    // 3) Que los datos ingresados corresponden a una
    // persona que se encuentre registrada en la base de datos.
    // En caso de que alguna de las validaciones no sea exitosa,
    // se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

    const usuario = baseDeDatos.usuarios.find(
      (u) => u.email === email && u.password === contraseña
    );

    if (!emailValido || !passValida || !usuario) {
      estado.classList.add("hidden");
      estadoFinal.classList.replace("hidden", "small");
      estadoFinal.innerHTML = "Alguno de los datos ingresados son incorrectos";
      return;
    }

    // 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
    // un mensaje de bienvenida al sitio.

    document.querySelector("form").classList.add("hidden");
    document.querySelector("main").innerHTML = "<h1>Bienvenido al sitio 😀</h1>";
    estado.classList.add("hidden");

  }, 3000);

})

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */

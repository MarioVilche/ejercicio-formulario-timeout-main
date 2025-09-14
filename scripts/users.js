const btnFlotante = document.createElement("button");
btnFlotante.textContent = "👤 Ver usuarios";
btnFlotante.style.position = "fixed";
btnFlotante.style.bottom = "20px";
btnFlotante.style.left = "20px";
btnFlotante.style.zIndex = "9999";
btnFlotante.style.padding = "10px 16px";
btnFlotante.style.background = "#1976d2";
btnFlotante.style.color = "#fff";
btnFlotante.style.border = "none";
btnFlotante.style.borderRadius = "50px";
btnFlotante.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
btnFlotante.style.cursor = "pointer";
document.body.appendChild(btnFlotante);

// Crear contenedor oculto para los datos
const contenedorUsuarios = document.createElement("div");
contenedorUsuarios.style.position = "fixed";
contenedorUsuarios.style.bottom = "70px";
contenedorUsuarios.style.left = "20px";
contenedorUsuarios.style.background = "#fff";
contenedorUsuarios.style.border = "1px solid #ccc";
contenedorUsuarios.style.borderRadius = "8px";
contenedorUsuarios.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
contenedorUsuarios.style.padding = "16px";
contenedorUsuarios.style.display = "none";
contenedorUsuarios.style.zIndex = "9999";
contenedorUsuarios.style.maxWidth = "300px";
contenedorUsuarios.style.fontSize = "14px";
document.body.appendChild(contenedorUsuarios);

// Mostrar/ocultar usuarios al hacer click
btnFlotante.addEventListener("click", () => {
    if (contenedorUsuarios.style.display === "none") {
        contenedorUsuarios.innerHTML = "<strong>Usuarios de prueba:</strong><br><br>" +
            baseDeDatos.usuarios.map(u =>
                `<b>Nombre:</b> ${u.name}<br>
         <b>Email:</b> ${u.email}<br>
         <b>Contraseña:</b> ${u.password}<br><hr>`
            ).join("");
        contenedorUsuarios.style.display = "block";
        btnFlotante.textContent = "🙈 Ocultar usuarios";
    } else {
        contenedorUsuarios.style.display = "none";
        btnFlotante.textContent = "👤 Ver usuarios";
    }
});
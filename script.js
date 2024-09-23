// Validación adicional con JavaScript
   function validarFormulario() {
      let valido = true;

      // Validación del nombre
      const nombre = document.getElementById("nombre");
      const errorNombre = document.getElementById("error-nombre");
      if (nombre.value.length < 5) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        valido = false;
      } else {
        errorNombre.textContent = "";
      }

      // Validación de las contraseñas
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirm_password");
      const errorPassword = document.getElementById("error-password");
      const errorConfirmPassword = document.getElementById("error-confirm_password");

      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
      if (!passwordRegex.test(password.value)) {
        errorPassword.textContent = "La contraseña debe contener al menos una letra mayúscula y un número.";
        valido = false;
      } else {
        errorPassword.textContent = "";
      }

      if (password.value !== confirmPassword.value) {
        errorConfirmPassword.textContent = "Las contraseñas no coinciden.";
        valido = false;
      } else {
        errorConfirmPassword.textContent = "";
      }

      // Validación de la fecha de nacimiento (mayores de 18 años)
      const fechaNacimiento = document.getElementById("fecha_nacimiento");
      const errorFechaNacimiento = document.getElementById("error-fecha_nacimiento");
      const hoy = new Date();
      const fechaNacimientoUsuario = new Date(fechaNacimiento.value);
      const edad = hoy.getFullYear() - fechaNacimientoUsuario.getFullYear();

      if (edad < 18 || isNaN(edad)) {
        errorFechaNacimiento.textContent = "Debes ser mayor de 18 años.";
        valido = false;
      } else {
        errorFechaNacimiento.textContent = "";
      }

      return valido;
    }
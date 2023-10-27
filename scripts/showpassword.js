document.addEventListener("DOMContentLoaded", () => {
    const eyeClose = document.getElementById('eye-close');
    const eyeOpen = document.getElementById('eye-open');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const user = document.getElementById('user');
    
  
    eyeOpen.addEventListener("click", () => {
      eyeOpen.classList.add('hidden');
      eyeClose.classList.remove('hidden');
      password.type = 'text';
    });
  
    eyeClose.addEventListener("click", () => {
      eyeClose.classList.add('hidden');
      eyeOpen.classList.remove('hidden');
      password.type = 'password';
    });
  
    loginButton.addEventListener("click", () => {
      const passwordValue = password.value;
      const userValue = user.value;
      const PIN = "Alfonso1234"
  
      if (userValue === '' || passwordValue === '') {
        alert('Introduzca los datos');
      } else if (passwordValue === PIN) {
        window.location.href = 'inicio.html'; // Cambiado a 'inicio.html'
      } else {
        alert('Contraseña incorrecta');
      }
    });
  });
  
<template>
<header class="hero">

    <div class="logo-em">
         <img :src="logoBase64" alt="Logo Base64" class = 'imagen-logo'>
    </div>

    <div class="hero-content">
      <h1>Transformamos tus ideas en soluciones digitales</h1>
      <p>Desarrollo de software, aplicaciones móviles y soluciones web a tu medida</p>
      <button @click="contactar">Contáctanos</button>
    </div>
  </header>
</template>
<script>



  export default {
    name: 'HomeView',
    data() {
    return {
      logoBase64: ''
    }
  },
    mounted() {
    fetch('/logo/logo.txt')
      .then(res => res.text())
      .then(text => {
        this.logoBase64 = `data:image/png;base64,${text}`
      })
  }
  };
</script>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif; 
  background: #FAFAFA;
  text-align: center;
}

.logo-em {
  display: flex;
  justify-content: center;
}

.logo {
  width: 115px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-content button {
  background: #0077b6;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.hero-content button:hover {
  background:#F1F5F9;
}
</style>
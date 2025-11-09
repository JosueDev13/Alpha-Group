<template>
  <div class="card-container">
    <div class="card">
      <p class="letter">Déjanos tu información</p>

      <!-- Animación Lottie -->
      <div class="lottie-container" ref="lottieContainer"></div>

      <!-- Formulario -->
      <form @submit.prevent="enviarFormulario" class="formulario">
        <input 
          v-model="form.nombre" 
          type="text" 
          placeholder="Nombre completo" 
          required
        />
        <input 
          v-model="form.email" 
          type="email" 
          placeholder="Correo electrónico" 
          required
        />
        <input 
          v-model="form.telefono" 
          type="text" 
          placeholder="Teléfono de contacto"
        />
        <input 
          v-model="form.empresa" 
          type="text" 
          placeholder="Empresa" 
          required
        />
        <input 
          v-model="form.information" 
          type="text" 
          placeholder="Servicio que desea información" 
          required
        />
        <select name="choice">
        <option value="first">WhatsApp</option>
        <option value="second" selected>Correo eléctronico</option>
        <option value="third">Llamada</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import lottie from "lottie-web";

export default {
  name: "CardFormCSS",
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        telefono: "",
        password: ""
      }
    };
  },
  methods: {
    enviarFormulario() {
      console.log("Datos enviados:", this.form);
      alert(`Gracias ${this.form.nombre}, hemos recibido tu información 🚀`);
      this.form.nombre = "";
      this.form.email = "";
      this.form.telefono = "";
      this.form.password = "";
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animations/contact.json"
    });
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  width: 100%;
}

.card {
  background: #fff;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  padding: 30px 20px;
  border-radius: 12px;
  text-align: center;
  width: 400px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.25);
}

.letter {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}


.lottie-container {
  width: 150px;
  height: 150px;
  margin: 0 auto 20px;
}


.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.formulario input {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
}

.formulario input:focus {
  border-color: #415a77;
  box-shadow: 0 0 5px rgba(46, 122, 203, 0.5);
}

.formulario button {
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #415a77;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.formulario button:hover {
  background-color: #415a77;
}
.formulario select {
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: 0.3s;
  background-color: transparent;
}
</style>

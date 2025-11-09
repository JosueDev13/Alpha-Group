<template>
  <section class="hero-blog">

    <div class="hero-content">
      <h1>Bienvenido a nuestro blog</h1>
      <p>Reflexiones, tutoriales y recursos sobre desarrollo web, programación y tecnología.</p>
      <button @click="scrollToContent">Explorar Artículos</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBlog",
  methods: {
    scrollToContent() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.hero-blog {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('https://picsum.photos/1600/900?blur=3') center/cover no-repeat;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
}

.hero-content {
  text-align: center;
  margin: auto;
  max-width: 700px;
  padding: 0 1rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-content button {
  background: #0077b6;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;
}

.hero-content button:hover {
  background: #e68900;
}
</style>

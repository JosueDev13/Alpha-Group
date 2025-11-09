<!-- src/views/NotFound.vue -->
<template>
  <div class="not-found">
    <h1>Página no encontrada</h1>
    <p>Redirigiéndote al inicio...</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted() {
    setTimeout(() => {
      this.$router.replace('/'); // redirige a la página principal
    }, 3000); // 3 segundos antes de redirigir
  }
}
</script>

<style>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>

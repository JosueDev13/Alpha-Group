<template>

 <nav class="horizontal-menu">
      <!-- <img :src="logoBase64" alt="Logo Base64" class = 'imagen-logo'> -->
    <ul>
      <li><router-link to="/">Home</router-link></li>
       <li><router-link to="/About">Nosotros</router-link></li>
      <li><router-link to="/Service">Nuestros servicios</router-link></li>
      <li><router-link to="/Blog">Blog</router-link></li>
      <li><router-link to="/Contact">Contáctanos</router-link></li>
    </ul>
 </nav>
</template>

<script>
export default{
  name: 'MenuComponent',
    data() {
    return {
      logoBase64: ''
    }
  },
  mounted() {
    fetch('/logo.txt')
      .then(res => res.text())
      .then(text => {
        this.logoBase64 = `data:image/png;base64,${text}`
      })
  }
}
</script>
<style scoped>

.horizontal-menu {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  padding: 26px 15px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.05);
}

.horizontal-menu ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 auto;

}

.horizontal-menu ul li {
  margin: 0 15px;
}

.horizontal-menu ul li a {
  text-decoration: none;
  color: #34495e;
  font-weight: 500;
  font-size: 15px;
  transition: color 0.3s;
}

.horizontal-menu ul li a:hover {
  color: #778da9; 
}

.Container-text {
  text-align: center;
  padding: 20px 0;
  width: 100%;
}
.imagen-logo{
  width: 150px;
}
.li{
    font-size: 16px;
  font-weight: bold;
}
</style>
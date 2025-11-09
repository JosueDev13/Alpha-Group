<template>
   <div class="card-container">
    <div class="card">
       <div class="img" ref="icon6Container"></div>
      <p class="letter">IoT</p>


    </div>
    <div class="card">
      <div class="img" ref="icon5Container"></div>
      <p class="letter">DESARROLLO DE APLIACIONES MÓVILES</p>
    </div>

    <div class="card">
      <div class="img" ref="icon7Container"></div>
      <p class="letter">AUTOMATIZACIÓN DE PROCESOS</p>
    </div>

    <div class="card">
      <div class="img" ref="icon8Container"></div>
      <p class="letter">CONSULTORÍA TECNOLÓGICA</p>
    </div>
  </div>

   <div class="card-container1">
    <div class="card">
       <div class="img" ref="lottieContainer"></div>
      <p class="letter">MANTENIMIENTO Y SOPORTE</p>
    </div>

    <div class="card">
      <div class="img" ref="icon2Container"></div>
      <p class="letter">INTEGRACIÓN DE SISTEMAS</p>
    </div>

    <div class="card">
      <div class="img" ref="icon3Container"></div>
      <p class="letter">DISEÑO WEB</p>
    </div>

    <div class="card">
      <div class="img" ref="icon4Container"></div>
      <p class="letter">HOSTING EMPRESARIAL</p>
    </div>
  </div>


</template>
<script>
import lottie from 'lottie-web'
export default {
  name: 'CardList',
    mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',          
      loop: true,
      autoplay: true,
      path: '/animations/Maintenance.json'  
    });
   
  lottie.loadAnimation({
    container: this.$refs.icon2Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/Server.json'
  });
    lottie.loadAnimation({
    container: this.$refs.icon3Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/Design V2.json'
  });
    lottie.loadAnimation({
    container: this.$refs.icon4Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/cloud.json'
  });
      lottie.loadAnimation({
    container: this.$refs.icon5Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/app.json'
  });
        lottie.loadAnimation({
    container: this.$refs.icon6Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/Online Banking.json'
  });
          lottie.loadAnimation({
    container: this.$refs.icon7Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/Activity.json'
  });
            lottie.loadAnimation({
    container: this.$refs.icon8Container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/animations/Sales Consultant.json'
  })
    }
  }

</script>

<style scoped>
.card-container {

  display: flex;
  padding: 26px 15px;
  justify-content: space-between;  
  align-items: center;            
  margin: 4% auto;                
  width: 75%;
}

.card-container1 {

  display: flex;
  padding: 26px 15px;
  justify-content: space-between;  
  align-items: center;            
  margin: 1% auto;                
  width: 75%;
}

.card {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
  height: 300px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.letter{
  font-size: 16px;
  font-weight: bold;
  padding: 40px;
}
.buttons{
  margin-top: 100px;
}
.buttons:hover {
  transform: translateY(-8px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.img{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  width: 100%;
}
</style>

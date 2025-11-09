<template>
  <section class="nosotros">
    <div class="contenedor">
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una empresa dedicada al desarrollo de software y soluciones tecnológicas,
        comprometidos en brindar herramientas innovadoras que impulsan la transformación digital.
      </p>

      <div class="stats">
        <div class="stat">
          <h3>+50</h3>
          <p>Proyectos completados</p>
        </div>
        <div class="stat">
          <h3>+200</h3>
          <p>Clientes satisfechos</p>
        </div>
        <div class="stat">
          <h3>+10</h3>
          <p>Años de experiencia</p>
        </div>
      </div>


      <div class="cards">
        <div class="card">
          <h3>Misión</h3>
          <p>Proporcionar soluciones tecnológicas accesibles y de calidad.</p>
        </div>
        <div class="card">
          <h3>Visión</h3>
          <p>Ser líderes en innovación tecnológica en la región.</p>
        </div>
        <div class="card">
          <h3>Valores</h3>
          <p>Innovación, compromiso, transparencia y excelencia.</p>
        </div>
      </div>

      <div class="cta">
        <v-btn color="green" rounded="xl" large>Conócenos más</v-btn>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros {
  padding: 4rem 2rem;
  text-align: center;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
}
.stat h3 {
  font-size: 2rem;
  color: #0077b6;
}
.cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 280px;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-8px);
}
.cta {
  margin-top: 2rem;
}
</style>

<template>
    <footer class="footer">
      <div class="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/animation/Facebook.png" alt="Facebook">
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/animation/X (Twitter).png" alt="X">
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/animation/Instagram.png" alt="Instagram">
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/animation/LinkedinV3.png" alt="LinkedIn">
        </a>
      </div>
      <p>&copy; 2025 AlphaGroup Tecnologia Sociedad Anónima de Capital 
        Variable. Todos los derechos reservados.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'SocialFooter',
  };
  </script>
  
  <style scoped>
  .footer {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px 0;
    width: 100%;
    bottom: 100px;
  }
  .footer:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
  .social-media {
    margin-bottom: 10px;
  }
  
  .social-media a {
    margin: 0 10px;
    display: inline-block;
  }
  
  .social-media img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
  }
  
  .social-media img:hover {
    transform: scale(1.1);
  }
  </style>
  
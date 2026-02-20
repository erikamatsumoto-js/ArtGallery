<template>
  <nav id="footer">
    <h2 class="footer-title">API</h2>
    <a href="https://api.artic.edu/docs/#iiif-image-api" class="footer-link">
      Art Institute of Chicago API
    </a>
  </nav>
</template> 

<style>
#footer {
  display: flex; 
  align-items: center;   
  gap: 15px;          
  padding-top: 20px;
  border-top: 1px solid #ddd; 
}

.footer-title {
  margin: 0; 
  font-size: 1.2rem;
}

.footer-link {
  text-decoration: none; 
  color: #666;
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline; 
}
</style>
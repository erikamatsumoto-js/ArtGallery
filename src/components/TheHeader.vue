<script>
import houseIcon from '/assets/house-window_9247195.png'
import heartIcon from '/assets/heart_18561379.png'

export default {
  data() {
    return {
      houseLogo: houseIcon,
      heartLogo: heartIcon
    }
  },
   props: {
    msg: String
  }
}
</script>

<template>
  <nav id="header">
    <h1 id="header-title">ART</h1>
    <h2 id="slogan">-Art that colors your life</h2>
    <p>{{ msg }}</p>
    <div class="nav-links">
      <RouterLink to="/"><img :src="houseLogo" alt="HomeIcon" width="30" height="30"></RouterLink>
      <RouterLink to="/favorites"><img :src="heartLogo" alt="HeartIcon" width="30" height="30"></RouterLink>
    </div>
  </nav>
</template>

<style>
#header {
  display: flex;       
  align-items: center; 
  gap: 20px;          
  padding: 10px 20px;
}

#header-title {
  font-size: 80px; 
  font-weight: bold;
  margin: 0;          
}

#slogan {
  margin-right: auto;  
  font-weight: normal;
}

.nav-links {
  display: flex;
  gap: 15px;
}
</style>
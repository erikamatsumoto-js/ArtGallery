<script>
//option API
export default {
  data() {
    return {
      heroArt: null,
    }
  },
  created() {
    fetch('https://api.artic.edu/api/v1/artworks?limit=100&fields=id,title,artist_display,image_id,description')
      .then((response) => response.json())
      .then((result) => {
        const heroArtImage = result.data.filter(work => work.image_id)

        if (heroArtImage.length > 0) {
          const randomIndex = Math.floor(Math.random() * heroArtImage.length)
          this.heroArt = heroArtImage[randomIndex]
        }
      })
      .catch(error => console.error("Error:", error))
  }
}
</script>

<template>
  <div v-if="heroArt" class="hero-container">
    <h2>A WORK AT RANDOM</h2>
    <div class="hero-card">
      <div class="hero-image-container">
        <img v-bind:src="`https://www.artic.edu/iiif/2/${heroArt.image_id}/full/843,/0/default.jpg`" class="hero-art-image" alt="Random Art" >
      </div>
    </div>
    <div>
          <p class="title">{{ heroArt.title }}</p>
          <p class="artist">{{ heroArt.artist_display }}</p>
        </div>
  </div>
  <p v-else>Loading Art...</p>
  <hr>
</template>

<style>
.hero-container {
  width: 100%;
  margin-bottom: 20px;
}


.hero-card {
  position: relative;
}

.hero-image-container {
  position: relative; 
  width: 100%;
  overflow: hidden;
}

.hero-art-image {
  width: 100%;
  max-height: 500px; 
  object-fit: cover;
}

.title {
  font-weight: bold;
  font-size: 1.5rem; 
  margin: 0;
}
.artist {
  font-size: 1rem;
  margin: 5px 0 0 0;
}
</style>
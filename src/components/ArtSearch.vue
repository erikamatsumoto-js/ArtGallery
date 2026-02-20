<script setup>
import { ref } from 'vue'
import { useFavoritesStore } from '../store'
import ArtDetailModal from './ArtDetailModal.vue'

const store = useFavoritesStore()
const searchInput = ref('') 
const artworksSearched = ref([]) 
const selectedArt = ref(null) 
const searchOffset = ref(0)

const openModal = (work) => {
  selectedArt.value = work
}

const closeModal = () => {
  selectedArt.value = null
}

const loadNext10search = () => {

  searchOffset.value += 10
  searchArt()
}

const searchArt = () => {
  if (!searchInput.value) return 

  fetch(`https://api.artic.edu/api/v1/artworks/search?q=${searchInput.value}&limit=10&from=${searchOffset.value}&fields=id,title,artist_display,image_id,description`)
    .then((response) => response.json())
    .then((result) => {
      artworksSearched.value = result.data
    })
    .catch(error => console.error("Error:", error))
}

const clearSearch = () => {
  searchInput.value = ''
  artworksSearched.value = []
}
</script>

<template>
  <div class="search-section">
    <input type="text" v-model="searchInput" @keyup.enter="searchArt" placeholder="Search Art">
    <button id="searchbutton" @click="searchArt">Search</button>
    <button @click="clearSearch">Clear</button>
  </div>

  <h1>SEARCH RESULT</h1>
  
  <div class="gallery-grid">
    <div class="card" v-for="work in artworksSearched" :key="work.id" @click="openModal(work)">
      <div class="image-container">
        <img 
          v-if="work.image_id" 
          :src="`https://www.artic.edu/iiif/2/${work.image_id}/full/400,/0/default.jpg`" 
          class="art-image"
        >
        <div class="info-overlay">
          <button class="add-favorites" @click.stop="store.toggleFavorite(work)">
            <img src="/assets/heart_18561379.png" alt="HeartIcon" width="15" height="15">
          </button>
          <p class="title">{{ work.title }}</p>
          <p class="artist">{{ work.artist_display }}</p>
        </div>
      </div>
    </div>
  </div>

  <button class="next-arrow" @click="loadNext10search"><img src="/assets/arrow_5948946.png" alt="HeartIcon" width="30" height="30"></button>

  <ArtDetailModal v-if="selectedArt" :art="selectedArt" @close="closeModal" />
  
</template>

<style>

.gallery-grid {
  display: flex;
  flex-wrap: wrap;    
  gap: 20px;          
  width: 100%;
}

.card {
  width: 230px;
  min-width: 160px; 
  background-color: white;
  position: relative;
  transition: transform 0.2s;
}


.image-container {
  width: 100%;
  height: 250px; 
  overflow: hidden;
  position: relative;
}

.art-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.search-section {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 250px;
}
button {
  padding: 8px 15px;
  margin-left: 5px;

}
</style>
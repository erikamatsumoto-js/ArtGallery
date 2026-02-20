<script setup>
import { ref, onMounted } from 'vue'
import { useFavoritesStore } from '../store'
import ArtDetailModal from './ArtDetailModal.vue'

const artworksSweden = ref([])
const artworksRecent = ref([])
const store = useFavoritesStore()
const selectedArt = ref(null) 
const swedenOffset = ref(0)
const recentOffset = ref (0)


const openModal = (work) => {
  selectedArt.value = work
}

const closeModal = () => {
  selectedArt.value = null
}

const loadNext5sweden = () => {

  swedenOffset.value += 5
  fetchSwedenArt()
}

const loadNext5recent = () => {

  recentOffset.value +=5
  fetchRecentArt()
}
  
const fetchSwedenArt = () => {

  fetch(`https://api.artic.edu/api/v1/artworks/search?q=Sweden&limit=5&from=${swedenOffset.value}&fields=id,title,artist_display,image_id`)
    .then((response) => response.json())
    .then((result) => {
      artworksSweden.value = result.data
    })
}

const fetchRecentArt = () => {
  
  fetch(`https://api.artic.edu/api/v1/artworks/search?query[range][date_end][gte]=2000&limit=5&from=${recentOffset.value}&fields=id,title,artist_display,image_id,date_display,description`)
    .then((response) => response.json())
    .then((result) => {
      artworksRecent.value = result.data
    })
}

onMounted(() => {
  fetchSwedenArt()
  fetchRecentArt() 
})



</script>

<template>
  <h1>ART OF SWEDEN</h1>
  <div class="gallery-grid">
    <div class="card" v-for="work in artworksSweden" :key="work.id" @click="openModal(work)">
      <div class="image-container">
        <img v-if="work.image_id" :src="`https://www.artic.edu/iiif/2/${work.image_id}/full/400,/0/default.jpg`" class="art-image">
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
      <button class="next-arrow" @click="loadNext5sweden"><img src="/assets/arrow_5948946.png" alt="HeartIcon" width="30" height="30"></button>

  <hr>

  <h1>ART AFTER 2000</h1>
  <div class="gallery-grid">
    <div class="card" v-for="work in artworksRecent" :key="work.id" @click="openModal(work)">
      <div class="image-container">
        <img v-if="work.image_id" :src="`https://www.artic.edu/iiif/2/${work.image_id}/full/400,/0/default.jpg`" class="art-image">
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

  <button class="next-arrow" @click="loadNext5recent"><img src="/assets/arrow_5948946.png" alt="HeartIcon" width="30" height="30"></button>

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


.info-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start; 
  opacity: 0;
  transition: opacity 0.3s;
  padding: 5px; 
  margin: 0;
  text-align: left;
  box-sizing: border-box;

}

.card:hover .info-overlay {
  opacity: 1;
}

.title{
    font-size: 0.9rem;
    font-weight: bold;
    margin: 0;
}
.artist{
    font-size: 0.8rem;
    margin: 1px;
}
.add-favorites {
  border: none;
  outline: none;
}

.next-arrow{  
  background: none;
  border: none;
  margin: 20px;
}
.next-arrow:hover {
  transform: translateX(5px);
}
</style>
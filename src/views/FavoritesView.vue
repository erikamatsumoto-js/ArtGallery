<script setup>
import { useFavoritesStore } from '../store'
const store = useFavoritesStore()

const removeFavorite = (item) => {
  store.toggleFavorite(item);
}
</script>

<template>
  <div class="favorites-list">
    <h3>YOUR FAVORITES ({{ store.favorites.length }})</h3>
    <div id="favorites-view">
      <div class="card" v-for="fav in store.favorites" :key="fav.id">
        <div class="image-container">
          <img v-if="fav.image_id" :src="`https://www.artic.edu/iiif/2/${fav.image_id}/full/400,/0/default.jpg`" class="art-image">
          
          <div class="info-overlay">
            <button class="delete-btn" @click="removeFavorite(fav)">
              <img src="/assets/close-button_7124539.png" alt="closeIcon" width="15" height="15">
            </button>
            <p class="title">{{ fav.title }}</p>
            <p class="artist">{{ fav.artist_display }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>



#favorites-view {
  display: flex;
  flex-direction: row;  
  flex-wrap: wrap;           
  gap: 20px;       
  justify-content: flex-start; 
}


</style>


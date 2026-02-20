<script setup>

defineProps(['art'])
defineEmits(['close'])
</script>

<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">✕</button>
      
      <div class="modal-body">
        <div class="modal-image">
          <img :src="`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`" :alt="art.title">
        </div>
        
        <div class="modal-info">
          <h2>{{ art.title }}</h2>
          <h3>{{ art.artist_display }}</h3>
          
          <div class="description" v-html="art.description || 'No description available.'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 40px;
  width: 80%;
  max-width: 1000px;
  max-height: 90vh;
  position: relative;
  overflow-y: auto;
}

.modal-body {
  display: flex;
  gap: 30px;
}

.modal-image img {
  width: 100%;
  max-width: 500px;
}

.modal-info {
  text-align: left;
  color: #333;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>
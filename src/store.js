import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({

    favorites: JSON.parse(localStorage.getItem('my_favorites')) || []
  }),
  
  actions: {
    toggleFavorite(work) {
      const index = this.favorites.findIndex(item => item.id === work.id)
      
      if (index > -1) {
        this.favorites.splice(index, 1)
      } else {
     
        this.favorites.push({
          id: work.id,
          title: work.title,
          artist_display: work.artist_display,
          image_id: work.image_id
        })
      }
      

      localStorage.setItem('my_favorites', JSON.stringify(this.favorites))
    }
  }
})
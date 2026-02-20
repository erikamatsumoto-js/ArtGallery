<script>
  import HeroArt from "../components/HeroArt.vue";
  import ArtSearch from "../components/ArtSearch.vue";
  import ArtGallery from "../components/ArtGallery.vue";
  import ArtDetailModal from "../components/ArtDetailModal.vue";

  export default {
    components: {
      HeroArt,
      ArtSearch,
      ArtGallery,
      ArtDetailModal
    }
  };
</script>

<template>
  <HeroArt />
  <ArtSearch />
  <hr>
  <ArtGallery />
  <hr>
</template>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`" class="rounded"
          style="height: 183px; object-fit: contain; cursor: pointer;" :alt="hero.name" />

      </div>
      <div class="col-9">
        <h3 class="mb-3">{{ hero.name }}</h3>
        <p>{{ hero.description }}</p>
        <h3 class="mb-3 mt-4">COMICS</h3>
        <div class="row">
          <div v-for="comic in comicsList" :key="comic.id" class="col">
            <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" class="rounded"
              style="height: 183px; object-fit: contain; cursor: pointer;" :alt="comic.title" />
            <p>{{ comic.title }}</p>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"

export default {
  data() {
    return {      
      id: this.$route.params.id,
      hero: {},
      comicsList: [],
    }
  },
  methods: {
    async getHeros() {
      try {
        const response = await api.get("v1/public/characters/" + this.id + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
        this.hero = response.data.data.results[0];       
        
      } catch(error) {
        console.log(error)
      }
           
    },
    async getComicsByHero() {
      try {
        const response = await api.get("v1/public/characters/" + this.id + "/comics?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
        this.comicsList = response.data.data.results;
      } catch (error) {
        console.log(error)
      }

    },   
  },
  async beforeMount() {
    await this.getHeros()
    await this.getComicsByHero()
  },
}
</script>

<style lang="scss" scoped></style>
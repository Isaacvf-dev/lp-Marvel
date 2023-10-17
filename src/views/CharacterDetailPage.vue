<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="hero in heroList" :key="hero.id">
        <img
          :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
          class="rounded"
          style="height: 183px; object-fit: contain; cursor: pointer;"
          :alt="hero.name"
        />
        
      </div>
      <div class="col-9">
        <h3 class="mb-3">{{hero.name}}</h3>
        <p>{{ hero.description }}</p>
        <h3 class="mb-3 mt-4">COMICS</h3>
        <div class="row">
          <div v-for="comic in comics" :key="comic.id" class="col">
            <!-- <img
          :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
          class="rounded"
          style="height: 183px; object-fit: contain; cursor: pointer;"
          :alt="hero.name"
        /> -->
            <p>{{ comic.name }}</p>
          </div>
        </div>
        
        
        
      </div>
    </div>    
  </div>
</template>

<script>
import api from "@/services/api.js"

export default {
  data () {   
    return {
      heroList: [],
      url: this.$route.params.userId,
      hero: [],    
      comics: [],
      comicsList: [],
      
    }
  },
  methods: {
    async getHeros() {      
      
        const response = await api.get("v1/public/characters/" + this.url + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
        
        this.heroList = response.data.data.results;
        this.showHero();        
      // } catch (error) {
      //   this.$notify({
      //     type: 'error',
      //     title: `Unexpected error (${error})`,
      //     text: "Unable to fetch heroes. Try later!",
      //   });
      
    },
    async getComicsByHero() {      
      try{
        const response = await api.get("v1/public/comics" + this.url + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c")
        console.log(this.url)
        console.log(response.data)
        this.comicsList = response.data.data.results;  
      }
           
     catch (error) {
      console.log(error)
      }
    
  },
    showHero() {
      this.heroList.forEach((element) => {
        if (element.id == this.url) {
          this.hero = element;
          this.series = element.series.items;
          this.events = element.events.items;
          this.comics = element.comics.items;
          this.links = element.urls;
        }
      });
      // track('Details', { 'hero': this.hero.name });
    },
  },
  mounted() {
    this.getHeros()
    // this.getComicsByHero()
  },
}
</script>

<style lang="scss" scoped>

</style>
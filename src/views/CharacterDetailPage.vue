<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <!-- <img
          :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
          class="rounded"
          style="height: 183px; object-fit: contain; cursor: pointer;"
          :alt="hero.name"
        /> -->
        
      </div>
      <div class="col-6">
        <h2>{{hero.name}}</h2>
        <p>{{ hero.description }}</p>
        <h2>COMICS</h2>
        <div class="row">
          <div v-for="comic in comics" :key="comic.id" class="col">
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
      
    }
  },
  methods: {
    async getHeros() {      
      
        const response = await api.get("v1/public/characters/" + this.url + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
        console.log(response.data)
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
      
      const response = await api.get("v1/public/characters/" + this.url + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
      console.log(response.data)
      this.heroList = response.data.data.results;
      this.showHero();        
    // } catch (error) {
    //   this.$notify({
    //     type: 'error',
    //     title: `Unexpected error (${error})`,
    //     text: "Unable to fetch heroes. Try later!",
    //   });
    
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
  },
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <h2>Events Page</h2>
  <p>{{ events.name }}</p>
</template>

<script>
import api from "@/services/api.js";

export default {
  data(){
    return {
      heroList: [],
      events: [],
      comicsList: [],
    }
    
  },
  methods: {
    getHeros() {
      const response = api.get("v1/public/characters?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c&limit=42")
        this.heroList = response.data.data.results;        
        this.showHero();
      const comicsResponse = api.get(`v1/public/comics?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c&limit=42&title=${search}`) 
      this.heroList = response.data.data.results;    
    },
    showHero(){
      this.heroList.forEach((element) => {
        this.events = element.events.items;
      })
    }
  },
}

</script>

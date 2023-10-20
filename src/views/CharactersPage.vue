<template>
  <div class="home px-5">
    <form class="d-flex mb-3">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        v-model="nameHero"
      />
      <button class="btn btn-dark" style="background-color: #EC1D24; border:none" v-on:click.prevent="filteredList()">Go</button>
    </form>

    <div v-show="showCards" class="row justify-content-around">
      
      <div
        @click="goToDetails(hero)"
        class="card my-3 p-0"
        style="width: 187px; height: auto; text-decoration: underline;"
        v-for="hero in filteredList"
        :key="hero.id"
      >
        <img
          :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
          class="card-img-top"
          style="height: 183px; object-fit: cover; cursor: pointer;"
          :alt="hero.name"
        />
        <div class="card-body">
          <p class="card-text fw-bold text-sm-start fs-6">{{ hero.name }}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import api from "@/services/api.js";

export default {
  name: "Home",
  data() {
    return {      
      heroList: [],
      searchValue: "",
      nameHero: "",
      heros: [],
      showCards: true,
    };
  },
  components: {
    
  },
  methods: {
    
    goToDetails(hero) {
      window.location.href = "/chardetail/" + hero.id;
    },
    async getHeros() {      
      try {
        const response = await api.get("v1/public/characters?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c&limit=42")
        this.heroList = response.data.data.results;
        
      } catch (error) {
        this.alert({
          type: 'error',
          title: `Unexpected error (${error})`,
          text: "Unable to fetch heroes. Try later!",
        });
      }
    }
  },
  computed: {
    filteredList() {
      return this.heroList.filter((hero) => hero.name.toLowerCase().includes(this.nameHero.toLowerCase()));
    }
  },
  mounted() {
    
    this.getHeros();
  },
};
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
}
.card:hover {
  box-shadow: 0px 0px 20px -1px #000000;
}
</style>
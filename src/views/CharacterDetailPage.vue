<template>
  <Breadcrumb :path="`Character / ${ hero.name }`" />
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`" class="rounded"
          style="height: 324px; object-fit: contain;" :alt="hero.name" />

      </div>
      <div class="col-7">
        <h2 class="mb-3">{{ hero.name }}</h2>
        <p class="py-2">{{ hero.description }}</p>
        <h2 class="mb-4 mt-5">COMICS</h2>
        <div class="row">
          <div v-for="comic in comicsList" :key="comic.id" class="col mb-4">
            <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" class="rounded mb-3"
              style="height: 318px; object-fit: contain;" :alt="comic.title" />
            <p class="fw-bold mb-1">{{ comic.title }}</p>
            <p>PAGES: {{ comic.pageCount }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js"
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
    data() {
        return {
            id: this.$route.params.id,
            hero: {},
            comicsList: [],
        };
    },
    methods: {
        async getHeros() {
            try {
                const response = await api.get("v1/public/characters/" + this.id + "?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
                this.hero = response.data.data.results[0];
            }
            catch (error) {
                console.log(error);
            }
        },
        async getComicsByHero() {
            try {
                const response = await api.get("v1/public/characters/" + this.id + "/comics?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c");
                this.comicsList = response.data.data.results;
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    async beforeMount() {
        await this.getHeros();
        await this.getComicsByHero();
    },
    components: { Breadcrumb }
}
</script>

<style lang="scss" scoped></style>
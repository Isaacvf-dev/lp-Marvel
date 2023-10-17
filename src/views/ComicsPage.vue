<template>
  <div class="home bg-blue-secondary p-5">
    <form class="d-flex mb-3">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="search"/>

    </form>

    <div v-show="showCards" class="row justify-content-around">

      <div class="card bg-blue-tertiary my-3 p-0" style="width: 160px; height: 215px;" v-for="comic in comicsList"
        :key="comic.id">
        <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" class="rounded"
          style="height: 183px; object-fit: contain; cursor: pointer;" :alt="comic.title" />
        <div class="card-body">
          <p class="card-title text-center mb-2">{{ comic.title }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>


import api from "@/services/api.js";

export default {
  name: "ComicsPage",
  data() {
    return {
      comicsList: [],
      search: "",
      comics: [],
      showCards: true,
    };
  },
  watch: {    
    search() {
      this.debounce(this.getcomics(), 500)
      console.log("HERE")
    }
  },
  components: {

  },
  methods: {
    debounce(func, wait) {
      let timer = null;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
      }
    },

    async getcomics() {
      try {
        const titleParam = this.search ? `&titleStartsWith=${this.search}`: ""
        const response = await api.get(`v1/public/comics?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c&limit=42${titleParam}`)
        this.comicsList = response.data.data.results;
        

      } catch (error) {
        console.log(error)
        // this.alert({
        //   type: 'error',
        //   title: `Unexpected error (${error})`,
        //   text: "Unable to fetch comics. Try later!",
        // });
      }
    }
  },
  computed: {

  },
  mounted() {

    this.getcomics();
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
<template>
  <div class="container ms-5">
    <div class="row ps-3">
      <div class="col-6" v-for="event in eventsList"
      :key="event.id">
        <div class="row mb-5">
          <div class="col-4 me-4">
            <img :src="`${event.thumbnail.path}.${event.thumbnail.extension}`" class=""
              style="height: 223px; object-fit: cover;" :alt="event.title" />
          </div>
          <div class="col">
            <h3>{{ event.title.toUpperCase() }}</h3>   
            <p>{{ event.description }}</p>
            <p><span class="fw-bold">DATE OF THE EVENT:</span> {{ event.start }}</p>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "EventsPage",
  data() {
    return {      
      eventsList: [],

    }

  },
  methods: {
    async getEvents() {
      const response = await api.get("v1/public/events?ts=1697537430805&apikey=5ab1683ff8983687562af2832b97ad1c&hash=3b818d94bef27e6dd1d6e9f41f98612c&limit=42")
      this.eventsList = response.data.data.results;
      console.log(response.data)
      
      
    },
    
  },
  mounted() {
    this.getEvents()
  },
}

</script>

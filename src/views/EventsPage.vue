<template>
  <div class="container ms-5">
    <div class="row ps-3">
      <div class="col-md-6 col-12" v-for="event in eventsList"
      :key="event.id">
        <div class="row mb-5">
          <div class="col-md-4 col-12 me-4">
            <img :src="`${event.thumbnail.path}.${event.thumbnail.extension}`" class=""
              style="height: 223px; object-fit: cover;" :alt="event.title" />
          </div>
          <div class="col-md-6 col-12 ms-md-4">
            <h4 class="fw-bold">{{ event.title.toUpperCase() }}</h4>   
            <p class="truncate-text">{{ event.description.toUpperCase() }}</p>
            <p><span class="fw-bold">DATE OF THE EVENT:</span> {{ formatEventDate(event.start) }}</p>
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
      
      
      
    },
    formatEventDate(date) {
      const eventDate = new Date(date);
      const day = String(eventDate.getDate()).padStart(2, "0");
      const month = String(eventDate.getMonth() + 1).padStart(2, "0");
      const year = eventDate.getFullYear();
      return `${day}/${month}/${year}`;
    },
    
  },
  mounted() {
    this.getEvents()
  },
}

</script>

<style>
.truncate-text {
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: -webkit-box; 
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;  
}
</style>
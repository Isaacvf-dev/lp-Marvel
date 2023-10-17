<template>
  <div class="container ms-5">
    <div class="row ps-3">
      <div class="col-6" v-for="event in eventsList"
      :key="event.id">
        <div class="row ">
          <div class="col-6">
            <img :src="`${event.thumbnail.path}.${event.thumbnail.extension}`" class=""
              style="height: 223px; object-fit: contain; cursor: pointer;" :alt="event.title" />
          </div>
          <div class="col-6">
            <h3 class="">{{ event.title }}</h3>   
            <p>{{ event.description }}</p>
            <p>DATE OF THE EVENT: {{ event.start }}</p>
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

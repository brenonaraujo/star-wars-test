<template lang="html">
  <div class="bloco">
    <ul v-if="vehicles && vehicles.length">
      <li v-for="vehicle of vehicles">
           <i class="Large material-icons">directions_car</i>
        <p><strong>{{vehicle.name}}</strong></p>
      </li>
    </ul>
    <button className="btnPrevious" type="submit" :disabled="isValid" v-on:click="page(-1)" >Previous</button>
    <button type="submit" v-on:click="page(1)" >Next</button>
  </div>
</template>

<script>
import { getPage, getVehicles } from '../services'

export default {
  data: () => ({
    next: '',
    previous: '',
    vehicles : []
  }),
  created () {
    getVehicles().then(data => {
      this.next = data.next
      this.previous = data.previous
      this.vehicles = data.results
    })
  },
  methods: {
    page: function (arrow) {
      let np;
      if(arrow < 0)
        np = this.previous
        else
        np = this.next

      getPage(np).then(data => {
        this.vehicles = data.results
        this.next = data.next
        this.previous = data.previous
      })
    }
  },
  computed: {
    isValid () {
      if(this.previous === null)
        return true
      else
        return false
    }
  }
}
</script>

<style scoped="scope">
</style>

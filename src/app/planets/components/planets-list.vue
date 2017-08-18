<template lang="html">
  <div class="bloco">
    <ul v-if="planets && planets.length">
      <li v-for="planet of planets">
           <i class="Large material-icons">language</i>
        <p><strong>{{planet.name}}</strong></p>
      </li>
    </ul>
    <button className="btnPrevious" type="submit" :disabled="isValid" v-on:click="page(-1)" >Previous</button>
    <button type="submit" v-on:click="page(1)" >Next</button>
  </div>
</template>

<script>
import { getPage, getPlanets } from '../services'

export default {
  data: () => ({
    next: '',
    previous: '',
    planets : []
  }),
  created () {
    getPlanets().then(data => {
      this.next = data.next
      this.previous = data.previous
      this.planets = data.results
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
        this.planets = data.results
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
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

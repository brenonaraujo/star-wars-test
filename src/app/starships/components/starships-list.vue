<template lang="html">
  <div class="bloco">
    <ul v-if="starships && starships.length">
      <li v-for="starship of starships">
           <i class="Large material-icons">near_me</i>
        <p><strong>{{starship.name}}</strong></p>
      </li>
    </ul>
    <button className="btnPrevious" type="submit" :disabled="isValid" v-on:click="page(-1)" >Previous</button>
    <button type="submit" v-on:click="page(1)" >Next</button>
  </div>
</template>

<script>
import { getPage, getStarships } from '../services'

export default {
  data: () => ({
    next: '',
    previous: '',
    starships : []
  }),
  created () {
    getStarships().then(data => {
      this.next = data.next
      this.previous = data.previous
      this.starships = data.results
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
        this.starships = data.results
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

<template lang="html">
  <div class="container">
    <Filters></Filters>
      <div class="bloco">
        <ul v-if="peoples && peoples.length">
          <li v-for="people of peoples">
            <router-link :to="{ name: 'peoples.detail', params: { url: people.url} }">
              <i class="Large material-icons">account_box</i>
              <p><strong>{{people.name}}</strong></p>
            </router-link>
          </li>
        </ul>
        <button className="btnPrevious" type="submit" :disabled="isValid" v-on:click="page(-1)" >Previous</button>
        <button type="submit" v-on:click="page(1)" >Next</button>
      </div>
    </div>
</template>

<script>
import { getData, getPeoples } from '../services'
import Filters from '@/components/root/filters/filter'

export default {
  components: { Filters },
  data: () => ({
    next: '',
    previous: '',
    peoples : []
  }),
  created () {
    getPeoples().then(data => {
      this.next = data.next
      this.previous = data.previous
      this.peoples = data.results
    })
  },
  methods: {
    page: function (arrow) {
      let np;
      if(arrow < 0)
        np = this.previous
        else
        np = this.next

      getData(np).then(data => {
        this.peoples = data.results
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

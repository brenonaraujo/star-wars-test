<template lang="html">
  <div class="bloco">
    <ul v-if="peoples && peoples.length">
      <li v-for="people of peoples">
        <p><strong>{{people.name}}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getPeoples } from '../services'

export default {
  data: () => ({
    next: '',
    previous: '',
    peoples : []
  }),
  created () {
    getPeoples().then(data => {
      console.log(data)
      this.next = data.next
      this.previous = data.previous
      this.peoples = data.results
    })
  }
}
</script>

<style scoped="scope">
.bloco {
  margin: 20px 0;
  padding: 15px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
}
button {
  margin-left: 4px;
  background-color: rgb(221, 237, 33);
  border-color: rgb(221, 237, 33);
  color: #000
}
.bloco ul li {
  display: inline-block;
  margin: 10px 5px;
}
</style>

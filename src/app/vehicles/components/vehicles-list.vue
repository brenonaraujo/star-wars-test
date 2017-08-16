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
  margin: 5px 15px;
}

/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v28/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  color: #dbd553;
  font-style: normal;
  font-size: 950%;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}

</style>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

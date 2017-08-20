<template>
  <div class="container">
    <Filters></Filters>
    <div class="bloco">
      <div class="row">
       <div class="column" align="left">
         <h4>People:</h4>
         <span class="item">
           <strong>Name:</strong> {{ this.people.name }}
         </span>
         <span class="item">
            <strong>Gender:</strong> {{ this.people.gender }}
         </span>
         <span class="item">
            <strong>Birth year:</strong> {{ this.people.birth_year }}
         </span>
         <span class="item">
            <strong>Eye color:</strong> {{ this.people.eye_color }}
         </span>
         <span class="item">
            <strong>Hair color:</strong> {{ this.people.hair_color }}
         </span>
         <span class="item">
            <strong>Height:</strong> {{ this.people.height }}
         </span>
         <span class="item">
            <strong>Mass:</strong> {{ this.people.mass }}
         </span>
         <span class="item">
            <strong>Skin color:</strong> {{ this.people.skin_color }}
         </span>
         <span class="item">
           <router-link :to="{ name: 'planets.detail', params: { url: people.url} }">
             <strong>Homeworld:</strong> {{ this.world.name }}
           </router-link>
         </span>
       </div>
       <div class="column" align="left">
         <h4>Films:</h4>
         <ul v-if="films && films.length">
           <li v-for="film of films">
             <span class="item">
                 <strong> {{ film.title }} </strong>
             </span>
           </li>
         </ul>
       </div>
       <div class="column" align="left">
         <h4>Starships:</h4>
         <ul v-if="starships && starships.length">
           <li v-for="starship of starships">
             <span class="item">
                 <strong> {{ starship.name }} </strong>
             </span>
           </li>
         </ul>
       </div>
       <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Filters from '@/components/root/filters/filter'
import { getData } from '../services'

export default {
  components: { Filters },
  data : () => ({
    people: '',
    world: { name: '' },
    films: [],
    starships: []
  }),
  created () {
    getData(this.$route.params.url).then(data => {
      this.people =  data
      console.log(this.people)
      getData(data.homeworld).then( world => {
        this.world =  world
      })
      for (var i = 0; i < data.films.length; i++) {
        getData(data.films[i]).then( film => {
          this.films.push(film)
        })
      }
      for (var i = 0; i < data.starships.length; i++) {
        getData(data.starships[i]).then( starship => {
          console.log(starship)
          this.starships.push(starship)
        })
      }
    })
  },
  methods: {

  }
}
</script>

<style scoped="scope">

.item {
  width: 100%;
  display: inline-block;
  margin: 5px 0;
  font-size: 20px;
}

.row .column a {
    color: rgb(213, 222, 110);
    font-size: 20px;
}
a:focus {
    color: rgb(226, 245, 13);
    font-size: 20px;
}

</style>

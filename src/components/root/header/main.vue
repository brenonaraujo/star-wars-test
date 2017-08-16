<template lang="html">
    <div id="header-main" class="container">
      <div class="row">
        <div class="column">
          <router-link :to="{ name: 'peoples.main'}" >
              <a>Peoples</a>
          </router-link>
        </div>
        <div class="column">
          <router-link :to="{ name: 'planets.main'}">
              <a>Planets</a>
          </router-link>
        </div>
        <div class="column">
          <router-link :to="{ name: 'vehicles.main'}">
              <a>Vehicles</a>
          </router-link>
        </div>
        <div class="column">
          <router-link :to="{ name: 'starships.main'}">
              <a>Starships</a>
          </router-link>
        </div>
        <div class="column"><a href="#">Swapi API</a></div>
      </div>
    </div>
</template>

<script>
export default {
  name: "RootHeader"
}
</script>
<style>
  #header-main {
    margin-top: 1px;
  }
  .row .column a {
    color: rgb(213, 222, 110);
    font-size: 24px
  }

  .row .column a:hover {
    color: rgb(219, 236, 26);
    font-size: 24px
  }

</style>

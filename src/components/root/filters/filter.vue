<template>
  <div class="bloco">
    <div class="row">

      <div class="column">
        <h5>Search</h5>
        <div class="row">
          <input type="text" name="" value="">
          <button> Go!</button>
        </div>
      </div>

      <div class="column">
        <h5>Filter</h5>
        <input type="text" name="" value="">
      </div>

      <div class="column">
        <h5>Order</h5>
          <input type="text" name="" value="">
      </div>

    </div>
  </div>
</template>

<script>
export default {
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
</style>

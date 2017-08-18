<template>
  <div class="container">
    <Filters></Filters>
    <div class="bloco">

    </div>
  </div>
</template>

<script>
import Filters from '@/components/root/filters/filter'

export default {
  components: { Filters },
  data : () => {
    url: this.$route.params.url
  }
}
</script>

<style scoped="scope">
</style>

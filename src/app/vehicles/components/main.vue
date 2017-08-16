<template lang="html">
  <div class="container">
    <Filters></Filters>
    <Vehicles></Vehicles>
  </div>
</template>

<script>
import Filters from '@/components/root/filters/filter'
import Vehicles from './vehicles-list'

export default {
  components: { Filters, Vehicles }
}

</script>

<template lang="html">
  <div class="container">
    <Filters></Filters>
    <Planet></Planet>
  </div>
</template>

<script>
import Filters from '@/components/root/filters/filter'
import Planet from './planets-list'

export default {
  components: { Filters, Planet }
}

</script>

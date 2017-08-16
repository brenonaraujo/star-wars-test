<template lang="html">
  <div class="container">
    <Filters></Filters>
    <Starships></Starships>
  </div>
</template>

<script>
import Filters from '@/components/root/filters/filter'
import Starships from './starships-list'

export default {
  components: { Filters, Starships }
}

</script>

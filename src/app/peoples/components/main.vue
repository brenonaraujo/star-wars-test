<template lang="html">
  <div class="container">
    <Filters></Filters>
    <Peoples></Peoples>
  </div>
</template>

<script>
import Filters from './filters'
import Peoples from './peoples-list'

export default {
  components: { Filters, Peoples }
}

</script>

<template>
  <div class="home">
    <p>Inicio y va un filtro</p>
    <List/>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
  name: 'Home',
  components: {
    List
  }
}
</script>

<template>
  <div>

    <div id="grid">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Trees',
  components: {
    Card
  }
}
</script>

<style>
  #grid {
    margin: 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
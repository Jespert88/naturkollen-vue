<template>
  <div>
    <div class="card">
      <img :src="animal.image" class="img-fluid" />

      <div class="card-body">
        <h2 class="card-title" style="text-align:center;">{{animal.name}}</h2>
        <button
          class="btn btn-success"
          style="width:100%;"
          data-toggle="collapse"
          :data-target="'#collapseExample' + animal.id"
          aria-expanded="false"
          aria-controls="collapseExample"
          v-on:click="toggle"
        >Information</button>

        <div class="collapse" :id="'collapseExample' + animal.id">
          <div class="card-body">
            <p class="card-text">{{animal.description}}</p>
            <br />

            <h5 class="card-title">{{animal.kidTitle}}</h5>
            <img :src="animal.kidImage" class="img-fluid" />
            <p>{{animal.kidDesc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnimalCard",
  data() {
    return {
      bodyID: {}
    };
  },
  props: {
    animal: {}
  },
  methods: {
    toggle: function() {
      this.bodyID = this.animal.id;
    }
  }
};
</script>

<style scoped>
/* Desktop */
.card {
  border: 0;
  width: 18rem;
  box-shadow: 1px 1px 10px #222;
}
/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
  .card {
    border: 0;
    width: auto;
    box-shadow: 1px 1px 10px #222;
  }
}
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
    border: 0;
    width: auto;
    box-shadow: 1px 1px 10px #222;
  }
}
</style>

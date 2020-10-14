<template>
  <div>
    <div class="card" v-on:click="isHidden = !isHidden">
      <!-- img card cover -->
      <img :src="animal.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{ animal.name }}</h2>

      <!-- Animal Modal  -->
      <div class="animalModal" v-if="!isHidden">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-sm-12 col-md-12 col-xl-6">
              <div class="imgContainer">
                <img :src="animal.image" class="img-fluid" />
              </div>
              <h1 class="smallTitle">{{ animal.name }}</h1>
            </div>
            <div class="col-sm-12 col-md-12 col-xl-6">
              <div class="contentContainer">
                <h1 class="smallTitle">Visste du att</h1>
                <p class="text">
                  {{ animal.description }}
                </p>
                <li style="margin-left: 15px">{{ animal.male }}</li>
                <li style="margin-left: 15px">{{ animal.female }}</li>
                <li style="margin-left: 15px">{{ animal.height }}</li>
                <li style="margin-left: 15px">{{ animal.weight }}</li>
              </div>

              <div class="centerContainer">
                <button class="closeBtn">
                  <span>X</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal End -->
    </div>
  </div>
</template>
<script>
export default {
  name: "AnimalCard",
  props: {
    animal: {},
  },
  data() {
    return {
      bodyID: {},
      isHidden: true,
    };
  },
  methods: {
    toggle: function () {
      this.bodyID = this.animal.id;
    },
  },
};
</script>
<style>
@import "../assets/css/components/AppAnimalCard.css";
@import "../assets/css/globalStyles.css";
</style>





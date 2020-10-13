<template>
  <div>
    <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="animal.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{ animal.name }}</h2>

      <!-- <div class="modalShadow" v-if="!isHidden">
        <div class="animalModal">
          <h3 style="text-align: center;">{{animal.name}}</h3>
          <p class="card-text">{{animal.description}}</p>
          <br />
          <li class="card-list">
            <b>Hane:</b>
            {{animal.male}}
          </li>
          <li class="card-list">
            <b>Hona:</b>
            {{animal.female}}
          </li>
          <li class="card-list">
            <b>Höjd:</b>
            {{animal.height}}
          </li>
          <li class="card-list">
            <b>Vikt:</b>
            {{animal.weight}}
          </li>
          <br />
          <br />

          <div class="container-fluid">
            <div class="row no-gutters">
              <div class="col-sm-1 col-md-1 col-xl-3"></div>
              <div class="col-sm-12 col-md-12 col-xl-6">
                <img :src="animal.kidImage" class="img-fluid" />
              </div>
              <div class="col-sm-1 col-md-1 col-xl-3"></div>
            </div>
          </div>
          <h5 class="kidPictureTitle">{{animal.kidTitle}}</h5>
          <p>{{animal.kidDesc}}</p>

          <h5 class="closeTitle">Klicka för att stänga</h5>
        </div>
      </div> -->
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
</style>





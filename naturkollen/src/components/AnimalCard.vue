<template>
  
  <div>
    <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="animal.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{animal.name}}</h2>
      <div class="backOfCard" v-if="!isHidden">
        <p class="card-text">
          {{animal.description}} <br>
          <!-- {{animal.kidTitle}} -->
        </p> <br>
        <img :src="animal.kidImage" class="img-fluid" />
        <!-- <h5 class="card-title">{{animal.kidTitle}}</h5> -->
        <p>{{animal.kidDesc}}</p>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name: "AnimalCard",
  data() {
    return {
      bodyID: {},
      isHidden: true
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
  height: 25rem;
  width: 18rem;
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
}

#CardImg {
  height: 25rem;
  object-fit: cover !important;
}

.backOfCard {
  height: 25rem;
  width: 18rem;
  position: absolute;
  padding: 10px;
  background-color: #f2f2f2;
  overflow-y: auto;
}

.card-title {
 position: absolute;
 bottom: 0px;
 color: #fff;
 text-align: center;
 width: 100%;
 text-shadow: 1px 1px 8px #000;
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
  .card {
  border: 0;
  height: 25rem;
  width: auto;
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
}

#CardImg {
  height: 25rem;
  object-fit: cover !important;
}

.backOfCard {
  height: 25rem;
  width: auto;
  position: absolute;
  padding: 20px;
  background-color: #f2f2f2;
  overflow-y: auto;
}

.card-title {
 position: absolute;
 bottom: 0px;
 color: #fff;
 text-align: center;
 width: 100%;
 text-shadow: 1px 1px 8px #000;
}
}
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  .card {
  border: 0;
  height: 25rem;
  width: auto;
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
}

#CardImg {
  height: 25rem;
  object-fit: cover !important;
}

.backOfCard {
  height: 25rem;
  width: auto;
  position: absolute;
  padding: 20px;
  background-color: #f2f2f2;
  overflow-y: auto;
}

.card-title {
 position: absolute;
 bottom: 0px;
 color: #fff;
 text-align: center;
 width: 100%;
 text-shadow: 1px 1px 8px #000;
}
}

</style>

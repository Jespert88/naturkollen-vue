<template>
  
  <div>
    <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="animal.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{animal.name}}</h2>
      <div class="backOfCard" v-if="!isHidden">
        <p class="card-text">
          {{animal.description}} <br>
          <!-- {{animal.kidTitle}} -->
        </p><br><br>

        <h5 style="text-align: center;">Mer info</h5>
        <li class="card-list"><b>Hane:</b> {{animal.male}}</li>
        <li class="card-list"><b>Hona:</b> {{animal.female}}</li>
        <li class="card-list"><b>Höjd:</b> {{animal.height}}</li>
        <li class="card-list"><b>Vikt:</b> {{animal.weight}}</li><br><br>

        <img :src="animal.kidImage" class="img-fluid" />
        <h5 class="kidPictureTitle">{{animal.kidTitle}}</h5>
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
  padding: 0px;
  border: 0;
  height: 25rem;
  width: 20rem;
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
}
.card:hover {
  cursor: pointer;
}
.card-text {
  padding: 5px;
}
.card-list{
  margin-left: 20px;
}
#CardImg {
  height: 25rem;
  object-fit: cover !important;
}
.backOfCard {
  /* height: 25rem;
  width: 20rem; */
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 10px;
  background-color: #f2f2f2;
  overflow-y: auto;
  z-index: 1;
}
.card-title {
 position: absolute;
 bottom: 0px;
 color: #fff;
 text-align: center;
 width: 100%;
 text-shadow: 1px 1px 8px #000;
}
.kidPictureTitle {
  font-size: 20px;
  text-align: center;
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

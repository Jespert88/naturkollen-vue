<template>
  <div>
    <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="animal.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{animal.name}}</h2>

      <div class="modalShadow" v-if="!isHidden">
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

          <!--  <img :src="animal.kidImage" class="img-fluid" /> -->
          <h5 class="kidPictureTitle">{{animal.kidTitle}}</h5>
          <p>{{animal.kidDesc}}</p>

          <h5 class="closeTitle">Klicka för att stänga</h5>
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
.card-list {
  margin-left: 20px;
}
#CardImg {
  height: 25rem;
  object-fit: cover !important;
}

.modalShadow {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
}
.animalModal {
  border-radius: 5px;
  margin-top: 5%;
  margin-right: 25%;
  margin-left: 25%;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  max-height: calc(100vh - 200px);
  width: auto;
  background-color: #f2f2f2;
  overflow-y: auto;
}
.closeTitle {
  margin: 30px;
  text-align: center;
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

  .modalShadow {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
  }
  .animalModal {
    border-radius: 5px;
    margin-top: 30%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 20px;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    max-height: calc(100vh - 200px);
    width: auto;
    background-color: #f2f2f2;
    overflow-y: auto;
  }
  .closeTitle {
    margin: 30px;
    text-align: center;
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

  .modalShadow {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
  }
  .animalModal {
    border-radius: 5px;
    margin-top: 2%;
    margin-right: 10%;
    margin-left: 10%;
    padding: 20px;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    max-height: calc(100vh - 200px);
    width: auto;
    background-color: #f2f2f2;
    overflow-y: auto;
  }
  .closeTitle {
    margin: 30px;
    text-align: center;
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

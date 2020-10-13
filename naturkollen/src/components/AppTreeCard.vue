<template>
  <div>

    <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="tree.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{tree.name}}</h2>

      <div class="modalShadow" v-if="!isHidden">
        <div class="treeModal">
          <h4 style="text-align:center;">{{tree.name}}</h4>
          <p class="card-text">{{tree.description}}</p>
          <h5 class="closeTitle">Klicka för att stänga</h5>
        </div>
      </div>

    <!-- Fake user api -->
    <!-- <div class="card" v-on:click="isHidden = !isHidden">
      <img :src="tree.image" class="img-fluid" id="CardImg" />
      <h2 class="card-title">{{user.name}}</h2>

      <div class="backOfCard" v-if="!isHidden">
        <h4 style="text-align:center;">{{user.name}}</h4>
        <p class="card-text">{{user.description}}</p>
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      bodyID: {},
      isHidden: true
    };
  },
  props: {
    tree: {},
    user: {}
  },
  methods: {
    /*  toggle: function() {
      this.bodyID = this.tree.id;
    } */
  }
};
</script>

<style scoped>
/* Desktop */
.card {
  border: 0;
  height: 20rem;
  width: 18rem;
  box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
}
.card:hover {
  cursor: pointer;
}

#CardImg {
  height: 20rem;
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
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.6);
}
.treeModal {
  border-radius: 5px;
  margin-top: 10%;
  margin-right: 20%;
  margin-left: 20%;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: auto;
  max-height: calc(100vh - 200px);
  background-color: #f2f2f2;
  overflow: auto;
}

.closeTitle{
  text-align: center;
  margin: 5%;
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
    height: 20rem;
    width: auto;
    box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
  }

  #CardImg {
    height: 20rem;
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
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.6);
}
.treeModal {
  border-radius: 5px;
  margin-top: 20%;
  margin-right: 5%;
  margin-left: 5%;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: auto;
  height: 500px;
  background-color: #f2f2f2;
  overflow: auto;
}
.closeTitle{
  text-align: center;
  margin: 5%;
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
    height: 20rem;
    width: auto;
    box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5);
  }

  #CardImg {
    height: 20rem;
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
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.6);
}
.treeModal {
  border-radius: 5px;
  margin-top: 40%;
  margin-right: 5%;
  margin-left: 5%;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: auto;
  height: auto;
  background-color: #f2f2f2;
  overflow: auto;
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


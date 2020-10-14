<template>
  <div class="pageContainer">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-1 col-xl-3"></div>
        <div class="col-sm-12 col-md-10 col-xl-6">
          <div class="centerContainer">
            <div class="welcomeDiv">
              <h1 class="whiteTitle">Välkommen till naturkollen</h1>
              <p class="whiteText">{{ info }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-1 col-xl-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },

  created: function () {
    this.info = "Lär dig om Sveriges djur och natur";
  },
};
</script>
<style>
@import "../assets/css/pages/index.css";
@import "../assets/css/globalStyles.css";
</style>

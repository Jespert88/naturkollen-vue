<template>
  <div class="pageContainer">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-12 col-md-0 col-xl-3"></div>
        <div class="col-sm-12 col-md-12 col-xl-6">
          <div class="infoContainer">
            <div class="row no-gutters">
              <div class="col-sm-12 col-md-6 col-xl-6">
                <div style="text-align: center; margin: 10%">
                  <img src="../assets/img/logo.png" class="img-fluid" />
                  <p class="whiteText">Skapad med Vue.js</p>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-xl-6">
                <div style="padding: 5%">
                  <h1 class="whiteSmallTitle">Om naturkollen</h1>
                  <p class="whiteText">{{ info }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-0 col-xl-3"></div>
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
    this.info =
      "Syftet med denna applikationen var att lära mig hur ramverket Vue.js fungerar jämförbart mot React och Angular.";
  },
};
</script>

<style>
@import "../assets/css/pages/About.css";
@import "../assets/css/globalStyles.css";
</style>

<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-12 col-md-0 col-xl-3"></div>
            <div class="col-sm-12 col-md-12 col-xl-6">
                <div class="infoContainer">

                    <div class="row no-gutters">
                        <div class="col-sm-12 col-md-6 col-xl-6">
                            <div style="text-align:center; margin:10%;">
                                <img src="../assets/logo.png"  class="img-fluid">
                                <p>Skapad med Vue.js</p>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-xl-6">
                            <div style="padding: 5%;">
                                <h1>Om naturkollen</h1>
                                <p> {{info}} </p>
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
            info: ""
        }
    },
    created: function () {
        this.info = "Denna applikation är skapad ur ett hobby och lärningsyfte." +
        " Där grund motivationen till att den existerar var för att lära mig Vue.js samt att samtidigt visa hur en naturapplikation" +
        "skulle kunna se ut."
    }
}
</script>

<style scoped>
.content {
    background-image: url("../assets/wallpaper.jpg");
    /* background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
}

.infoContainer {
    margin-top: 20%;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #222;
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
    .infoContainer {
        margin-top: 10%;
        margin-bottom: 10%;
    }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .infoContainer {
        margin-top: 40%;
    }
}
</style>

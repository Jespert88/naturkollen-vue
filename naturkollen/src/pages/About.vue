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
        this.info = "Syftet med denna applikationen var att lära mig Vue.js" +
        " samt att ha en mall att utgå ifrån."
    }
}
</script>

<style scoped>
.content {
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.infoContainer {
    margin-top: 20%;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    /* box-shadow: 0px 0px 25px 0px rgba(132, 132, 132, 0.5); */
    color: #fff;
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

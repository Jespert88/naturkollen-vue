<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-12 col-md-1 col-xl-4"></div>
            <div class="col-sm-12 col-md-10 col-xl-4">

                <div class="welcomeDiv">
                    <h1>Välkommen till naturkollen</h1>
                    <p>Detta är en webbapplikation som är skapad ur ett hobby och träningssyfte.</p>
                </div>

            </div>
            <div class="col-sm-12 col-md-1 col-xl-4"></div>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Desktop */
.content {
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.welcomeDiv {
    margin-top: 40%;
    border-radius: 10px;
}

h1 {
    font-size: 50px;
    text-align: center;
    margin-top: 15%;
    color: #fff;
    text-shadow: 1px 1px 15px #000;
}

p {
    font-size: 18px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 15px #000;
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
    .welcomeDiv {
        margin-top: 50%;
        border-radius: 10px;
    }
    h1 {
        font-size: 40px;
        text-align: center;
        margin-top: 15%;
        color: #fff;
        text-shadow: 1px 1px 15px #000;
    }

    p {
        font-size: 18px;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 15px #000;
    }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .welcomeDiv {
        margin-top: 50%;
        border-radius: 10px;
    }
}
</style>

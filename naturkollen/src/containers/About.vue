<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-12 col-md-0 col-xl-3"></div>
            <div class="col-sm-12 col-md-12 col-xl-6">
                <div class="infoContainer">
                    <h1>Om naturkollen</h1>
                    <p> {{info}} </p>
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
        this.info = "Lorem Ipsum är en utfyllnadstext från tryck-" +
            "och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet," +
            "när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett" +
            "provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden," +
            "utan även övergången till elektronisk typografi utan större förändringar." +
            "Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med" +
            "avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker."
    }
}
</script>

<style scoped>
.content {
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
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
        margin-top: 20%;
    }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .infoContainer {
        margin-top: 40%;
    }
}
</style>

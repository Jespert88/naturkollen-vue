<template>
<div class="content">
    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-12 col-md-1 col-xl-3"></div>
            <div class="col-sm-12 col-md-10 col-xl-6">

                <div class="welcomeDiv">
                    <h1>Välkommen till naturkollen</h1>
                    <p>{{info}}</p>
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
            info: ""
        }
    },

    created: function () {
        this.info = "Lär dig om Sveriges djur och natur"
    }
}
</script>

<style scoped>
/* Desktop */
.content {
    /* Picture from Michi S from Pixabay */
    background-image: url("../assets/wallpaper.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.welcomeDiv {
    margin-top: 35%;
    border-radius: 10px;
}

h1 {
    font-size: 55px;
    text-align: center;
    margin-top: 15%;
    color: #fff;
    text-shadow: 1px 1px 8px rgb(24, 49, 13);
}

p {
    font-size: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 8px rgb(24, 49, 13);
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
        text-shadow: 1px 1px 8px #000;
    }

    p {
        font-size: 18px;
        text-align: center;
        color: #fff;
        text-shadow: 1px 1px 8px #000;
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

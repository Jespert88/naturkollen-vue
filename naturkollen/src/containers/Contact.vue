<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-1 col-md-1 col-xl-4"></div>
            <div class="col-sm-12 col-md-10 col-xl-4">

                <div class="formContainer">
                    <div v-on:submit.prevent>
                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="email@here.com">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="passwordInput" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message here"></textarea>
                        </div>
                        <div class="submitContainer">
                            <button v-on:click="say" class="btn btn-success" style="width: 150px;"> Skicka </button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-sm-1 col-md-1 col-xl-4"></div>
        </div>
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            email: "",
            message: ""
        }
    },
    methods: {
        say: function () {
            this.message = "detta formulär är inte aktivt men tack för du testade formuläret.";
            alert("Hej " + this.email + " " + this.message);
        }
    }
}
</script>

<style scoped>
/* DESKTOP */
.content {
    background-image: url("../assets/wallpaper.jpg");
    /* background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
}

.formContainer {
    margin-top: 25%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #222;
}

#emailInput {
    outline: 0;
    border-width: 0 0 1px;
    border-radius: 0;
    border-color: #333;
}

#passwordInput {
    outline: 0;
    border-width: 0 0 1px;
    border-radius: 0;
    border-color: #333;
}

.submitContainer {
    text-align: center;
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
    .formContainer {
        margin-top: 40%;
    }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    .formContainer {
        margin-top: 40%;
    }
}
</style>

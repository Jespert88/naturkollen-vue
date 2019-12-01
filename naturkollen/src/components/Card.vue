<template>
<div>

    <div class="card">
        <!-- <img v-bind:src="tree.image" v-bind:alt="tree.image" class="img-fluid" /> -->
        <img :src="tree.image" class="img-fluid" />
             
        <div class="card-body">
            <h2 class="card-title" style="text-align:center;"> {{tree.name}}</h2>
            <button class="btn btn-success" style="width:100%;"  data-toggle="collapse" :data-target="'#collapseExample' + tree.id" aria-expanded="false" aria-controls="collapseExample" v-on:click="toggle">
                Info
            </button>

            <div class="collapse" :id="'collapseExample' + tree.id">
                <div class="card-body">
                    <p class="card-text">
                        {{tree.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Card",
    props: {
        user: {},
        tree: {}
    },

    mounted: function () {

    },

    methods: {
        toggle: function () {
            let bodyID = this.tree.id;
            console.log(bodyID);
        }
    }
}
</script>

<style scoped>
/* Desktop */
.card {
    border: 0;
    width: 18rem; 
    box-shadow: 1px 1px 10px #222;
}
/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
 .card {
    border: 0;
    width: auto; 
    box-shadow: 1px 1px 10px #222;
}
}
/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
.card {
    border: 0;
    width: auto; 
    box-shadow: 1px 1px 10px #222;
}
}

</style>

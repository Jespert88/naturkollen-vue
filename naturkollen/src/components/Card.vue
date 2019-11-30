<template>
<div>

    <div class="card" style="width: 18rem; box-shadow: 1px 1px 10px #222;">
        <!-- <img v-bind:src="tree.image" v-bind:alt="tree.image" className='img-fluid' /> -->
        <img v-bind:src="tree.image" v-bind:alt="tree.image" class="img-fluid" />
             
        <div class="card-body">
            <h5 class="card-title"> {{tree.name}}</h5>
            <button class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" v-on:click="toggle">
                Button with data-target
            </button>

            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    <p class="card-text">
                        <!-- {{user.email}} -->
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

    created: function () {
       console.log(this.tree.img)
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

</style>

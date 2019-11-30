<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
            <div class="col-sm-12 col-md-10 col-xl-12">
                <div id="grid">

                    <!-- <Card v-for="user in userArray" :key="user.id" :user="user" /> -->
                    <Card v-for="tree in treeArray" :key="tree.id" :tree="tree" />

                </div>
            </div>
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
        </div>
    </div>

</div>
</template>

<script>
import Card from '../components/Card.vue';
import axios from 'axios';
export default {
    name: 'Trees',
    components: {
        Card
    },

    data() {
        return {
            userArray: [],
            treeArray: [],
            errors: []
        }
    },
    /* https://randomuser.me/api/?results=10 */
    // Fetches user from (https://jsonplaceholder.typicode.com/users) when the component is created.
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // JSON responses are automatically parsed.
                this.userArray = response.data
                /* console.log(this.userArray); */
            })
            .then(
                 this.treeArray = [
            {
                "id": 0,
                "name": "Al",
                "image": "../../assets/trees/al.png",
                "description" : "hejsan 1"
            },
            {
                "id": 1,
                "name": "Alm",
                "image": "../../assets/trees/alm.png",
                "description" : "hejsan 2"
            },
            {
                "id": 2,
                "name": "Ask",
                "image": "../../assets/trees/ask.png",
                "description" : "hejsan 3"
            },
            {
                "id": 3,
                "name": "Asp",
                "image": "../../assets/trees/asp.png",
                "description" : "hejsan 4"
            },
        ]
            ).catch(e => {
                this.errors.push(e)
            })


    },

}
</script>

<style>
/* Desktop */
#grid {
    margin: 5%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
}

/* Mobile */
@media (min-width: 360px) and (max-width: 600px) {
    #grid {
        margin: 5%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 30px;
    }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
    #grid {
        margin: 5%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
}
</style>

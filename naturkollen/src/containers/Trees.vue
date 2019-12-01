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

    /* Borrowed info and images about trees from  https://www.skogskunskap.se/ */
    created() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // JSON responses are automatically parsed.
                this.userArray = response.data
                /* console.log(this.userArray); */
            })
            .then(
                this.treeArray = [{
                        "id": 0,
                        "name": "Al",
                        "image": "https://www.skogskunskap.se/Large/cd_4a9996/contentassets/781fd60cecdc487a94b3df53211e6bee/graal_blad_lars_rytter_1200x675px.jpg",
                        "description": "Alsläktet är ett släkte träd och buskar med cirka 25 arter i familjen björkväxter." +
                            "De förekommer i den tempererade delen av norra hemisfären."
                    },
                    {
                        "id": 1,
                        "name": "Alm",
                        "image": "https://www.skogskunskap.se/Large/cd_4a98b4/contentassets/e50b7ce38ed04382a1051f0117da8b47/ulmus_glabra_001_willow_creative-commons-cc-by-2.5_1200x675px.jpg",
                        "description": "Skogsalm, i dagligt tal alm (Ulmus glabra Huds.)," +
                            "är ett träd i familjen almväxter. I Sverige förekommer två underarter vanlig skogsalm," +
                            "Ulmus glabra ssp. glabra, med tunnare bark, rakare grenar och och bredare blad och bergalm," +
                            "Ulmus glabra ssp. montana mera lågvuxen med tjockare bark, något hängande grenar och smalare," +
                            "nästan enkelsågade, blad."
                    },
                    {
                        "id": 2,
                        "name": "Ask",
                        "image": "https://www.skogskunskap.se/Large/cd_4a97fc/contentassets/21e96547a5534bbdb7bee7d482fb2964/fraxinus_excelsior_pleple2000_gnu_1200x675px.jpg",
                        "description": "Ask är ett stort lövträd i familjen syrenväxter, som räknas till de ädla träden." +
                            "Fullvuxna träd är omtalade för att deras löv slår ut med en skir grönska sist av alla lövträd." +
                            "Ofta hävdas även att asken fäller sina blad först av alla lövträd om hösten."
                    },
                    {
                        "id": 3,
                        "name": "Asp",
                        "image": "https://www.skogskunskap.se/Large/cd_4a9b41/contentassets/67015e741dc949ea895881c205e7deff/asp_lov_knivsta_mats_hannerz_1200x675px.jpg",
                        "description": "Asp är ett snabbväxande träd i poppelsläktet, familjen videväxter." +
                            "Det förekommer i tempererade Europa och österut till Kina och Japan, samt ett isolerat bestånd i Nordafrika, i Algeriet." +
                            "Asp finns i hela Sverige upp till trädgränsen och är den enda arten i släktet som betraktas som naturligt förekommande i landet."
                    },
                    {
                        "id": 4,
                        "name": "Björk",
                        "image": "https://www.skogskunskap.se/Large/cd_4a9aab/contentassets/c9d7767a3e0645a89d539eaac185f953/glasbjork_knivsta_mats_hannerz_1200x675px.jpg",
                        "description": "Björkarna utgör tillsammans 2/3 av landets totala lövträdsvolym, eller 12 % av det totala virkesförrådet på produktiv skogsmark."
                    },
                    {
                        "id": 5,
                        "name": "Ek",
                        "image": "https://www.skogskunskap.se/Large/cd_4ac4bf/contentassets/d7af7508edb044ef92df01422bc27535/img_7606-ekollon_mats_hannerz_1200x675px.jpg",
                        "description": "Det finns två arter av ek i Sverige. Ek (skogsek, stjälkek) är den vanligaste. Bergek (druvek) är ganska allmän i Götaland, särskilt i kustområdena."
                    },
                    {
                        "id": 6,
                        "name": "Lind",
                        "image": "https://www.skogskunskap.se/Large/cd_4ad0a7/contentassets/5964c2be90124833a4112f3362732e20/iphone-lind-blad_mats_hannerz_1200x675px.jpg",
                        "description": "Linden kan bli 30 meter hög och har kort, kraftig stam med en stor, rikt förgrenad krona." +
                            "Linden kan bli mycket gammal och kan skjuta nya skott även när den blivit avbruten." +
                            "Bladen är hjärtformade med sågad kant och rödbruna hårtofsar i nervvinklarna på undersidan."
                    },
                    {
                        "id": 7,
                        "name": "Avenbok",
                        "image": "https://www.skogskunskap.se/Large/cd_4a9ac6/contentassets/e414c3c4744a47639d964d002849f082/img_5096-avenbok_mats_hannerz_1200x675px.jpg",
                        "description": "Avenboken växer bara i de allra sydligaste landskapen i Sverige. Virket är det tyngsta och hårdaste av alla svenska trädslag."
                    },

                ]
            ).catch(e => {
                this.errors.push(e)
            })
    },

    methods: {
        
    },
}

</script>

<style scoped>
/* Desktop */


#grid {
    margin: 5%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 20px;
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

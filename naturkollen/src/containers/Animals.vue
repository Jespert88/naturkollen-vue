<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
            <div class="col-sm-12 col-md-10 col-xl-12">
                <div id="grid">

                    <AnimalCard v-for="animal in animalArray" :key="animal.id" :animal="animal" />
                    <back-to-top text="hej" visibleoffset="500" bottom="30px" right="30px">
                        <img src="../assets/up-arrow.png" class="img-fluid" id="toTopBtn"/>
                    </back-to-top>

                </div>
            </div>
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
        </div>
    </div>

</div>
</template>

<script>
import AnimalCard from '../components/AnimalCard.vue'
export default {
    name: 'Animals',
    components: {
        AnimalCard
    },
    data() {
        return {
            animalArray: [],
            errors: []
        }
    },

    created: function () {
        this.animalArray = [
            {
                "id": 0,
                "name": "Varg",
                "image": "https://images.unsplash.com/photo-1552249007-f19a9139bcde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80",
                "description": "Vargen är utan tvekan världens kraftfullaste hunddjur." +
                    "Den lever i familjegrupper i större revir. Namnet ”Varg” betyder på gammal svenska ”dräpare” eller ”tjuv” och är ett så kallat noanamn.",
                "kidTitle": "Valp",
                "kidImage": "https://images.unsplash.com/photo-1515253475595-2aa42d668c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                "kidDesc": "Bild på en valp på 9 veckor."
            },
            {
                "id": 1,
                "name": "Björn",
                "image": "https://images.unsplash.com/photo-1551792714-9a8b35338793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80",
                "description": "Björnar är en familj av större rovdjur och som idag omfattar åtta arter som förekommer över stora delar av norra- och södra halvklotet. Björnar lever i Eurasien, Nord- och Sydamerika och de fanns tidigare även i norra Afrika.",
                "kidTitle": "Björnunge",
                "kidImage": "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Björnunge kallas bear cub på engelska."
            },
            {
                "id": 2,
                "name": "Älg",
                "image": "https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "description": "Björnar är en familj av större rovdjur och som idag omfattar åtta arter som förekommer över stora delar av norra- och södra halvklotet. Björnar lever i Eurasien, Nord- och Sydamerika och de fanns tidigare även i norra Afrika.",
                "kidTitle": "Älgkalv",
                "kidImage": "https://images.unsplash.com/photo-1569343894830-c984d532eb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Kalvarna, som växer snabbt under det första halvåret, brukar väga uppåt 150 kg när november kommer. Älgkalvarna går i sällskap med sina mödrar fram till någon vecka innan modern kalvar på nytt."
            },
            {
                "id": 3,
                "name": "Rådjur",
                "image": "https://images.unsplash.com/photo-1529526383488-04932fd2d32e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=812&q=80",
                "description": "Rådjur är ett litet hjortdjur som förekommer i Europa och Mindre Asien. Benämningen på en vuxen hane är bock. Honan kallas för get eller rå, ungdjur under första året kallas kid eller killing, och getter som ännu inte fött kid kallas för smaldjur.",
                "kidTitle": "Kid eller killing",
                "kidImage": "https://images.unsplash.com/photo-1481695875655-fada44bb8e75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Kalvarna, som växer snabbt under det första halvåret, brukar väga uppåt 150 kg när november kommer. Älgkalvarna går i sällskap med sina mödrar fram till någon vecka innan modern kalvar på nytt."
            },
            {
                "id": 4,
                "name": "Vildsvin",
                "image": "https://images.unsplash.com/photo-1545426908-a67f44ed0291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                "description": "Vildsvin är ett partåigt hovdjur vars ursprungliga utbredningsområde sträckte sig från västra Europa till Sydostasien. Vildsvinet introducerades sedan i Nordamerika, Sydamerika, Australien och på många öar och har därför idag en nästan världsvid utbredning",
                "kidTitle": "Kulting",
                "kidImage": "https://images.unsplash.com/photo-1552249007-bb8debc3bbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
                "kidDesc": "Vilsvinsens ungar kallas för kultingar."
            },
            {
                "id": 5,
                "name": "Räv",
                "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
                "description": " Rödräv. Räven är ett av världens mest spridda rovdjur. Den är aktiv året runt och finns i alla miljöer, från kalfjället till städernas parker.",
                "kidTitle": "Rävunge",
                "kidImage": "https://images.unsplash.com/photo-1444754781737-af80b5324002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Bild på en rävunge."
            },
            {
                "id": 6,
                "name": "Hackspett",
                "image": "https://images.unsplash.com/photo-1516286782004-877e5dfdf5ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                "description": " Hackspettarna har en rak, stark, smal och vass näbb, med nästan cirkelrunt tvärsnitt, dock skiljer sig den proportionerliga längden mycket mellan olika grupper av hackspettar.",
                "kidTitle": "Hackspett",
                "kidImage": "https://images.unsplash.com/photo-1444465986331-f9f14553c73c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Bla bla bla."
            },
            {
                "id": 7,
                "name": "Grävling",
                "image": "https://images.unsplash.com/photo-1562706941-7deb2b208718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "description": "Grävling eller europeisk grävling är ett rovdjur som tillhör familjen mårddjur och som förekommer i Eurasien.",
                "kidTitle": "Grävling äter",
                "kidImage": "https://images.unsplash.com/photo-1542462153-051e01f22e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                "kidDesc": "Bla bla bla."
            },
           

        ]
    }
}
</script>

<style>
/* Desktop */
#toTopBtn {
    height: 40px;
    widows: 40px;
    padding: 5px;
    border-radius: 50%;
    background-color: rgb(71, 161, 71);
}

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

<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-1 col-md-1 col-xl-0"></div>
        <div class="col-sm-12 col-md-10 col-xl-12">
          <h1 id="TreePageTitle">Klicka på korten för info om trädarten</h1>
          <div id="grid">
            <!-- <TreeCard v-for="user in userArray" :key="user.id" :user="user" /> -->
            <TreeCard v-for="tree in treeArray" :key="tree.id" :tree="tree" />

            <back-to-top text="no text" visibleoffset="500" bottom="30px" right="30px">
              <img src="../assets/up-arrow.png" class="img-fluid" id="toTopBtn" />
            </back-to-top>
          </div>
        </div>
        <div class="col-sm-1 col-md-1 col-xl-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeCard from "../components/TreeCard.vue";
/* import axios from "axios"; */
export default {
  name: "Trees",
  components: {
    TreeCard
  },

  data() {
    return {
      /* userArray: [], */
      treeArray: [],
      errors: []
    };
  },

  mounted() {
    try {
      this.treeArray = [
        {
          id: 0,
          name: "Al",
          image:
            "https://www.skogskunskap.se/Large/cd_20161018091956/contentassets/781fd60cecdc487a94b3df53211e6bee/graal_blad_lars_rytter_1200x675px.jpg",
          description:
            "Alarna står tillsammans för 1,5 % av det totala virkesförrådet på produktiv skogsmark." +
            " Båda alarterna är mycket snabbväxande i ungdomen, gråalen något mer än klibbalen." +
            " Alarna har kvävefixerande bakterier i rotknölar och kan därför binda luftkväve." +
            " De fäller löven gröna med kvävet i behåll. Alarna är därför goda markförbättrare och kvävegödslare."
        },
        {
          id: 1,
          name: "Alm",
          image:
            "https://www.skogskunskap.se/Large/cd_20161017173337/contentassets/e50b7ce38ed04382a1051f0117da8b47/ulmus_glabra_001_willow_creative-commons-cc-by-2.5_1200x675px.jpg",
          description:
            "Skogsalm " +
            "Almen delas ibland in i underarterna skogsalm (Ulmus glabra ssp. glabra) och bergalm (U. glabra ssp. montana)." +
            " Almen är ett 30-40 meter högt träd med rak stam och mörk, grov skorpbark." +
            " Kronan är tät med uppåtgående huvudgrenar med utböjda spetsar." +
            "Bladen är hela med mycket korta bladskaft och en sned bladbas." +
            " Översidan är mycket sträv av små borstlika hår. Bladen sitter i ett och samma plan." +
            " Almen har runda blomknoppar i nedre delen av skotten och smalare bladknoppar längre upp."
        },
        {
          id: 2,
          name: "Ask",
          image:
            "https://www.skogskunskap.se/Large/cd_20161017182537/contentassets/21e96547a5534bbdb7bee7d482fb2964/fraxinus_excelsior_pleple2000_gnu_1200x675px.jpg",
          description:
            "Ask är ett stort lövträd i familjen syrenväxter, som räknas till de ädla träden." +
            " Fullvuxna träd är omtalade för att deras löv slår ut med en skir grönska sist av alla lövträd." +
            " Ofta hävdas även att asken fäller sina blad först av alla lövträd om hösten." +
            " Asken kan bli över 30 meter hög med en rundad krona och båglikt uppåtriktade grenar." +
            " Asken är parbladig med uddblad. Bladen och skotten sitter alltid i par, på motsatta sidor om skottet."
        },
        {
          id: 3,
          name: "Asp",
          image:
            "https://www.skogskunskap.se/Large/cd_20161018083923/contentassets/67015e741dc949ea895881c205e7deff/asp_lov_knivsta_mats_hannerz_1200x675px.jpg",
          description:
            "Asp är ett snabbväxande träd i poppelsläktet av familjen videväxter." +
            " Asp finns i hela Sverige och är den enda arten i släktet som betraktas som naturligt förekommande i landet." +
            " Aspen har en skoglig betydelse i Sverige, vanlig asp (Populus tremula) och hybridasp (P. tremula x P. tremuloides)." +
            " Hybridaspen är en korsning mellan amerikansk och europeisk asp, och den räknas som en införd art." +
            " Den vanliga aspen har en medeltillväxt på 8-9 m3sk per ha och år på bra mark." +
            " Hybridaspen, som är en korsning (arthybrid) mellan europeisk och amerikansk asp, växer däremot med över 20 m3sk per ha och år." +
            " Hybridasp började framställas under 1940-talet, framför allt för att ge virke till tändsticksindustrin."
        },
        {
          id: 4,
          name: "Björk",
          image:
            "https://www.skogskunskap.se/Large/cd_20161018083157/contentassets/c9d7767a3e0645a89d539eaac185f953/glasbjork_knivsta_mats_hannerz_1200x675px.jpg",
          description:
            "I Sverige finns två virkesproducerande arter - vårtbjörk (Betula pendula) och glasbjörk (Betula pubescens)." +
            " Björkarna utgör tillsammans 2/3 av landets totala lövträdsvolym, eller 12 % av det totala virkesförrådet på produktiv skogsmark." +
            " Båda arterna växer bäst på friska näringsrika marker. Vårtbjörken har en medelproduktion på omkring 10 m3sk per ha och år på bra marker."
        },
        {
          id: 5,
          name: "Ek",
          image:
            "https://cdn.pixabay.com/photo/2019/06/19/19/41/oak-leaf-4285529_960_720.jpg",
          description:
            "Det finns två arter av ek i Sverige. Ek (skogsek, stjälkek) är den vanligaste. Bergek (druvek) är ganska allmän i Götaland, särskilt i kustområdena." +
            " Eken är vårt vanligaste ädla lövträd och har i långa tider fyllt viktiga funktioner för folkhushållet genom ollonproduktion och virke, och för statsmakterna genom att den garanterat bland annat skeppsvirke." +
            " Eken har en nyckelroll för den biologiska mångfalden."
        },
        {
          id: 6,
          name: "Lind",
          image:
            "https://www.skogskunskap.se/Large/cd_20161120135908/contentassets/5964c2be90124833a4112f3362732e20/iphone-lind-blad_mats_hannerz_1200x675px.jpg",
          description:
            "I Sverige finns två arter lindar. Den vanligaste kallas lind eller skogslind (Tilia cordata) medan bohuslinden (Tilia platyphyllos) är mycket ovanlig och bara växer vilt i Bohuslän." +
            " Linden kan bli 30 meter hög och har kort, kraftig stam med en stor, rikt förgrenad krona." +
            " Linden kan bli mycket gammal och kan skjuta nya skott även när den blivit avbruten." +
            " Bladen är hjärtformade med sågad kant och rödbruna hårtofsar i nervvinklarna på undersidan."
        },
        {
          id: 7,
          name: "Avenbok",
          image:
            "https://www.skogskunskap.se/Large/cd_20161018093338/contentassets/e414c3c4744a47639d964d002849f082/img_5096-avenbok_mats_hannerz_1200x675px.jpg",
          description:
            "Avenboken växer bara i de allra sydligaste landskapen i Sverige. Virket är det tyngsta och hårdaste av alla svenska trädslag." +
            " Avenboken är ofta ett ganska kortvuxet träd och får en vid och rund krona när den växer fritt. Den påminner om boken med sin grå stam och täta lövverk. Stammen är täckt av längsgående åsar." +
            " Avenboken blommar i maj samtidigt som lövsprickningen."
        }
      ];

      // Fetches user from (https://jsonplaceholder.typicode.com/users) when the component is created.
      /* axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.userArray = response.data;
        console.log(this.userArray);
      }) */
        
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
}

#TreePageTitle {
  text-align: center;
  margin-top: 5%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

  .btn-to-top {
    width: 20px;
    height: 20px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
  }

  #TreePageTitle {
    text-align: center;
    margin-top: 10%;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

  .btn-to-top {
    width: 20px;
    height: 20px;
    padding: 10px 16px;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
  }

  #TreePageTitle {
    text-align: center;
    margin-top: 10%;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>

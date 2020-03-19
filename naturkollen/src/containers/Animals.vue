<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-1 col-md-1 col-xl-0"></div>
        <div class="col-sm-12 col-md-10 col-xl-12">
          <h1 id="animalPageTitle">Klicka på korten för info om djurarterna</h1>
          <div id="grid">
            <AnimalCard v-for="animal in animalArray" :key="animal.id" :animal="animal" />
            <back-to-top text="hej" visibleoffset="500" bottom="30px" right="30px">
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
import AnimalCard from "../components/AnimalCard.vue";
export default {
  name: "Animals",
  components: {
    AnimalCard
  },
  data() {
    return {
      animalArray: [],
      errors: []
    };
  },

  created: function() {
    this.animalArray = [
      {
        id: 0,
        name: "Varg",
        image:
          "https://images.unsplash.com/photo-1552249007-f19a9139bcde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80",
        description:
          "Vargen är ett rovdjur vars utbredningsområde sträcker sig över stora delar av världen." +
          " Vargen är det största vilda hunddjuret och en fullvuxen varg väger vanligen 30 till 50 kg.",

        kidTitle: "Valp",
        kidImage:
          "https://images.unsplash.com/photo-1515253475595-2aa42d668c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        kidDesc: "Bild på en valp på 9 veckor."
      },
      {
        id: 1,
        name: "Björn",
        image:
          "https://images.unsplash.com/photo-1551792714-9a8b35338793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80",
        description:
          "Björnar förekommer över stora delar av norra- och södra halvklotet. De lever i Eurasien, Nord- och Sydamerika och de fanns tidigare även i norra Afrika.",
        kidTitle: "Björnunge",
        kidImage:
          "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc: "Björnunge kallas bear cub på engelska."
      },
      {
        id: 2,
        name: "Älg",
        image:
          "https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description:
          "Älgar är de nu levande största hjortdjuren." +
          " Till skillnad från de flesta hjortdjuren så lever älgar till största delen ensamma. De är dagaktiva och förflyttar sig stora sträckor per dygn.",
        kidTitle: "Älgkalv",
        kidImage:
          "https://images.unsplash.com/photo-1569343894830-c984d532eb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc:
          "Älgkalvarna går i sällskap med sina mödrar fram till någon vecka innan modern kalvar på nytt."
      },
      {
        id: 3,
        name: "Rådjur",
        image:
          "https://images.unsplash.com/photo-1498101365322-647e1438915f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        description:
          "Rådjur är ett litet hjortdjur som förekommer i Europa och Mindre Asien. Benämningen på en vuxen hane är bock. Honan kallas för get eller rå, ungdjur under första året kallas kid eller killing, och getter som ännu inte fött kid kallas för smaldjur.",
        kidTitle: "Kid eller killing",
        kidImage:
          "https://images.unsplash.com/photo-1481695875655-fada44bb8e75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc: " Ungdjur under första året kallas kid eller killing."
      },
      {
        id: 4,
        name: "Dovhjort",
        image:
          "https://images.unsplash.com/photo-1472636913292-1c4e82356d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
          "Dovhjort (Dama dama) är ett hjortdjur som är mindre än kronhjorten. Troligen var arten före senaste istiden begränsad till södra Europa och Turkiet." + 
          " Den ökade sedan sitt utbredningsområde till Centraleuropa, delvis med människans hjälp. Sedan blev arten introducerad i flera andra delar av världen. ",
        kidTitle: "Kid eller killing",
        kidImage:
          "",
        kidDesc: ""
      },
      {
        id: 5,
        name: "Kronhjort",
        image:
          "https://images.unsplash.com/photo-1543756605-a90da919605a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
        "Kronhjortens utbredningsområde sträcker sig från Europa och Nordafrika till västra Centralasien." + 
        " Hanhjorten (hjorten) når en längd av 175 till 225 cm från nosen till svansroten; svansens längd är ytterligare cirka 15 cm." + 
        " Mankhöjden över bogen uppgår till mellan 130 och 160 cm. Levandevikt för normalhjorten cirka 200 kg men kan uppgå till 300 kg. Honan (hinden) är betydligt mindre." + 
        " Kroppsvikten är ungefär 45 till 50 % av hannens kroppsvikt och i Norden stiger honans vikt sällan över 170 kg.",
        kidTitle: "Kid eller killing",
        kidImage:
          "",
        kidDesc: ""
      },
      {
        id: 6,
        name: "Vildsvin",
        image:
          "https://images.unsplash.com/photo-1545426908-a67f44ed0291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        description:
          "Vildsvin är ett hovdjur vars ursprungliga utbredningsområde sträckte sig från västra Europa till Sydostasien." +
          " Vildsvinet introducerades sedan i Nordamerika, Sydamerika, Australien och på många öar och har därför idag en nästan världsvid utbredning",
        kidTitle: "Kulting",
        kidImage:
          "https://images.unsplash.com/photo-1552249007-bb8debc3bbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
        kidDesc: "Vilsvinsens ungar kallas för kultingar."
      },
      {
        id: 7,
        name: "Räv",
        image:
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        description:
          "Räven är ett av världens mest spridda rovdjur." +
          " Den är aktiv året runt och finns i alla miljöer, från kalfjället till städernas parker.",
        kidTitle: "Rävunge",
        kidImage:
          "https://images.unsplash.com/photo-1444754781737-af80b5324002?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        kidDesc: "Bild på en rävunge."
      },
      {
        id: 8,
        name: "Lodjur",
        image:
          "https://cdn.pixabay.com/photo/2019/01/10/03/04/bobcat-3924734_960_720.jpg",
        description:
          "Lodjur (Lynx på engelska) är ett kattdjur som förekommer i Europa och Asien." + 
          " Lodjuret är Europas största kattdjur och fanns en gång i skogar över stora delar av den europeiska kontinenten och vidare österut till Sibirien." + "\n" +
          " Kroppslängden brukar vara mellan 80-130 cm och vikten 15-25 kg på ett fullvuxet djur.",
        kidTitle: "",
        kidImage:
          "https://images.unsplash.com/photo-1532986701744-5cee048ef948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        kidDesc: "Parningstiden är i mars-april. I maj-juni föder honan en till fyra ungar som hon ensam tar ansvar för." + 
        " Ungarna följer sin mamma i nästan ett år. Av henne lär de sig bland annat att jaga och döda byten." + 
        " När ungarna är knappt två år blir de könsmogna."
      },
      {
        id: 9,
        name: "Grävling",
        image:
          "https://images.unsplash.com/photo-1562706941-7deb2b208718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description:
          "Grävling eller europeisk grävling är ett rovdjur som tillhör familjen mårddjur och som förekommer i Eurasien.",
        kidTitle: "Grävling äter",
        kidImage:
          "https://images.unsplash.com/photo-1542462153-051e01f22e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc: "Det här var gott de!"
      },
      {
        id: 10,
        name: "Hare",
        image:
          "https://images.unsplash.com/photo-1506108198627-b100e11bbc47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
          "Info om hararna här! Det finns två sorter! " + 
          " Kroppslängden ligger vanligen mellan 40 och 70 centimeter. Vikten ligger mellan 1,3 och 7 kilogram där honorna oftast är större samt tyngre än hannarna. ",
        kidTitle: "",
        kidImage:
          "",
        kidDesc: ""
      },
      {
        id: 11,
        name: "Mord",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Martes_martes_in_Sweden.jpg",
        description:
          "Mård är ett skogslevande mellanstort rovdjur i familjen mårddjur som förekommer i större delen av Europa och delar av västra Asien. Mården ska inte blandas samman med mårdhunden, där den senare inte är ett mårddjur utan ett hunddjur. ",
        kidTitle: "",
        kidImage:
          "",
        kidDesc: ""
      },
      {
        id: 12,
        name: "Mink",
        image:
          "https://bilder.svenskjakt.se/w:2048/h:1365/q:auto/https://svenskjakt.se/wp-content/uploads/2018/06/11011-4171-8.jpg",
        description:
          "Mink är ett nordamerikanskt mårddjur som har introducerats till många länder, bland annat Skandinavien, för pälsdjursuppfödning." + 
          " Minken är 30–45 cm lång, exklusive svansen på 13–23 cm. Hanen är större än honan och väger mellan 1–1,5 kg, medan honan vanligtvis väger omkring 0,75 kg.",
        kidTitle: "",
        kidImage:
          "",
        kidDesc: ""
      },
      {
        id: 13,
        name: "Järv",
        image:
          "https://www.jaktojagare.se/upload/_Articles/21863/Images/15687/jarv.jpg/Large/jarv.jpg",
        description:
          "Järv är ett rovdjur i familjen mårddjur." + 
          " Vuxna individer blir 65–105 centimeter långa och därtill kommer en 13–26 centimeter lång svans." + 
          " Den vuxna honan väger 9–11 kg och hanen 14–16 kg. Kroppen är ganska kort och relativt kraftig med tjocka ben." + 
          " Arten påminner därför mer om en liten björn än om ett mårddjur.",
        kidTitle: "",
        kidImage:
          "",
        kidDesc: ""
      }
    ];
  }
};
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
}

#animalPageTitle {
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
    grid-row-gap: 40px;
  }

  #animalPageTitle {
    text-align: center;
    margin-top: 10%;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  #grid {
    margin: 5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
  }

  #animalPageTitle {
    text-align: center;
    margin-top: 10%;
    font-size: 30px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>

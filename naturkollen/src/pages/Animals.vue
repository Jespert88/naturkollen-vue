<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-sm-1 col-md-1 col-xl-0"></div>
        <div class="col-sm-12 col-md-10 col-xl-12">
          <div class="grid">
            <AppAnimalCard
              v-for="animal in animalArray"
              :key="animal.id"
              :animal="animal"
            />
            <AppToTopBtn />
          </div>
        </div>
        <div class="col-sm-1 col-md-1 col-xl-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAnimalCard from "../components/AppAnimalCard.vue";
import AppToTopBtn from "../components/AppToTopBtn.vue";
export default {
  name: "Animals",
  components: {
    AppAnimalCard,
    AppToTopBtn,
  },
  data() {
    return {
      animalArray: [],
      errors: [],
    };
  },

  created: function () {
    this.animalArray = [
      {
        id: 0,
        name: "Varg",
        image:
          "https://images.unsplash.com/photo-1552249007-f19a9139bcde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1344&q=80",
        description:
          "Vargen är ett rovdjur vars utbredningsområde sträcker sig över stora delar av världen samt är det största vilda hunddjuret ",
        male: "Hane",
        female: "Tik",
        height: "66 – 81 cm",
        weight: "30 - 50 kg (fullvuxen)",
        kidTitle: "Valp",
        kidImage:
          "https://images.unsplash.com/photo-1515253475595-2aa42d668c8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        kidDesc:
          "Vargar parar sig i februari–mars och valparna brukar födas efter 63 dygn. De första valparna börjar vandra ut i mars/april då de är cirka 12 månader." +
          " Bilden visar en vargmamma ihop med sin valp på 9 veckor.",
      },
      {
        id: 1,
        name: "Björn",
        image:
          "https://www.borasdjurpark.se/wp-content/uploads/2013/04/brunbjorn01-768x432.jpg",
        description:
          "Björnar förekommer över stora delar av norra- och södra halvklotet. De lever i Eurasien, Nord- och Sydamerika och de fanns tidigare även i norra Afrika.",
        male: "Hane",
        female: "Hona",
        height: "70 – 150 cm",
        weight: "80 – 600 kg (Vuxen)",
        kidTitle: "Björnunge",
        kidImage:
          "https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc:
          "Parningstiden för björnar ligger mella maj och juni." +
          " Vartannat år föder honan en till fyra ungar som väger mellan 400 gram till 2 kilogram vid födseln.",
      },
      {
        id: 2,
        name: "Älg",
        image:
          "https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description:
          "Älgar är de största levande hjortdjuren." +
          " Till skillnad från de flesta hjortdjuren så lever älgar till största delen ensamma. De är dagaktiva och förflyttar sig stora sträckor per dygn.",
        male: "Tjur",
        female: "Ko eller Kviga (om ej fått kalv)",
        height: "140 – 210 cm",
        weight: "380 - 700 kg (Vuxen)",
        kidTitle: "Älgkalv",
        kidImage:
          "https://images.unsplash.com/photo-1569343894830-c984d532eb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc:
          "Parningstiden äger rum på hösten och följer sedan en dräktighet på åtta månader (230–240 dygn)." +
          " Älgkalvarna går i sällskap med sina mödrar fram till någon vecka innan modern kalvar på nytt.",
      },
      {
        id: 3,
        name: "Rådjur",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/e/ed/Siberian_roe_deer.jpg",
        description:
          "Rådjur är ett litet hjortdjur som förekommer i Europa och Mindre Asien. Benämningen på en vuxen hane är bock. Honan kallas för get eller rå, ungdjur under första året kallas kid eller killing, och getter som ännu inte fött kid kallas för smaldjur.",
        male: "Bock",
        female: "Get eller rå",
        height: "70 - 75 cm",
        weight: "20 - 30 kg (Vuxen)",
        kidTitle: "Kid eller killing",
        kidImage:
          "https://images.unsplash.com/photo-1481695875655-fada44bb8e75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        kidDesc: " Ungdjur under första året kallas kid eller killing.",
      },
      {
        id: 4,
        name: "Dovhjort",
        image:
          "https://images.unsplash.com/photo-1472636913292-1c4e82356d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
          "Dovhjort är ett hjortdjur som är mindre än kronhjorten." +
          " Dovhjort har ofta om sommaren rödbrun päls med vita prickar, svart rygglinje och vit mage. På vintern är den mer gråbrun.",
        male: "Hjort",
        female: "Hind",
        height: "73 - 91 cm",
        weight: "46 – 80 kg",
        kidTitle: "Kalv eller kid",
        kidImage:
          "https://lh3.googleusercontent.com/proxy/ig2uENwSpV-QouTaO5bF-NM-MoPq-hGnTaVve7omgnA53IcpW-pzDr3_TD58LuMrRMqBz-rnGegflXMMiJWVJ8v5Z38ZLPuay4u7xQGMYqoLGH8SvFJ1tQzlUgQAvQlvAY1XOfwOxZUcGg",
        kidDesc:
          "Brunsttiden infaller normalt i oktober och varar till början av november. Hondjuret, eller hinden, får normalt en kalv, ibland två, som föds i maj-juni. ",
      },
      {
        id: 5,
        name: "Kronhjort",
        image:
          "https://images.unsplash.com/photo-1543756605-a90da919605a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
          "Kronhjortens utbredningsområde sträcker sig från Europa och Nordafrika till västra Centralasien." +
          " Mankhöjden över bogen uppgår till mellan 130 och 160 cm. Levandevikt för normalhjorten cirka 200 kg men kan uppgå till 300 kg. Honan (hinden) är betydligt mindre." +
          " Kroppsvikten är ungefär 45 till 50 % av hannens kroppsvikt och i Norden stiger honans vikt sällan över 170 kg.",
        male: "Hjort, tjur eller bock",
        female: "Ko eller hind",
        height: "130 och 160 cm",
        weight: "200 - 300 kg (Vuxen)",
        kidTitle: "",
        kidImage: "",
        kidDesc: "",
      },
      {
        id: 6,
        name: "Vildsvin",
        image:
          "https://images.unsplash.com/photo-1545426908-a67f44ed0291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        description:
          "Vildsvin är ett hovdjur vars ursprungliga utbredningsområde sträckte sig från västra Europa till Sydostasien." +
          " Vildsvinet introducerades sedan i Nordamerika, Sydamerika, Australien och på många öar och har därför idag en nästan världsvid utbredning",
        male: "Galt",
        female: "Sugga",
        height: "100cm",
        weight: "Hane (upp till 230kg), sugga (70 - 140kg)",
        kidTitle: "Kulting",
        kidImage:
          "https://images.unsplash.com/photo-1552249007-bb8debc3bbf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=500&q=60",
        kidDesc: "Vilsvinsens ungar kallas för kultingar.",
      },
      {
        id: 7,
        name: "Räv",
        image:
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        description:
          "Räven är ett av världens mest spridda rovdjur." +
          " Den är aktiv året runt och finns i alla miljöer, från kalfjället till städernas parker.",
        male: "Hane",
        female: "Hona",
        height: "35 – 50 cm",
        weight: "2,2 – 14 kg",
        kidTitle: "Valp",
        kidImage: "https://www.midbec.se/wp-content/uploads/2016/01/unge.png",
        kidDesc:
          "Parningen brukar var mellan januari och februari" +
          " Honan föder vanligtvis tre till fem ungar, i sällsynta fall bara en eller upp till tretton valpar.",
      },
      {
        id: 8,
        name: "Lodjur",
        image:
          "https://cdn.pixabay.com/photo/2019/01/10/03/04/bobcat-3924734_960_720.jpg",
        description:
          "Lodjur (Lynx på engelska) är ett kattdjur som förekommer i Europa och Asien." +
          " Lodjuret är Europas största kattdjur och fanns en gång i skogar över stora delar av den europeiska kontinenten och vidare österut till Sibirien." +
          " Kroppslängden brukar vara mellan 80-130 cm och vikten 15-25 kg på ett fullvuxet djur.",
        male: "Hane",
        female: "Hona",
        height: "55 – 75 cm",
        weight: "18 - 30 kg",
        kidTitle: "Lodjursunge",
        kidImage: "https://thumb.mp-farm.com/3046265/preview.jpg",
        kidDesc:
          "Parningstiden är i mars-april. I maj-juni föder honan en till fyra ungar som hon ensam tar ansvar för." +
          " Ungarna följer sin mamma i nästan ett år. Av henne lär de sig bland annat att jaga och döda byten." +
          " När ungarna är knappt två år blir de könsmogna.",
      },
      {
        id: 9,
        name: "Grävling",
        image:
          "https://images.unsplash.com/photo-1562706941-7deb2b208718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        description:
          "Grävling eller europeisk grävling är ett rovdjur som tillhör familjen mårddjur och som förekommer i Eurasien.",
        male: "Hane",
        female: "Hona",
        height: "Ingen info hittad",
        weight: "10 -17 kg",
        kidTitle: "Grävlingunge",
        kidImage:
          "https://husdjursblogg.glanna.se/wp-content/uploads/gravling.jpg",
        kidDesc:
          "Parningstiden är i nordliga trakter vanligen mars till maj men kan pågå ända till hösten." +
          " Ungarna föds vanligen i februari till mars året därpå. Honan får 1 till 4 ungar per kull.",
      },
      {
        id: 10,
        name: "Hare",
        image:
          "https://images.unsplash.com/photo-1506108198627-b100e11bbc47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        description:
          "Info om hararna här! Det finns två sorter! " +
          " Kroppslängden ligger vanligen mellan 40 och 70 centimeter. Vikten ligger mellan 1,3 och 7 kilogram där honorna oftast är större samt tyngre än hannarna. ",
        male: "Hane",
        female: "Hona",
        height: "Ingen info hittad",
        weight: "2 - 4 kg",
        kidTitle: "Harunge",
        kidImage:
          "https://bilder.svenskjakt.se/w:auto/h:auto/q:auto/https://svenskjakt.se/wp-content/uploads/converted_files/24066/24066-thumb.jpg",
        kidDesc:
          "Parningsperioden börjar redan i februari, harhonan brukar i regel föda upp till tre kullar per säsong. ",
      },
      {
        id: 11,
        name: "Mård",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Martes_martes_in_Sweden.jpg",
        description:
          "Mård är ett skogslevande mellanstort rovdjur i familjen mårddjur som förekommer i större delen av Europa och delar av västra Asien. Mården ska inte blandas samman med mårdhunden, där den senare inte är ett mårddjur utan ett hunddjur. ",
        male: "Hane",
        female: "Hona",
        height: "Ingen info hittad",
        weight: "0,8 och 5,5 kg",
        kidTitle: "Mård unge",
        kidImage: "https://thumbs.dreamstime.com/z/ung-m%C3%A5rd-55511970.jpg",
        kidDesc:
          "Parningssäsongen äger rum i juni till augusti." +
          " ungarna föds vanligtvis mellan mars och maj." +
          " Ungarna blir könsmogna vid ungefär 1 års ålder. I naturen kan mården bli omkring 10 år gammal.",
      },
      {
        id: 12,
        name: "Mink",
        image:
          "https://bilder.svenskjakt.se/w:2048/h:1365/q:auto/https://svenskjakt.se/wp-content/uploads/2018/06/11011-4171-8.jpg",
        description:
          "Mink är ett nordamerikanskt mårddjur som har introducerats till många länder, bland annat Skandinavien, för pälsdjursuppfödning." +
          " Minken är 30–45 cm lång, exklusive svansen på 13–23 cm. Hanen är större än honan och väger mellan 1–1,5 kg, medan honan vanligtvis väger omkring 0,75 kg.",
        male: "Hane",
        female: "Hona",
        height: "Ingen info hittad",
        weight: "1 – 1,5 kg",
        kidTitle: "Mink unge",
        kidImage:
          "https://cdn2.cdnme.se/cdn/9-1/404252/images/2007/minkhona_med_unge_1198399099_14058341.jpg",
        kidDesc:
          "Minken inleder sin parning i mars. Hanen kan para sig med flera honor.I början av maj föds ungarna vilket brukar bli mella 3 - 6 stycken. ",
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
        male: "Hane",
        female: "Hona",
        height: "Ingen info hittad",
        weight: "14 - 16 kg",
        kidTitle: "Järvs ungar kallas för valpar",
        kidImage:
          "https://4.bp.blogspot.com/-SAU2_1nCbGU/T-TdRz85LEI/AAAAAAAAExw/l0Ml5KQcfak/s1600/1014570_520_292.jpg",
        kidDesc:
          "Järvar parar sig från april till augusti med en ökad aktivitet i juni. Kullen brukar bestå av 1 - 5 valpar.",
      },
    ];
  },
};
</script>

<style>
@import "../assets/css/pages/Animal.css";
@import "../assets/css/globalStyles.css";
</style>

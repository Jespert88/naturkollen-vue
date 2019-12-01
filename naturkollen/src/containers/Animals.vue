<template>
<div class="content">

    <div class="container-fluid">
        <div class="row no-gutters">
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
            <div class="col-sm-12 col-md-10 col-xl-12">
                <div id="grid">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div class="col-sm-1 col-md-1 col-xl-0"></div>
        </div>
    </div>

</div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    name: 'Animals',
    components: {
        Card
    },


    /* https://via.placeholder.com/600C/O%20https://placeholder.com/#How_To_Set_Image_Size */
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

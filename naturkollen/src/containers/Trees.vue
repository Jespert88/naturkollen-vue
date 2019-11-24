<template>
  <div>
      
      <div id="grid">

        <div class="card" style="width: 18rem;">
          <img src="https://loremflickr.com/400/400" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>


   


      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
  #grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
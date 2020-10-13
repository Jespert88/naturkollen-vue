<template>
  <div>
      
    <div class="footer">
        <div> Copyright © {{year}} Jesper Truedsson </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
       year: ""
    }
  },
  created: function(){
    this.year = (new Date()).getFullYear();
  }
}
</script>

<style>
.footer {
 /*  position: absolute; */
  bottom: 0px;
  height: 3rem;
  width: 100%;
  padding: 10px;
  text-align: center;
  /* background-color: #649651 !important; */
  background-color: #52684a !important;
  color: #fff;
  clear: both;
}
p { margin: 0px; padding: 0px;}
</style>
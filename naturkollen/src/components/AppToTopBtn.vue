<template>
  <div>
    <back-to-top text="hej" visibleoffset="500" bottom="30px" right="30px">
      <img src="../assets/img/up-arrow.png" class="img-fluid" id="toTopBtn" />
    </back-to-top>
  </div>
</template>

<script>
export default {
  name: "ToTopBtn",
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
@import "../assets/css/components/AppToTopBtn.css";
@import "../assets/css/globalStyles.css";
</style>
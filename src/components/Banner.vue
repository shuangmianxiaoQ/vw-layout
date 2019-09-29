<template>
  <div class="container" flexcontainer>
    <div class="banner" w-750-235 aspectratio aspect-ratio="750/235">
      <div aspectratio-content>
        <img src="@/assets/banner.jpg" alt="banner" width="100%" height="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[w-750-235] {
  width: 750px;
  z-index: 5000;
}

[w-750-235] {
  aspect-ratio:'750:250';
}
</style>

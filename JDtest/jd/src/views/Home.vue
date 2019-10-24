<template>
  <div class="home">
    <Header/>
    <Slider/>
    <Novice/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../js/public/header.vue'
import Slider from './Hslider.vue'
import Novice from './novice.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    Novice
  }
}
</script>
<style lang="scss">
@import '../css/reset.scss';
.home{
  padding: 0;
  color:red;
  font-size: 14px
}
</style>


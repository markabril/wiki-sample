<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ItemInfoVue></ItemInfoVue>
  </div>
</template>

<script>
/* eslint-disable */
import HelloWorld from '@/components/HelloWorld.vue'
import ItemInfoVue from '@/components/ItemInfo.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ItemInfoVue
  }
}
</script>

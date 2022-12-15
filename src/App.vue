<template>
    <div>
        <nav>
            <router-link to="/item">Items</router-link> |
            <router-link to="/mob">Mobs</router-link>
        </nav>
        <router-view/>
    </div>
</template>
<script>
export default {
    /* eslint-disable */
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

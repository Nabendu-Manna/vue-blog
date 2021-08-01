<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Home name='Nabendu'/>
    <Home name='Manna'/> -->
    <router-view />
    <router-link :to="{ name: 'Home', params: { name: 'Namendu' } }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Home,
  },
  data() {
    return {
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

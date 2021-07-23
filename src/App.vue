<template>
  <div id="app">
    <b-container class="px-0" fluid>
      <b-row no-gutters>
        <b-col cols="2">
          <Sidebar />
        </b-col>
        <b-col cols="10" class="main-bg">
          <navbar></navbar>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-bg {
  background-color: #e5e5e5;
}
</style>
<script>
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar, Sidebar },
};
</script>

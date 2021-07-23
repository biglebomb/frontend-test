<template>
  <b-navbar sticky class="shadow bg-main">
    <b-navbar-nav class="ml-auto">
      <div class="text-left">
        <div class="text-name">John Doe</div>
        <div class="text-setting">
          <b-icon-gear scale="1.1"></b-icon-gear>
          Settings
        </div>
      </div>
      <b-nav-item-dropdown right>
        <template #button-content> </template>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" src="./Navbar.scss" scoped></style>

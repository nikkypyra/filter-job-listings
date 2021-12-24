<template>
  <div class="header" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 155px;
  background-color: $colorPrimary;
  background-image: url('../assets/images/bg-header-mobile.svg');

  @media only screen and (min-width: 400px) {
  background-image: url('../assets/images/bg-header-desktop.svg');
}
}
</style>

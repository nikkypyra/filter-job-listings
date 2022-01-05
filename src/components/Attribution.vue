<template>
  <div :class="$style.attribution">
    This is a modification of a challenge by
    <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
    Coded by
    <a href="https://www.github.com/nikkypyra" target="_blank" rel="noopener noreferrer">Nikky Pyra</a>.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Attribution extends Vue {}
</script>

<style lang="scss" module>
.attribution {
  color: $colorTertiary;
  text-align: center;
  font-size: 0.6em;
  line-height: 1.4em;
  padding: 28px 0;
}
</style>

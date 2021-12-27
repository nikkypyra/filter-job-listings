<template>
  <button>{{label}}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true }) label!: string;
}
</script>

<style lang="scss">
button {
  display: inline;
  color: $colorPrimary;
  background-color: $colorFilterTablets;
  font-size: 1.1em;
  font-weight: $fontWeight600;
  padding: 8px 12px 8px;
  border-radius: 20px;
  border: none;
}
</style>

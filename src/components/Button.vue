<template>
  <span class="button">{{ label }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true }) label!: string;
}
</script>

<style lang="scss">
.button {
  display: inline;
  color: $colorPrimary;
  background-color: $colorFilterTablets;
  font-weight: $fontWeight700;
  padding: 8px 12px 8px;
  border-radius: 20px;
}
</style>

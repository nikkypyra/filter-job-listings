<template>
  <button :class="['button', variant]" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true }) label!: string;
  @Prop({ default: "primary" }) variant!: "primary" | "secondary" | "tertiary";
}
</script>

<style lang="scss">
.button {
  display: inline;
  font-size: 0.9em;
  font-weight: $fontWeight600;
  padding: 8px;
  border-radius: 4px;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &.primary {
    background-color: $colorQuaternary;
    color: $colorPrimary;

    &:hover {
      background-color: $colorPrimary;
      color: $colorWhite;
    }
  }

  &.secondary {
    background-color: $colorPrimary;
    color: $colorWhite;
  }

  &.tertiary {
    background-color: transparent;
    color: $colorPrimary;

    &:hover {
      color: $colorTertiary;
    }
  }
}
</style>

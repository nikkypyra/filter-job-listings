<template>
  <button :class="[$style.button, variant && $style[variant], clickable && $style.clickable]" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true }) label!: string;
  @Prop({ default: "primary" }) variant!: "primary" | "secondary" | "tertiary";
  @Prop({ default: true }) clickable!: boolean;
}
</script>

<style lang="scss" module>
.button {
  display: inline;
  font-size: 0.9em;
  font-weight: $fontWeight600;
  padding: 8px;
  border-radius: 4px;
  border: none;

  &.primary {
    background-color: $colorQuaternary;
    color: $colorPrimary;
  }

  &.secondary {
    background-color: $colorPrimary;
    color: $colorWhite;
  }

  &.tertiary {
    background-color: transparent;
    color: $colorPrimary;
  }
}

.clickable {
  &:hover {
    cursor: pointer;
  }

  &.primary {
    &:hover {
      background-color: $colorPrimary;
      color: $colorWhite;
    }
  }

  &.tertiary {
    &:hover {
      background-color: transparent;
      color: $colorTertiary;
    }
  }
}
</style>

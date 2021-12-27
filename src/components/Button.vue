<template>
  <button :class="['button', variant]" @click="$emit('click')">{{label}}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ required: true }) label!: string;
  @Prop({ default: "primary" }) variant!: "primary" | "secondary";
}
</script>

<style lang="scss">
.button {
  display: inline;
  font-size: 1.1em;
  font-weight: $fontWeight600;
  padding: 8px 12px 8px;
  border-radius: 20px;
  border: none;

  &.primary {
    background-color: $colorPrimary;
    color: $colorWhite;
  }

  &.secondary {
    background-color: $colorQuaternary;
    color: $colorPrimary;
  }
}


</style>

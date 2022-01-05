<template>
  <span :class="[$style.statusPill, color && $style[color]]">{{ status.toUpperCase() }}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Status } from "../types/jobs.types";

@Component
export default class StatusPill extends Vue {
  @Prop({ required: true }) status!: Status.new | Status.featured;
  @Prop({ default: "primary" }) color!: "primary" | "secondary";
}
</script>

<style lang="scss" module>
.statusPill {
  display: inline;
  color: $colorWhite;
  font-size: 0.7em;
  font-weight: $fontWeight700;
  padding: 6px 8px 4px;
  border-radius: 20px;

  &.primary {
    background-color: $colorPrimary;
  }
  &.secondary {
    background-color: $colorSecondary;
  }
}
</style>

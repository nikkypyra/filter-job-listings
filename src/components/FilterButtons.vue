<template>
  <div :class="$style.filterContainer">
    <div :class="$style.buttonGroup">
      <Button
        v-for="role in roles"
        :key="role"
        :label="role"
        @click="handleFilters(role)"
        :variant="variant(role)"
      />
      <Button
        v-for="level in levels"
        :key="level"
        :label="level"
        @click="handleFilters(level)"
        :variant="variant(level)"
      />
    </div>
    <div :class="$style.buttonGroup">
      <Button
        v-for="language in languages"
        :key="language"
        :label="language"
        @click="handleFilters(language)"
        :variant="variant(language)"
      />
    </div>
    <div v-if="hasSelectedFilters" :class="$style.buttonGroup">
      <Button @click="clearFilters" label="Clear" variant="tertiary" class="clear" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Role, Language, Level } from "@/types/jobs.types";
import Button from "./Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class FilterButtons extends Vue {
  @Prop({ required: true }) filters!: string[];

  get roles(): Role[] {
    return Object.values(Role).map((value) => value);
  }

  get levels(): Level[] {
    return Object.values(Level).map((value) => value);
  }

  get languages(): Language[] {
    return Object.values(Language).map((value) => value);
  }

  get hasSelectedFilters(): boolean {
    return Boolean(this.filters.length);
  }

  filterIsSelected(value: string): boolean {
    return this.filters.includes(value);
  }

  variant(value: string) {
    return this.filterIsSelected(value) ? "secondary" : "primary";
  }

  handleFilters(filter: string): void {
    this.$emit("handle-filters", filter);
  }

  clearFilters(): void {
    this.$emit("clear-filters");
  }
}
</script>

<style lang="scss" module>
.filterContainer {
  display: grid;
  justify-content: center;
  background-color: $colorWhite;
  max-width: 400px;
  margin: -40px auto;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 16px 16px -4px $colorBoxShadow;

  .buttonGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    margin: 8px;
  }

  @media only screen and (min-width: $desktop) {
    justify-content: center;
    max-width: 600px;
    padding: 16px;
  }
}
</style>

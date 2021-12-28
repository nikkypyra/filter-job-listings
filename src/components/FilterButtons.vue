<template>
  <div class="filterContainer">
    <div class="buttonGroup">
      <Button v-for="role in roles" :key="role" :label="role" @click="handleFilters(role)" :variant="variant(role)" />
      <Button v-for="level in levels" :key="level" :label="level" @click="handleFilters(level)" :variant="variant(level)" />
    </div>
    <div class="buttonGroup">
      <Button v-for="language in languages" :key="language" :label="language" @click="handleFilters(language)" :variant="variant(language)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Role, Language, Level, Tool } from "@/types/jobs.types";
import Button from "./Button.vue";

@Component({
  components: {
    Button
  },
})
export default class FilterButtons extends Vue {
  @Prop({ required: true }) filters!: string[];
  
 get roles(): Role[] {
   return Object.values(Role).map((value) => value)
 }

 get levels(): Level[] {
   return Object.values(Level).map((value) => value)
 }

 get languages(): Language[] {
   return Object.values(Language).map((value) => value)
 }

 filterIsSelected(value: string): boolean {
   return this.filters.includes(value)
 }

 variant(value: string) {
   return this.filterIsSelected(value) ? 'primary' : 'secondary'
 }

 handleFilters(filter: string): void {
   this.$emit('handle-filters', filter)
 }
}
</script>

<style lang="scss">
.filterContainer {
  display: grid;
  justify-content: center;
  background-color: $colorWhite;
  max-width: 688px;
  margin: -40px auto;
  padding: 16px 28px;
  border-radius: 8px;
  box-shadow: 0px 16px 16px -4px $colorBoxShadow;

  .buttonGroup {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    margin: 6px;

    &:hover {
      background-color: $colorPrimary;
      color: $colorWhite;
    }
  } 
}
</style>

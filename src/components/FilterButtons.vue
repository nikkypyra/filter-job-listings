<template>
  <div class="filterContainer">
    <div class="roles">
    <Button v-for="role in roles" :key="role" :label="role" />
    </div>
    <div class="levels">
    <Button v-for="level in levels" :key="level" :label="level" />
    </div>
    <div class="languages">
    <Button v-for="language in languages" :key="language" :label="language" />
    </div>
    <div class="tools">
    <Button v-for="tool in tools" :key="tool" :label="tool" />
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
  
 get roles(): Role[] {
   return Object.values(Role).map((value) => value)
 }

 get levels(): Level[] {
   return Object.values(Level).map((value) => value)
 }

 get languages(): Language[] {
   return Object.values(Language).map((value) => value)
 }

 get tools(): Tool[] {
   return Object.values(Tool).map((value) => value)
 }
}
</script>

<style lang="scss">
.filterContainer {
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  gap: 8px;
  justify-content: space-around;
  background-color: $colorWhite;
  max-width: 900px;
  margin: -40px auto;
  padding: 16px 28px;
  border-radius: 8px;
  box-shadow: 0px 16px 16px -4px $colorBoxShadow;

  .roles {
    grid-column: 1;
    grid-row: 1;
  }

  .languages {
    grid-column: 2;
    grid-row: 1;
  }

  button {
    margin: 6px;
  } 
}
</style>

<template>
  <div id="app">
    <Header />
    <FilterButtons />
    <JobCards />
    <Attribution />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Attribution from "./components/Attribution.vue";
import JobCards from "./components/JobCards.vue";
import FilterButtons from "./components/FilterButtons.vue";

@Component({
  components: {
    Header,
    Attribution,
    JobCards,
    FilterButtons,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>

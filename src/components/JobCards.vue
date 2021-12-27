<template>
  <section class="cards">
    <JobCard
      v-for="job in jobs"
      :key="`${job.id}-${job.company}`"
      :job="job"
    />
  </section>
</template>

<script lang="ts">
import { Jobs } from "@/types/jobs.types";
import { Component, Vue, Prop } from "vue-property-decorator";
import JobCard from "./JobCard.vue";

@Component({
  components: {
    JobCard,
  },
})
export default class JobCards extends Vue {
  @Prop({ required: true }) jobs!: Jobs;
}
</script>

<style lang="scss">
.cards {
  max-width: 1100px;
  margin: 100px auto;
}
</style>

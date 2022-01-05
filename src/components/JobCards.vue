<template>
  <section :class="$style.cards">
    <JobCard
      v-for="job in jobs"
      :key="`${job.id}-${job.company}`"
      :job="job"
      :class="$style.card"
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

<style lang="scss" module>
.cards {
  margin: 100px auto;

  .card {
    margin: 48px auto;

    @media only screen and (min-width: $desktop) {
      margin: 28px auto;
    }
  }
}
</style>

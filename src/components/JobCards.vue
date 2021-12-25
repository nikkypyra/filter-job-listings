<template>
<section class="cards">
  <JobCard v-for="job in jobList" :key="`${job.id}-${job.company}`" :job="job" />
</section>
</template>

<script lang="ts">
import { Jobs, Status } from '@/types/jobs.types';
import { Component, Vue } from 'vue-property-decorator';
import { jobList } from '../data/jobs'
import JobCard from './JobCard.vue'

@Component({
  components: {
    JobCard
  },
})
export default class JobCards extends Vue {
jobList: Jobs = jobList
}
</script>

<style lang="scss">
.cards {
  max-width: 1000px;
  margin: 0 auto;
}

</style>
<template>
<section>
  <div :v-for="job in jobs" :key="`${job.id}-${job.company}`">
      {{ job.company }}
  </div>
</section>
</template>

<script lang="ts">
import { Jobs } from '@/types/jobs.types';
import { Component, Vue } from 'vue-property-decorator';
import { JobList } from '../data/jobs'

@Component
export default class JobCards extends Vue {
jobList: Jobs = JobList

get jobs(): Jobs {
    console.log(this.jobList)
    return this.jobList
}

mounted() {
    console.log("hi")
}
}
</script>

<style lang="scss">

</style>
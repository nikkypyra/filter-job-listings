<template>
<section>
  <div v-for="job in jobList" :key="`${job.id}-${job.company}`" class="card">
      <img :src="require(`../assets/images/${job.logo}`)" :alt="job.company" />
      <p>{{ job.company }}</p>
      <StatusPill v-if="job.new" color="primary" :status="newStatus" />
      <StatusPill v-if="job.featured" color="secondary" :status="featuredStatus" />
      <p>{{ job.position }}</p>
      <p>{{ job.postedAt }}</p>
      <p>{{ job.contract }}</p>
      <p>{{ job.location }}</p>
  </div>
</section>
</template>

<script lang="ts">
import { Jobs, Status } from '@/types/jobs.types';
import { Component, Vue } from 'vue-property-decorator';
import { jobList } from '../data/jobs'
import StatusPill from './StatusPill.vue'

@Component({
  components: {
    StatusPill
  },
})
export default class JobCards extends Vue {
jobList: Jobs = jobList
newStatus: string = Status.new 
featuredStatus: string = Status.featured 
}
</script>

<style lang="scss">
.card {
  background-color: $colorWhite;
  margin: 20px;
  max-width: 800px;
}
</style>
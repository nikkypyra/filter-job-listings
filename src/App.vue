<template>
  <div id="app">
    <Header />
    <FilterButtons :filters="selectedFilters" @handle-filters="setFilters" />
    <JobCards :jobs="selectedJobs"/>
    <p v-if="noMatchingJobs" class="noMatch">Sorry, no jobs match your search criteria.</p>
    <Attribution />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Attribution from "./components/Attribution.vue";
import JobCards from "./components/JobCards.vue";
import FilterButtons from "./components/FilterButtons.vue";
import { jobList } from "./data/jobs";
import { Job, Jobs } from "./types/jobs.types";

@Component({
  components: {
    Header,
    Attribution,
    JobCards,
    FilterButtons,
  },
})
export default class App extends Vue {
  jobs: Jobs = jobList
  filters: string[] = []

  get selectedFilters(): string[] {
    return this.filters
  }

  get selectedJobs(): Jobs {
    return this.jobs.sort((a: Job, b: Job) => a.id - b.id)
  }

  get noMatchingJobs(): boolean {
    return !this.selectedJobs.length
  }

  setJobs(): void {
    jobList.map((job) => {
      const jobInfo: string[] = [job.role, job.level, ...job.languages]
      if(this.selectedFilters.every((filter) => jobInfo.includes(filter))) {
        if(!this.selectedJobs.includes(job)) {
          this.jobs.push(job)
        }   
      } else {
        if(this.selectedJobs.includes(job)) {
          this.jobs = this.jobs.filter(item => item !== job)
        }
      }
    })
  }

  setFilters(selectedFilter: string): void {
    if(this.filters.includes(selectedFilter)) {
      this.filters = this.filters.filter(filter => filter !== selectedFilter);
    }
    else {
      this.filters = [...this.filters, selectedFilter]
    }
    this.setJobs()
  }
}
</script>

<style lang="scss">
.noMatch {
  text-align: center;
  color: $colorSecondary;
  margin: 140px 0 100px;
}
</style>
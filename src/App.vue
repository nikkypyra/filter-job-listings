<template>
  <div id="app">
    <Header />
    <FilterButtons :filters="selectedFilters" @handle-filters="setSelectedFilters" />
    <JobCards :jobs="matchingJobs"/>
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

  get matchingJobs(): Jobs {
    return this.sortJobsById()
  }

  get noMatchingJobs(): boolean {
    return !this.matchingJobs.length
  }

  sortJobsById(): Jobs {
    return this.jobs.sort((a: Job, b: Job) => a.id - b.id)
  }

  jobMatchesAllFilterCriteria(jobInfo: string[]): boolean {
    return this.selectedFilters.every((filter) => jobInfo.includes(filter))
  }

  matchingJobsIncludesJob(job: Job): boolean {
    return this.matchingJobs.includes(job)
  }

  setMatchingJobs(): void {
    jobList.map((job) => {
      const jobInfo: string[] = [job.role, job.level, ...job.languages]
      if (this.jobMatchesAllFilterCriteria(jobInfo)) {
        if (!this.matchingJobsIncludesJob(job)) {
          this.jobs.push(job)
        }   
      } else {
        if (this.matchingJobsIncludesJob(job)) {
          // remove job
          this.jobs = this.jobs.filter(item => item !== job)
        }
      }
    })
  }

  setSelectedFilters(selectedFilter: string): void {
    if (this.filters.includes(selectedFilter)) {
      // deselect filter
      this.filters = this.filters.filter(filter => filter !== selectedFilter);
    }
    else {
      this.filters = [...this.filters, selectedFilter]
    }
    this.setMatchingJobs()
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
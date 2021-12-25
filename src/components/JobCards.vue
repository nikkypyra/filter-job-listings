<template>
<section class="cards">
  <div v-for="job in jobList" :key="`${job.id}-${job.company}`" class="card">
      <img :src="require(`../assets/images/${job.logo}`)" :alt="job.company" />
      <div class="info">
        <div class="headline">
          <p class="company">{{ job.company }}</p>
          <StatusPill v-if="job.new" color="primary" :status="newStatus" class="statusPill" />
          <StatusPill v-if="job.featured" color="secondary" :status="featuredStatus" class="statusPill" />
        </div>
      <p class="position">{{ job.position }}</p>
      <div class="details">
      <p class="postedAt">{{ job.postedAt }}</p>
      <ul>
      <li><p>{{ job.contract }}</p></li>
      <li><p>{{ job.location }}</p></li>
      </ul>
      </div>
      </div>
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
.cards {
  max-width: 1000px;
  margin: 0 auto;

  .card {
    display: grid;
    align-items: center;
    background-color: $colorWhite;
    margin: 20px;
    padding: 16px 28px;
    border-radius: 8px;
    box-shadow: 0px 16px 16px -4px $colorBoxShadow;
  
    img {
      grid-column: 1;
    }

    .info {
      grid-column: 2;

      .headline {
        display: flex;
        align-items: center;

        .company {
          color: $colorPrimary;
          font-size: .9em;
          font-weight: $fontWeight700;
          margin-right: 12px;
        }

        .statusPill {
          margin: 4px;
        }
      }

      .position {
        padding-top: 8px;
        font-size: 1.1em;
        color: $colorSecondary;
        font-weight: $fontWeight700;
      }

      .details {
        display: flex;
        flex-direction: row;
        color: $colorTertiary;
        padding-top: 8px;

        .postedAt {
          margin-right: 28px;
        }

        ul {
          display: flex;

          li {
            margin-right: 28px;
          }
        }
      }
    }
  }
}

</style>
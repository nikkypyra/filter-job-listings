<template>
  <div class="card">
    <div class="cardLeft">
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
      <Skills :role="job.role" :languages="job.languages" :tools="job.tools" class="skills" />
  </div>
</template>

<script lang="ts">
import { Job, Status } from '@/types/jobs.types';
import { Component, Vue, Prop } from 'vue-property-decorator';
import StatusPill from './StatusPill.vue'
import Skills from './Skills.vue'

@Component({
  components: {
    StatusPill, 
    Skills
  },
})
export default class JobCards extends Vue {
@Prop({ default: null }) job!: Job
newStatus: string = Status.new
featuredStatus: string = Status.featured 
}
</script>

<style lang="scss">
  .card {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    background-color: $colorWhite;
    margin: 20px;
    padding: 16px 28px;
    border-radius: 8px;
    box-shadow: 0px 16px 16px -4px $colorBoxShadow;

    .cardLeft {
      display: grid;
      align-items: center;
      grid-template-columns: 116px auto;
      grid-column: 1;

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
          color: $colorSecondary;
          font-weight: $fontWeight700;
        }

        .details {
          display: flex;
          flex-direction: row;
          color: $colorTertiary;
          font-size: .9em;
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
  
    .skills {
      grid-column: 2;
    }
  }
</style>
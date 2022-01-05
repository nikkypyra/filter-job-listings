<template>
  <div :class="$style.card">
    <div :class="$style.baseInfoWrapper">
      <img :src="require(`../assets/images/${job.logo}`)" :alt="job.company" />
      <div :class="$style.baseInfo">
        <div :class="$style.headline">
          <p :class="$style.company">{{ job.company }}</p>
          <StatusPill
            v-if="job.new"
            color="primary"
            :status="newStatus"
            :class="$style.statusPill"
          />
          <StatusPill
            v-if="job.featured"
            color="secondary"
            :status="featuredStatus"
            :class="$style.statusPill"
          />
        </div>
        <div v-if="job.featured" :class="$style.featureHighlight"></div>
        <p :class="$style.position">{{ job.position }}</p>
        <div :class="$style.details">
          <p :class="$style.postedAt">{{ job.postedAt }}</p>
          <ul>
            <li>
              <p>{{ job.contract }}</p>
            </li>
            <li>
              <p>{{ job.location }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <Skills
      :role="job.role"
      :languages="job.languages"
      :level="job.level"
      :tools="job.tools"
      :class="$style.skills"
    />
  </div>
</template>

<script lang="ts">
import { Job, Status } from "@/types/jobs.types";
import { Component, Vue, Prop } from "vue-property-decorator";
import StatusPill from "./StatusPill.vue";
import Skills from "./Skills.vue";

@Component({
  components: {
    StatusPill,
    Skills,
  },
})
export default class JobCards extends Vue {
  @Prop({ default: null }) job!: Job;
  newStatus: string = Status.new;
  featuredStatus: string = Status.featured;
}
</script>

<style lang="scss" module>
.card {
  background-color: $colorWhite;
  border-radius: 8px;
  box-shadow: 0px 16px 16px -4px $colorBoxShadow;
  position: relative;
  padding: 20px;
  max-width: 400px;

  img {
    position: absolute;
    width: 50px;
    top: -25px;
    left: 20px;
  }

  .company {
    color: $colorPrimary;
    font-size: 0.9em;
    font-weight: $fontWeight700;
    margin-top: 4px;
    margin-right: 12px;
  }

  .headline {
    display: flex;
    align-items: center;
    margin-top: 12px;

    .statusPill {
      margin: 0 4px;
    }
  }

  .position {
    color: $colorSecondary;
    font-size: 1.1em;
    font-weight: $fontWeight700;
    padding-top: 12px;
  }

  .details {
    display: flex;
    flex-direction: row;
    color: $colorTertiary;
    font-size: 0.8em;
    padding-top: 12px;

    .postedAt {
      margin-right: 20px;
    }

    ul {
      display: flex;

      li {
        margin-right: 20px;
      }
    }
  }

  hr {
    color: $colorSecondary;
    margin: 16px 0 12px;
  }

  .skills {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    .skill:first-child {
      margin-left: 0;
    }
  }

  .featureHighlight {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: $colorPrimary;
    border-radius: 8px 0 0 8px;
  }

  @media only screen and (min-width: $desktop) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 32px 28px;
    max-width: 1000px;

    .baseInfoWrapper {
      display: grid;
      align-items: center;
      grid-template-columns: 116px auto;
      grid-column: 1;

      img {
        grid-column: 1;
        position: relative;
        max-width: 88px;
        width: 100%;
        top: unset;
        left: unset;
      }

      .baseInfo {
        grid-column: 2;

        .headline {
          margin-top: 0;
        }

        .details {
          padding-top: 12px;
          font-size: 1em;

          .postedAt {
            margin-right: 28px;
          }

          li {
            margin-right: 28px;
          }
        }
      }
    }

    hr {
      display: none;
    }

    .skills {
      justify-content: flex-end;
      grid-column: 2;
    }
  }
}
</style>

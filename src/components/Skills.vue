<template>
  <div class="skills">
    <div>
      <span class="skill">{{ role }}</span>
    </div>
    <div v-for="language in languages" :key="language">
      <span class="skill">{{ language }}</span>
    </div>
    <div v-for="tool in tools" :key="tool">
      <span class="skill">{{ tool }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Role, Language, Tool } from "@/types/jobs.types";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class JobCards extends Vue {
  @Prop({ required: true }) role!: Role;
  @Prop({ required: true }) languages!: Language[];
  @Prop({ required: true }) tools!: Tool[];
}
</script>

<style lang="scss">
.skills {
  display: flex;
  flex-direction: row;

  .skill {
    color: $colorPrimary;
    background-color: $colorFilterTablets;
    font-size: 0.9em;
    font-weight: 700;
    padding: 8px;
    margin-left: 8px;
    border-radius: 4px;
  }
}
</style>

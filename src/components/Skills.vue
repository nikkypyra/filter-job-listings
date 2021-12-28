<template>
  <div>
    <div v-for="skill in skills" :key="skill" class="skills">
      <span class="skill">{{ skill }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Role, Language, Level, Tool } from "@/types/jobs.types";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class JobCards extends Vue {
  @Prop({ required: true }) role!: Role;
  @Prop({ required: true }) level!: Level;
  @Prop({ required: true }) languages!: Language[];
  @Prop({ required: true }) tools!: Tool[];

  get skills(): string[] {
    return [this.role, this.level, ...this.languages, ...this.tools]
  }
}
</script>

<style lang="scss">
.skills {
 display: flex;
 justify-content: flex-end;
 flex-wrap: wrap;

  .skill {
    color: $colorPrimary;
    background-color: $colorQuaternary;
    font-size: 0.9em;
    font-weight: 700;
    padding: 8px;
    margin: 8px;
    border-radius: 4px;
  }
}
</style>

<template>
  <div>
    <Button v-for="skill in skills" :key="skill" :label="skill" />
  </div>
</template>

<script lang="ts">
import { Role, Language, Level, Tool } from "@/types/jobs.types";
import { Component, Vue, Prop } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class JobCards extends Vue {
  @Prop({ required: true }) role!: Role;
  @Prop({ required: true }) level!: Level;
  @Prop({ required: true }) languages!: Language[];
  @Prop({ required: true }) tools!: Tool[];

  get skills(): string[] {
    return [this.role, this.level, ...this.languages, ...this.tools];
  }
}
</script>

<style lang="scss" module>
button {
  margin: 4px;
}
</style>

<template>
  <div class="skills">
  <div>{{role}}</div>
  <div v-for="language in languages" :key="language">{{language}}</div>
  <div v-for="tool in tools" :key="tool">{{tool}}</div>
  </div>
</template>

<script lang="ts">
import { Role, Language, Tool } from '@/types/jobs.types';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class JobCards extends Vue {
@Prop({ default: null }) role!: Role
@Prop({ default: null }) languages!: Language[]
@Prop({ default: null }) tools!: Tool[]
}
</script>

<style lang="scss">
  
</style>
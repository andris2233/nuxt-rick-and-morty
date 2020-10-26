<template>
  <div class="episodes">
    <h1 class="episodes__title">
      Episodes
    </h1>
    <div class="episodes__content">
      <VEpisode v-for="episode of episodes"
                :key="episode.id"
                :episode="episode"
                class="episodes__content-item"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VEpisode from '@/components/VEpisode.vue';
import { episode } from '@/api/api';

interface Data {
  episodes: any[],
  totalPages: number,
  currentPage: number,
}

@Component({
  components: {
    VEpisode,
  },
  async asyncData(): Promise<Data> {
    const episodes: any = await episode.getAll();
    return {
      episodes: episodes.results,
      totalPages: episodes.info.pages,
      currentPage: 1,
    };
  }
})
export default class Episodes extends Vue {}
</script>

<style lang="scss" scoped>
  .episodes {
    margin: 0 auto;
    padding: 10px 0;
    &__content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      &-item {
        margin: 0 10px 10px 0;
      }
    }
  }
</style>

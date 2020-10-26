<template>
  <div class="characters">
    <h1 class="characters__title">
      Characters
    </h1>
    <div class="characters__content">
      <VCharacter v-for="character of characters"
                  :key="character.id"
                  :character="character"
                  class="characters__content-item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VCharacter from '@/components/VCharacter.vue';
import { character } from '@/api/api';

interface Data {
  characters: any[],
  totalPages: number,
  currentPage: number,
}

@Component({
  components: {
    VCharacter,
  },
  async asyncData(): Promise<Data> {
    const characters: any = await character.getAll();
    return {
      characters: characters.results,
      totalPages: characters.info.pages,
      currentPage: 1,
    };
  },
  fetchOnServer: true,
})
export default class Characters extends Vue {
};
</script>

<style lang="scss" scoped>
  .characters {
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

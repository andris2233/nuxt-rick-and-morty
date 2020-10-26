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

@Component({
  components: {
    VCharacter,
  },
  data() {
    return {
      characters: [],
      totalPages: 0,
      currentPage: 0,
    };
  },
  async fetch(): Promise<void> {
    const characters: any = await character.getAll();
    this.characters = characters.results;
    this.totalPages = characters.info.pages;
    this.currentPage = 1;
  },
  fetchOnServer: true,
})
export default class Characters extends Vue {
};
</script>

<style lang="scss" scoped>
  .characters {
    margin: 0 auto;
    max-width: 1100px;
    padding: 10px 0;
    &__content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      overflow-y: auto;
      &-item {
        margin: 0 10px 10px 0;
      }
    }
  }
</style>

<template>
  <div class="locations">
    <h1 class="locations__title">
      Locations
    </h1>
    <div class="locations__content">
      <VLocation v-for="location of locations"
                 :key="location.id"
                 :location="location"
                 class="locations__content-item"/>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import VLocation from '@/components/VLocation.vue';
import { location } from '@/api/api';

interface Data {
  locations: any[],
  totalPages: number,
  currentPage: number,
}
@Component({
  components: {
    VLocation,
  },
  async asyncData():Promise<Data> {
    const locations: any = await location.getAll();
    return {
      locations: locations.results,
      totalPages: locations.info.pages,
      currentPage: 1,
    }
  }
})
export default class Locations extends Vue {}
</script>

<style lang="scss" scoped>
  .locations {
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

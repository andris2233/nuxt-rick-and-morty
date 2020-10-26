<template>
  <div class="location">
    <p class="location__name">{{episode.name}}</p>
    <p class="location__type">{{episode.episode}}</p>
    <p class="location__dimension">{{episode.air_date}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    episode: {
      type: Object,
      required: true,
      validator(val: Object) {
        const props: string[] = ['name', 'episode', 'air_date'];
        const isValid: boolean = !!Object.keys(val).find((prop: string) => !props.includes(prop));
        return isValid;
      },
    },
  },
})
export default class VLocation extends Vue {}
</script>

<style lang="scss" scoped>
  .location {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 310px;

    padding: 10px;
    border-radius: 10px;
    background: #333;
    color: #dadada;
    &__name {
      color: rgb(255, 184, 51);
      text-shadow: 0 0 2px #333;
      font-size: 1rem;
    }
  }
</style>

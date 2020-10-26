<template>
  <div class="character">
    <img :src="character.image"
         alt="character"
         class="character__image">
    <p class="character__name">{{character.name}}</p>
    <p class="character__status">{{character.status}}</p>
    <p class="character__gender">{{character.gender}}</p>
    <p class="character__location">{{character.location.name}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    character: {
      type: Object,
      required: true,
      validator(val: Object) {
        const props: string[] = ['name', 'status', 'gender', 'location', 'image'];
        const isValid: boolean = !!Object.keys(val).find((prop: string) => !props.includes(prop));
        return isValid;
      },
    },
  },
})
export default class VCharacter extends Vue {};
</script>

<style lang="scss" scoped>
  .character {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 250px;

    padding: 10px;
    border-radius: 10px;
    background: #333;
    color: #dadada;
    &__image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 3px #ccc;
      margin: 0 auto 10px auto;
    }
    &__name {
      color: rgb(255, 184, 51);
      text-shadow: 0 0 2px #333;
      font-size: 1rem;
    }
  }
</style>

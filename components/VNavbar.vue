<template>
  <nav class="navbar">
    <nuxt-link class="navbar__link"
               active-class="navbar__link-active"
               to="/"
               exact>
      Главная
    </nuxt-link>
    <nuxt-link class="navbar__link"
               active-class="navbar__link-active"
               to="/characters">
      Персонажи
    </nuxt-link>
    <nuxt-link class="navbar__link"
               active-class="navbar__link-active"
               to="/locations">
      Локации
    </nuxt-link>
    <nuxt-link class="navbar__link"
               active-class="navbar__link-active"
               to="/episodes">
      Эпизоды
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class VNavbar extends Vue {

};
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: #333;
    padding: 20px 30px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    &__link {
      margin-right: 35px;
      color: rgb(204, 204, 204);
      text-decoration: none;
      transition: all .3s;
      // &:hover {
      //   color: #fff;
      //   text-shadow: 0 0 5px #fff;
      // }
      &-active, &:hover {
        color: #fff;
        text-shadow: 0 0 5px #fff;
      }
    }
  }
</style>

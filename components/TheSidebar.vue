<template>
  <div class="sidebar">
    <div :class="{ roundRed: user }"></div>
    <NuxtLink
      class="sidebar__link"
      :class="link.route === '/users' && { sidebar__link_active: user }"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
      v-for="link in links"
      :key="link.name"
      :to="link.route"
    >
      {{ link.name }}
    </NuxtLink>
    <button
      class="round"
      :style="{ backgroundImage: `url(${backgroundImageQuestion})` }"
      @click="handleUserHelp"
    ></button>
  </div>
</template>

<script>
import backgroundImagePath from "~/assets/images/subtract.svg";
import backgroundImageQuestion from "~/assets/images/question.svg";

export default {
  name: "TheSidebar",
  data() {
    return {
      backgroundImagePath,
      backgroundImageQuestion,
    };
  },

  methods: {
    handleUserHelp() {
      console.log('Поддержка пользователя')
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    links() {
      return this.$store.getters.links;
    },
  },
};
</script>

<style scoped>
.sidebar {
  padding: 20px 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  max-width: 150px;
  height: 85%;
  border: 3px solid #ccc;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.roundRed {
  border-radius: 50%;
  background-color: red;
  width: 35px;
  height: 35px;
  margin: 0 auto 45px;
}

.round {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: no-repeat center;
  background-size: 36px;
  margin: auto auto 0;
  cursor: pointer;
}

.sidebar__link {
  background: no-repeat center 10px;
  background-size: 36px;
  color: rgba(0, 0, 0, 0.575);
  outline: none;
  text-decoration: none;
  padding: 0;
  margin: 10px auto;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
  line-height: 1.6;
  border-radius: 8px;
  box-sizing: border-box;
}

.sidebar__link_active {
  border: 3px solid rgb(110, 182, 110);
  color: rgb(110, 182, 110);
}

.nuxt-link-active {
  background-color: rgba(214, 214, 214, 0.5);
  color: rgb(83, 35, 35);
}
</style>

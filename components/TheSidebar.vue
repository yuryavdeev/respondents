<template>
  <div class="sidebar">
    <NuxtLink :class="{ round: user }" to="/"></NuxtLink>
    <NuxtLink
      class="sidebar__link"
      :class="link.route === '/users' && { sidebar__link_active: user }"
      :style="{ backgroundImage: `url(${link.url})` }"
      v-for="link in links"
      :key="link.name"
      :to="link.route"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script>
// import backgroundImagePath from "~/assets/images/subtract.svg";

export default {
  name: "TheSidebar",
  data() {
    return {
      // backgroundImagePath,
    };
  },

  methods: {
    handleUserHelp() {
      console.log("Поддержка пользователя");
    },
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
  height: 100vh;
  border: 2px solid #ccc;
  border-top: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.round {
  border-radius: 50%;
  background-color: rgba(77, 255, 145);
  width: 35px;
  height: 35px;
  margin: 0 auto 45px;
}

.sidebar__link {
  background: no-repeat center 10px;
  background-size: 36px;
  color: rgba(0, 0, 0, 0.575);
  text-decoration: none;
  padding: 0;
  margin: 10px auto;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 15px;
  line-height: 1.6;
  border-radius: 8px;
}

.nuxt-link-exact-active {
  background-color: rgba(77, 255, 145, 0.4);
  color: rgb(83, 35, 35);
}
</style>

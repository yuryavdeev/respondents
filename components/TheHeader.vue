<template>
  <div class="header">
    <div class="header__container">
      <input
        class="header__search"
        :style="{ backgroundImage: `url(${backgroundImagePathSearch})` }"
        type="text"
        placeholder="Поиск..."
        v-model="inputValue"
        @input="handleInput"
      />
      <p class="header__user">{{ user }}</p>
    </div>

    <div
      v-if="$store.getters.currentRootPageName && $route.path !== '/'"
      class="header__route"
    >
      <img
        class="header__route-image"
        src="~/assets/images/location.svg"
        alt="текущая страница"
      />
      <NuxtLink
        :to="$store.getters.currentRootRoute"
        class="header__route-caption header__route-link"
        :style="{ backgroundImage: `url(${backgroundImagePath})` }"
      >
        {{ $store.getters.currentRootPageName }}
      </NuxtLink>

      <p
        v-if="$store.getters.currentChildrenPageName"
        class="header__route-caption"
        :style="{ backgroundImage: `url(${backgroundImagePath})` }"
      >
        {{ $store.getters.currentChildrenPageName }}
      </p>
    </div>
  </div>
</template>

<script>
import backgroundImagePath from "~/assets/images/arrow.svg";
import backgroundImagePathSearch from "~/assets/images/find.svg";

export default {
  name: "TheHeader",
  data() {
    return {
      backgroundImagePath,
      backgroundImagePathSearch,
      inputValue: "",
    };
  },

  methods: {
    handleInput() {
      console.log(this.inputValue, "-> Поиск на странице");
    },
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style scoped>
.header__container {
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__search {
  width: 400px;
  height: 28px;
  background: no-repeat 380px center;
  background-size: 25px;
  border: 2px solid #ccc;
  border-radius: 6px;
  outline: none;
  padding: 0 5px;
}

.header__user {
  margin: 0;
}

.header__route {
  height: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.header__route-image {
  height: 21px;
  margin-right: 6px;
}

.header__route-caption {
  background: no-repeat 0px center;
  background-size: 15px;
  padding-left: 20px;
  margin: 0 10px 0 0;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.header__route-link {
  color: rgba(0, 0, 0, 1);
}
</style>

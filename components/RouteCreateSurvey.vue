<template>
  <div class="survey__container">
    <nav class="survey__nav">
      <NuxtLink
        v-for="link in childrenRoutes"
        :key="link.name"
        class="survey__link"
        :to="'/survey/create-survey/' + `${link.route}`"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
    <form class="survey__form">
      <h2 class="survey__form-title">Добавить опрос</h2>
      <!-- FormResponds.vue -> ниже -->
      <NuxtChild />
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateSurvey",
  data() {
    return {
      childrenRoutes: [
        { route: "params", name: "Параметры" },
        { route: "questions", name: "Вопросы" },
        { route: "logic", name: "Логика" },
        { route: "conditions", name: "Условия" },
        { route: "responds", name: "Респонденты" },
      ],
    };
  },

  mounted() {
    this.$store.commit("setCurrentChildrenPageName", {
      currentRootPageName: "Опросы",
      currentChildrenPageName: "Добавить опрос",
      currentRootRoute: '/survey'
    });
  },
};
</script>

<style scoped>
.survey__nav {
  display: flex;
  justify-content: space-around;
}

.survey__link {
  color: green;
  text-decoration: none;
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.6;
}

.nuxt-link-active {
  border-bottom: 2px solid green;
}

.survey__form {
  border: 2px solid rgba(0, 128, 0, 0.4);
  border-radius: 4px;
  padding: 12px 0;
  background-color: #fafafa;
}

.survey__form-title {
  font-size: 14px;
  margin: 0 0 15px 12px;
  color: rgb(122, 122, 122);
  line-height: 1.6;
}
</style>

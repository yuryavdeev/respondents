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
      <h2 class="survey__form_title">Добавить опрос</h2>
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
  color: yellowgreen;
  text-decoration: none;
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.6;
}

.nuxt-link-active {
  border-bottom: 2px solid yellowgreen;
}

.survey__form {
  border: 1px solid rgba(153, 205, 50, 0.3);
  border-radius: 2px;
  padding: 12px;
}

.survey__form_title {
  font-size: 12px;
  margin-top: 0;
  color: #ccc;
  line-height: 1.6;
}
</style>

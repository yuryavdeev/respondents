<template>
  <div>
    <h3>Создание опроса. Условия:</h3>

    <p v-for="condition in conditions" :key="condition.id">
      {{ condition.id }}. {{ condition.title }}.
    </p>
  </div>
</template>

<script>
export default {
  name: "CreateSurveyConditions",

  computed: {
    conditions() {
      return this.$store.getters.initialConditions;
    },
  },
};
</script>

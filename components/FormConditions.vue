<template>
  <div>
    <h3 style="margin-left: 15px;">Создание опроса. Условия:</h3>

    <p v-for="condition in conditions" :key="condition.id" style="margin-left: 25px;">
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

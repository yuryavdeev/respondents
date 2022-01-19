<template>
  <div v-if="error.statusCode === 404">
    <h1>Код ошибки - {{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <hr />
    <NuxtLink to="/">На главную</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "start",
};
</script>

<style scoped>
div {
  margin: 100px auto 0;
}

h1,
h2 {

  color: red;
}
</style>

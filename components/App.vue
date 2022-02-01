<template>
  <div>
    <h1>Главная страница</h1>
    <NuxtLink class="link" to="/survey/create-survey/responds">
      Создать новый опрос
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "App",
  
};
</script>

<style scoped>
.link {
  text-decoration: none;
  font-size: 18px;
  line-height: 1.6;
}
</style>

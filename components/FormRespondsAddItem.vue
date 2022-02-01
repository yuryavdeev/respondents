<template>
  <div class="condition">
    <select
      class="condition__select"
      v-model="selectValue"
      @change="addCondition"
    >
      <option value="" selected disabled>Добавить поле опроса</option>
      <option
        v-for="condition in initialConditions"
        :key="condition.id"
        :value="condition.title"
      >
        {{ condition.title }}
      </option>
    </select>
    <p v-if="messageVisible" class="condition__message">
      Такое поле уже добавлено!
    </p>
  </div>
</template>

<script>
export default {
  name: "RespondsItemEmpty",

  data() {
    return {
      selectValue: "",
      messageVisible: false,
    };
  },

  methods: {
    addCondition() {
      if (
        this.$store.getters.conditions.some((i) => i.title === this.selectValue)
      ) {
        this.selectValue = "";
        this.messageVisible = true;
        setTimeout(() => {
          this.messageVisible = false;
        }, 1000);
      } else {
        this.$store.commit("addCondition", this.selectValue);
        this.selectValue = "";
      }
    },
  },

  computed: {
    initialConditions() {
      return this.$store.getters.initialConditions;
    },
  },
};
</script>

<style scoped>
.condition {
  background-color: rgb(255, 235, 217);
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.condition__select {
  width: 300px;
  height: 26px;
  border: 2px solid #ccc;
  outline: none;
}

.condition__message {
  color: red;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
</style>

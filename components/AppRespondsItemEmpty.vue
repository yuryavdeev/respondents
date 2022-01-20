<template>
  <div class="condition">
    <div class="condition__container">
      <h4 class="condition__title">Условие</h4>
      <div class="condition__container_column">
        <select
          class="condition__select"
          v-model="selectValue"
          @change="addCondition"
        >
          <option value="" selected disabled>Выберите условие</option>
          <option
            v-for="condition in initialConditions"
            :key="condition.id"
            :value="condition.title"
          >
            {{ condition.title }}
          </option>
        </select>

        <button
          class="condition__button_danger"
          type="button"
          @click.prevent="removeCondition"
          :disabled="!selectValue"
        >
          Удалить условие
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RespondsItemEmpty",

  data() {
    return {
      selectValue: "",
    };
  },

  methods: {
    addCondition() {
      if (
        this.$store.getters.conditions.some((i) => i.title === this.selectValue)
      ) {
        this.selectValue = "";
        console.error("Данное условие уже добавлено!");
      } else {
        this.$store.commit("addCondition", this.selectValue);
      }
    },

    removeCondition() {
      const item = this.initialConditions.find(
        (i) => i.title === this.selectValue
      );
      this.$store.commit("removeCondition", item.id);
      this.selectValue = "";
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
  background-color: rgba(241, 255, 212, 0.733);
  padding: 15px 12px 0;
}

.condition__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.condition__container_column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  flex-grow: 22;
  margin-left: 50px;
  max-width: 330px;
}

.condition__title {
  color: rgb(168, 103, 4);
  margin: 0 0 20px 0;
}

.condition__select {
  width: 100%;
  height: 26px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  outline: none;
}

.condition__button_danger {
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid rgb(248, 193, 211);
  background-color: rgba(248, 193, 211, 0.5);
  margin-left: auto;
}
</style>

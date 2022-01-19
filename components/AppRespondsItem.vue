<template>
  <div class="condition">
    <div class="condition__container">
      <div class="condition__container_column">
        <h4 class="condition__title">Условие {{ condition.id }}</h4>
        <p
          class="condition__type"
          v-for="option in condition.options"
          :key="option.number"
        >
          <span
            class="condition__type_span"
            v-if="option.number > 1"
            style="background-color: #cfc"
          >
            или
          </span>
          {{ condition.optionsType }} {{ option.number }}
        </p>
      </div>

      <div class="condition__container_column grow">
        <select class="condition__select" v-model="selectValue">
          <option value="" selected disabled>{{ condition.title }}</option>
          <option
            v-for="option in condition.options"
            :key="option.number"
            :value="`${option.from}-${option.to}`"
          >
            {{ option.from }}-{{ option.to }} лет
          </option>
        </select>

        <div
          class="condition__container"
          v-for="option in condition.options"
          :key="option.number"
        >
          <p class="condition__type">
            от <span class="condition__type_span">{{ option.from }}</span>
          </p>

          <p class="condition__type">
            до <span class="condition__type_span">{{ option.to }}</span>
          </p>
        </div>

        <div class="condition__container">
          <button
            class="condition__button condition__button_succes"
            type="button"
            @click.prevent="changeSelect"
            :disabled="!selectValue"
          >
            + Добавить {{ condition.optionsType.toLowerCase() }}
          </button>
          <button
            class="condition__button condition__button_danger"
            type="button"
            @click.prevent="removeCondition"
          >
            Удалить условие
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RespondsItem",
  emits: ["changeForm"],

  props: {
    condition: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectValue: "",
      form: {},
    };
  },

  methods: {
    changeSelect() {
      this.$emit(
        "changeForm",
        this.$props.condition.fieldName,
        this.selectValue
      );
    },

    removeCondition() {
      this.$store.commit("removeCondition", this.$props.condition.id);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.condition__container {
  display: flex;
  justify-content: space-between;
}

.condition__container_column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}

.grow {
  flex-grow: 22;
  margin-left: 50px;
}

.condition__title {
  color: rgb(168, 103, 4);
  margin-bottom: 20px;
}

.condition__select {
  width: 100%;
  height: 26px;
  margin-bottom: 20px;
}

.condition__type {
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px 20px 0;
}

.condition__type_span {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 3px 20px;
  background-color: rgb(255, 255, 255);
  margin: 0 5px 0;
}

.condition__button {
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  height: 36px;
  box-sizing: border-box;
}

.condition__button_succes {
  border: 2px solid #cfc;
  background-color: rgba(204, 255, 204, 0.3);
}

.condition__button_danger {
  border: 2px solid rgb(248, 193, 211);
  background-color: rgba(248, 193, 211, 0.5);
  margin-left: 20px;
}
</style>

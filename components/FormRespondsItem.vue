<template>
  <div class="condition">
    <div class="condition__container">
      <h4 class="condition__title">Условие {{ currentNumber }}</h4>
      <select
        class="condition__select"
        v-model="mainSelectValue"
        @change="changeSelect"
      >
        <option value="" selected disabled>{{ condition.title }}</option>
        <option
          v-for="option in condition.options"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div v-if="condition.optionsType === 'Диапазон'">
      <div
        class="condition__container"
        v-for="(option, i) in condition.options"
        :key="option"
      >
        <p class="condition__type">
          <span class="condition__type_span" v-if="i > 0">или</span>
          {{ condition.optionsType }} {{ i + 1 }}
        </p>
        <div class="condition__container condition__container_min">
          <div class="condition__option">
            от
            <div class="condition__option-box">
              <p v-if="option === valueSelected">
                {{ valueSelected.split("-")[0] }}
              </p>
            </div>
          </div>

          <div class="condition__option">
            до
            <div class="condition__option-box">
              <p v-if="option === valueSelected">
                {{ valueSelected.split("-")[1] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="condition__container">
      <p class="condition__type">{{ condition.optionsType }} 1</p>
      <select
        style="width: 60%"
        class="condition__select"
        v-model="valueSelected"
        @change="changeSelect"
      >
        <option
          v-for="option in condition.options"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <div class="condition__container condition__container_min">
      <button
        :class="{ condition__button_cursor: !valueSelected }"
        class="condition__button condition__button_succes"
        type="button"
        @click.prevent="addValue"
        :disabled="!valueSelected"
      >
        Добавить {{ condition.optionsType.toLowerCase() }}
      </button>
      <button
        class="condition__button condition__button_danger"
        type="button"
        @click.prevent="removeCondition"
      >
        Удалить условие
      </button>
    </div>

    <span v-if="visibleAnd" class="condition__type_span condition__span_shift">
      и
    </span>
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
    conditionsLength: Number,
    currentNumber: Number,
  },

  data() {
    return {
      mainSelectValue: "",
      valueSelected: "",
      visibleAnd: this.$props.currentNumber !== this.$props.conditionsLength,
    };
  },

  methods: {
    changeSelect(e) {
      this.valueSelected = e.target.value;
      this.mainSelectValue = "";
    },

    addValue() {
      this.$emit(
        "changeForm",
        this.$props.condition.title,
        this.valueSelected
      );
      this.valueSelected = "";
    },

    removeCondition() {
      this.$store.commit("removeCondition", this.$props.condition.id);
    },
  },

  watch: {
    conditionsLength(newVal) {
      this.visibleAnd = this.$props.currentNumber !== newVal;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.condition {
  border-bottom: 1px solid rgba(0, 128, 0, 0.4);
  background-color: rgb(223, 243, 255);
  padding: 15px 12px 0;
  display: flex;
  flex-direction: column;
}

.condition__container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}

.condition__container_min {
  max-width: 350px;
  justify-content: flex-start;
  margin-left: auto;
}

.condition__title {
  color: darkgreen;
  margin-bottom: 15px;
}

.condition__type {
  margin: 0;
  font-weight: bold;
}

.condition__type_span {
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fafafa;
  margin-right: 5px;
  padding: 3px;
  font-size: 16px;
  font-weight: bold;
}

.condition__span_shift {
  width: 18px;
  position: relative;
  top: 14px;
  text-align: center;
}

.condition__select {
  width: 350px;
  height: 26px;
  border: 2px solid #ccc;
  outline: none;
}

.condition__option {
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
}

.condition__option-box {
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fafafa;
  margin: 0 5px;
  width: 60px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.condition__button {
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 20px;
}

.condition__button_cursor {
  cursor: auto;
}

.condition__button_succes {
  border: 2px solid rgba(105, 177, 105, 0.5);
  background-color: rgba(204, 255, 204, 0.75);
}

.condition__button_danger {
  border: 2px solid rgb(248, 193, 211);
  background-color: rgba(248, 193, 211, 0.5);
  margin-left: auto;
}
</style>

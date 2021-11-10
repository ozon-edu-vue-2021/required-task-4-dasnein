<template>
  <div v-click-outside="onBlur">
    <label v-if="label" :for="name" class="form-label text-secondary">{{
      label
    }}</label>
    <input
      :name="name"
      :id="name"
      type="text"
      class="form-control"
      autocomplete="off"
      @focus="onFocus"
      v-model="searchText"
      @input="onInput"
    />
    <div class="list-group" :class="{ 'd-none': !isOptionsVisible }">
      <a
        v-for="(option, i) in filteredOptions"
        :key="`${option.name}-option-${i}`"
        href="#"
        class="list-group-item list-group-item-action"
        @click.prevent="onSelect(option)"
      >
        {{ option.text }}
      </a>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  name: "SelectSearch",

  props: {
    label: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isOptionsVisible: false,
      searchText: "",
      optionsFilter: "",
    };
  },

  computed: {
    val: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
    filteredOptions() {
      return this.options.filter((option) =>
        option.text.toLowerCase().includes(this.optionsFilter.toLowerCase())
      );
    },
  },

  methods: {
    onFocus() {
      this.isOptionsVisible = true;
    },
    onBlur() {
      this.isOptionsVisible = false;
    },
    onInput: debounce(function () {
      this.optionsFilter = this.searchText;
    }, 500),
    onSelect({ value, text }) {
      this.$emit("input", value);
      this.searchText = text;
      this.optionsFilter = "";
      this.isOptionsVisible = false;
    },
  },

  created() {
    if (this.value) {
      this.searchText = this.value;
    }
  },
};
</script>

<style lang="scss" scoped>
.col-5 {
  position: relative;

  .list-group {
    position: absolute;
    top: 100%;
    right: calc(var(--bs-gutter-x) * 0.5);
    left: calc(var(--bs-gutter-x) * 0.5);
    max-height: 200px;
    overflow-y: scroll;
    border: 1px solid #ccc;
  }
}
</style>

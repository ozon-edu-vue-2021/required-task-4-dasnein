<template>
  <div>
    <label v-if="label" :for="name" class="form-label text-secondary">
      {{ label }}
    </label>
    <select v-model="val" class="form-select" :id="name" :name="name">
      <option
        v-for="(option, i) in options"
        :key="`${name}-option-${i}`"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectDropdown",

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
    },
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
  },
};
</script>

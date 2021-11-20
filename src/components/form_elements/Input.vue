<template>
  <div>
    <label v-if="label" :for="name" class="form-label text-secondary">
      {{ label }}
    </label>
    <input
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      class="form-control"
      :class="{ 'border-danger': invalid }"
      v-model="val"
    />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
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

<style scoped>
input[type="date"] {
  position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-position: right center;
  background-size: auto 75%;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: auto;
  width: auto;
}
</style>

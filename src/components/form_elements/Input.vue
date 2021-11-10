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
      v-model="val"
    />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
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

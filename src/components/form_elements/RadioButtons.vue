<template>
  <div class="col-12">
    <div
      v-for="(option, i) in options"
      :key="`${name}-${i}`"
      class="form-check form-check-inline"
    >
      <input
        class="form-check-input"
        type="radio"
        :name="name"
        :id="`id-${name}-${i}`"
        :value="option.value"
        v-model="val"
      />
      <label class="form-check-label" :for="`id-${name}-${i}`">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButtons",

  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Number, String],
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

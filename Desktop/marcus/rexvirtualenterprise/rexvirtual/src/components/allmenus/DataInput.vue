<template>
  <div class="input-box">
    <input
      class="clear"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      value: this.initial || "",
    };
  },
  props: {
    inputType: String,
    placeholder: String,
    initial: String,
    modelValue: String,
  },
};
</script>

<style scoped>
input {
  padding: 0.6em 1em;
  border: 2px solid #306060;
  border-radius: 8px;
  margin: 0.3em 0 0em;
  /* font-size: 1.2em; */
  width: 100%;
}
input:focus {
  border: 2px solid #3b50df;
  outline: none;
}
@media screen and (max-width: 768px) {
  input {
    padding: 0.4em 1em;
    margin: 0.1em 0 0em;
  }
  label {
    margin-bottom: 0px !important;
  }
}
</style>

<template>
  <div class="butn" :class="appear">
    <button
      class="dbutton"
      @click="$emit('on-clicked', $event)"
      :loading="loading"
    >
      <span v-if="!loading">{{ value }}</span>
      <span v-else><btnLoader /></span>
    </button>
    <!-- <img
      src="@/assets/loaderImage8.png"
      alt="image"
      width="17"
      height="17"
      v-else
    /> -->
  </div>
</template>

<script>
import btnLoader from "./btnloader.vue";
export default {
  name: "dbutton",
  components: { btnLoader },

  props: {
    value: String,
    appear: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
.butn button {
  margin: 2px;
  background: none;
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-family: inherit;
  font-size: 80%;
  cursor: pointer;
  text-align: center;
}
.primary button {
  background-color: var(--main-color);
  color: #fdfffc;
  text-align: center;
  font-weight: bold;
  padding: 0.5em 3em;
  font-size: 13px;
}
.primary:hover button {
  background-color: var(--hover-btn);
}

.btnn button {
  display: inline-block;
  background: linear-gradient(117.57deg, #ffb7ff 15.67%, #7a29ff 80.01%);
  box-shadow: inset 4px 3px 4px rgba(0, 0, 0, 0.11),
    inset -1px -2px 5px rgba(255, 255, 255, 0.44);
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 30px;
  margin: 30px 0;
  border-radius: 30px;
  transition: background 0.5s;
  border: 1px solid #5e4dab;
}
.btnn button:hover {
  background: #fff;
  color: #5e4dab;
  border: 1px solid #5e4dab;
}
.secondary button {
  background-color: rgb(189, 66, 66);
  color: #fff;
  text-align: center;
  padding: 5px 10px 5px 5px;
}
.tertiary button {
  border: solid 2px;
  color: #fff;
  font-size: 12px;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  font-weight: bold;
}
@media only screen and (max-width: 768px) {
  .btnn button {
    padding: 6px 12px;
  }
}
</style>
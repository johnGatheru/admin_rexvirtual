<template>
  <div class="over-lay" :class="appear">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    appear: String,
  },
};
</script>

<style scoped>
.over-lay {
  overflow: visible;
  position: absolute;
  z-index: 1;
  width: max-content;
  padding: 2em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 37px 16px rgba(0, 0, 0, 0.3);
  left: 25%;
  top: 15%;
}
.top {
  min-width: 50%;
  overflow: visible;
  top: 5%;
}
.bot {
  width: 55vw;
  position: fixed;
  top: 40% !important;
}
.terminal {
  top: 40% !important;
  width: 44vw;
  position: fixed;
}
</style>
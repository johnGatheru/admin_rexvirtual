<template></template>

<script>
export default {};
</script>

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #e74c3c 51%,
    #000000 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
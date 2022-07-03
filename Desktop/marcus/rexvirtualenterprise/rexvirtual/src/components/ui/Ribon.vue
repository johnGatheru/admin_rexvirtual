<template>
  <div class="ribbon">
    <div class="ribbon-stitches-top"></div>
    <div class="ribbon-content">
      <p><b>CS Ribbon Preview</b></p>
    </div>
    <div class="ribbon-stitches-bottom"></div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.ribbon {
  width: 300px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  text-align: center;
  font-size: 20px !important;
  background: #d64b4b;
  background: linear-gradient(to bottom, #d64b4b, #ab2c2c);
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 1px;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.ribbon p {
  font-size: 25px !important;
  color: #801111;
  text-shadow: #d65c5c 0 1px 0;
  margin: 0px;
  padding: 15px 10px;
}

.ribbon:before,
.ribbon:after {
  content: "";
  position: absolute;
  display: block;
  bottom: -1em;
  border: 1.5em solid #c23a3a;
  z-index: -1;
}

.ribbon:before {
  left: -2em;
  border-right-width: 1.5em;
  border-left-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
}

.ribbon:after {
  right: -2em;
  border-left-width: 1.5em;
  border-right-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.4) -1px 1px 1px;
}

.ribbon .ribbon-content:before,
.ribbon .ribbon-content:after {
  border-color: #871616 transparent transparent transparent;
  position: absolute;
  display: block;
  border-style: solid;
  bottom: -1em;
  content: "";
}

.ribbon .ribbon-content:before {
  left: 0;
  border-width: 1em 0 0 1em;
}

.ribbon .ribbon-content:after {
  right: 0;
  border-width: 1em 1em 0 0;
}

.ribbon-stitches-top {
  margin-top: 2px;
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
}

.ribbon-stitches-bottom {
  margin-bottom: 2px;
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.3);
}
</style>
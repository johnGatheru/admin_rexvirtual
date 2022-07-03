<script setup>
</script>

<template>
  <div class="large-container">
    <div class="small-container">
      <div class="row-home">
        <div class="col-2">
          <h1>RexVirtual Enterprise A Cloud Based!</h1>
          <p>
            Rexvirtual Enterprise is a business providing cloud based solutions
            for small and medium enterprises. We provide data entry & virtual
            administration, Customer Support, Data Integration and Analytics,
            Email and Social media Management, Graphic designs services to our
            clients. Our focus is to offer businesses affordable and quality
            services so that they could gain the benefit of minimizing costs of
            hiring staffs and work space by outsourcing work to us. We focus on
            modern technology to ensure our clients have the best products and
            services they need to run their business.
          </p>
          <dbutton
            appear="btnn"
            value="Get Hired &#8599;"
            @click="goToGethired()"
          />
        </div>
        <div class="col-2">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="item active">
                <img
                  src="../assets/images/3dimage22.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3 class="init">Get hired for...</h3>
                </div>
              </div>
              <div class="item">
                <img
                  src="../assets/images/3dimage33.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3>Data entry</h3>
                </div>
              </div>

              <div class="item">
                <img
                  src="../assets/images/3dimage44.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3>Graphic Designs</h3>
                </div>
              </div>
              <div class="item">
                <img
                  src="../assets/images/3dimage66.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3>Customer Support</h3>
                </div>
              </div>
              <div class="item">
                <img
                  src="../assets/images/3dimage1.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3>Data Integration and Analysis</h3>
                </div>
              </div>
              <div class="item">
                <img
                  src="../assets/images/3dimage55.png"
                  alt=""
                  style="margin-top: 7px"
                />
                <div class="carousel-caption">
                  <h3>Email and Social Media Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- offer div  -->
    <div class="offer">
      <span1>Our Testimonials</span1>
      <!-- <div class="small-container"> -->
      <!-- <div><h3 style="text-align:center;">Our Testimonials</h3></div> -->
      <div class="row-home-carousel">
        <div class="col-2">
          <img
            src="../assets/images/tesmonial1.png"
            id="testimonial-img"
            class="offer-img"
          />
        </div>
        <div class="col-carousel">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <div class="carousel-inner">
              <div class="item active">
                <div class="carousel-desc">
                  <img
                    src="../assets/images/white-double-quotes.png"
                    style="width: 70px"
                    alt=""
                  /><br />
                  At Rexvirtual Enterprise they believe in building a meaningful
                  workplace where every employee plays an integral role. im
                  passionate about getting quality service from the company
                  since i engaged them in my business.

                  <br />
                  <br />
                  <p>Joyce Tom ~ Tom Foundations</p>
                </div>
              </div>

              <div class="item">
                <div class="carousel-desc">
                  <img
                    src="../assets/images/white-double-quotes.png"
                    style="width: 70px"
                    alt=""
                  /><br />
                  im glad to be working at Rexvirtual enterprise where i get a
                  chance to exercise what im good in. Thanks @Rex for offering
                  me the opportunity to work for you.
                  <br />
                  <br />
                  <p>Joe Dill ~ Rexvirtual employee</p>
                </div>
              </div>

              <div class="item">
                <div class="carousel-desc">
                  <img
                    src="../assets/images/white-double-quotes.png"
                    style="width: 70px"
                    alt=""
                  /><br />
                  It has been a great experience working at Rexvirtual at my
                  comfort. I have been appreciated by the company many times
                  than i can remember. Im glad to be part of the great team.
                  <br />
                  <br />
                  <p>Sean phills ~ Rexvirtual employee</p>
                </div>
              </div>
            </div>
            <div class="owl-dots">
              <button role="button" class="owl-dot">
                <span></span>
              </button>
              <button role="button" class="owl-dot">
                <span></span>
              </button>
              <button role="button" class="owl-dot">
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end offer div  -->
</template>
<script>
import dbutton from "../components/ui/dbutton.vue";
export default {
  components: { dbutton },
  methods: {
    goToGethired() {
      this.$router.push("/Gethired");
    },
  },
};
</script>
<style scoped>
.btn {
  margin-left: 8em;
  margin-top: 4em;
}
.row-home .col-2 p {
  color: #000;
}
.carousel-desc p {
  color: #fff;
  font-style: italic;
}
@media only screen and (max-width: 768px) {
  h3 {
    font-size: 13px !important;
  }
  .col-2 h1 {
    font-size: 18px !important;
  }
  .item img {
    width: 200px !important;
  }
  .carousel-desc img {
    width: 35px !important;
  }
}
.item img {
  width: 400px;
}
.col-carousel .carousel-inner {
  min-height: 212px;
}
</style>

<template>
  <div class="about-page">
    <section id="about-top">
      <div class="container2">
        <div class="col-2">
          <div class="hero-content">
            <div class="hero-content-heading">
              <h3 class="heading">
                Rexvirtual Enterprise Inspiring you with opportunities and
                solutions to grow your business.
              </h3>
            </div>
            <div class="text-content">
              We provides clients with a secure, highly scalable human
              technology workforce that is available on demand. Rex approach
              combines secure snippet technology with access to over 100 data
              entry specialists to efficiently break down your confidential
              data. The result? Efficient data transformation that is guaranteed
              to be 100% accurate and 100% secure.
            </div>
            <dbutton
              appear="btnn"
              value="Get Hired &#8599;"
              @click="gotoGethired()"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <h3 class="section-title">Core Values</h3>
        <div class="container-statements">
          <div class="container-services-items">
            <div class="card-title">Vision</div>
            <div class="card-desc">
              Our aim is to be the one-stop provider in IT services and
              solutions to small business and our clients globally.
            </div>
          </div>
          <div class="container-services-items">
            <div class="card-title">Mission</div>
            <div class="card-desc">
              We aim to promote, organize and administer innovative and
              accessible IT solutions in order to afford our clients the
              opportunity to grow in their business.
            </div>
          </div>
        </div>
        <!-- <h3 class="section-title">Our Services</h3>       -->
      </div>
    </section>
    <h3 class="section-title" style="text-align: center">Our Services</h3>
    <div class="container3">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img
              src="../assets/images/graphic-des.png"
              style="margin-left: 30px"
              alt=""
            />
            <h3>Graphic Designs</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              At Rexvirtual Enterprise we hire qualified professionals who can
              makes cool graphics design which fits customers desire.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img
              src="../assets/images/dataentry.png"
              style="margin-left: 30px"
              alt=""
            />
            <h3>Customer Support</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              It is our aim as online it experts to offer customer support to
              small and large businesses who need to maintain good relations
              with their customers.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src="../assets/images/figma1.png" alt="" />
            <h3>UI/UX Designs</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              We are entitled to delivering competitive UI and UX designs.
              Therefore, its our target to get the best designers. .
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container3" style="margin-top: -80px">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img
              src="../assets/images/data-integration.png"
              style="margin-left: 80px"
              alt=""
            />
            <h3>Data integration and analysis</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              We commit ourselves in analysing our customers data through the
              best tools that we provide. Our employees are only expected to
              learn how to use them when they are hired.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img
              src="../assets/images/dataentry.png"
              style="margin-left: 110px"
              alt=""
            />
            <h3>Data entry and virtual administration</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              We have the mandate of handling our clients data and transform it
              to fit their needs. Our employees are required to know how to
              interact with the data where they will be given the ways to handle
              it.
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img
              src="../assets/images/social.png"
              style="margin-left: 110px"
              alt=""
            />
            <h3>Email and social media management</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Social media platforms are sources of some customers thus the need
              to handle them in the right manner. That is why we hire
              professionals to manage them on the behave of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dbutton from "../components/ui/dbutton.vue";

export default {
  components: { dbutton },
  methods: {
    gotoGethired() {
      this.$router.push("/Gethired");
    },
  },
};
</script>


<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>

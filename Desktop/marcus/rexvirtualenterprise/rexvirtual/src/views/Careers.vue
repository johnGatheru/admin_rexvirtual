<template>
  <div class="main-career">
    <div class="top-bar">
      <div class="my-links">
        <div class="hire"><RouterLink to="/HomeView">Home</RouterLink></div>
        <div class="verticalLine vertical-line"></div>
        <div class="hire"><a href="">Careers</a></div>
      </div>
    </div>
    <RouterView />
    <div class="border-bottom-bar"></div>
    <div class="container1">
      <div class="org-info">
        <h3 class="desc-title">Get to know more about us...!!!</h3>
        <div class="text-description1">
          At Virtual Enterprise we believe in building a meaningful workplace
          where every employee plays an integral role. Our clients are the heart
          of everything we do.We are extremely passionate about getting new
          products and services to the market quickly, and making life easy for
          our customers while remaining reliable and transparent.
        </div>
        <h3 class="desc-title">
          We are glad and happy to work here. so will you?
        </h3>
        <div class="text-description">
          We strive to push through frontlers in everything we do and nothing
          would make us happier than to have you join us a team that promises
          you career growth in an innovative, friendly and collaborative
          environment.
        </div>

        <div class="cad-items">
          <h3 class="desc-title" style="text-align: center">Team:</h3>
          <div class="card-desc" style="font-size: 13px">
            Virtual Enterprise team we are excited to invites you to be part of
            our innovative team. We appreciate the importance of collaborations
            and cooperation in achieving our goals. We also commit to continuous
            improvement in ourselves, products, services, processes and the way
            we do things technologically.
          </div>
        </div>
      </div>
      <div class="glass">
        <div class="glass-description">
          <h3 class="glass-title">Our Articles</h3>
          <ul id="article">
            <li>Graphics Design</li>
          </ul>
          <ul id="article">
            <li>Data Entry</li>
          </ul>
          <ul id="article">
            <li>Data Integration</li>
          </ul>
          <ul id="article">
            <li>UI/UX Design</li>
          </ul>
          <ul id="article">
            <li>Customer Support</li>
          </ul>
          <ul id="article">
            <li>Email and Social Media Management</li>
          </ul>
          <dbutton
            appear="btnn"
            value="More details  &#8599;"
            @click="gotoAbout()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dbutton from "../components/ui/dbutton.vue";
export default {
  components: {
    dbutton,
  },
  methods: {
    gotoAbout() {
      this.$router.push("/AboutView");
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="main">
    <div class="nav">
      <div class="logo">
        <img src="../assets/images/logo_final.svg" alt="" />
      </div>

      <div v-if="menus" class="routes">
        <RouterLink to="/HomeView" class="links">Home</RouterLink>
        <RouterLink to="/AboutView" class="links">About Us</RouterLink>
        <RouterLink to="/Gethired" class="links">Get Hired</RouterLink>
        <RouterLink to="/Careers" class="links">Careers</RouterLink>
        <RouterLink to="/Contact" class="links">Contact Us</RouterLink>
      </div>

      <div class="image">
        <img
          v-if="!menus"
          src="../assets/images/menubar.png"
          class="menu-icon"
          @click="toggle()"
        />
      </div>
    </div>
    <Transition name="slide-fade">
      <div v-if="routes" class="routes-col">
        <RouterLink to="/HomeView" class="links" @click="routes = false"
          >Home</RouterLink
        >
        <RouterLink to="/AboutView" class="links" @click="routes = false"
          >About Us</RouterLink
        >
        <RouterLink to="/Gethired" class="links" @click="routes = false"
          >Get Hired</RouterLink
        >
        <RouterLink to="/Careers" class="links" @click="routes = false"
          >Careers</RouterLink
        >
        <RouterLink to="/Contact" class="links" @click="routes = false"
          >Contact Us</RouterLink
        >
      </div>
    </Transition>

    <div class="content">
      <RouterView />
    </div>
    <div class="footer-item">
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col-1">
              <div class="address">
                <h4>Site Map</h4>

                <RouterLink to="/HomeView" class="links">Home</RouterLink>
                <RouterLink to="/AboutView" class="links">About Us</RouterLink>
                <RouterLink to="/Gethired" class="links">Get Hired</RouterLink>
                <RouterLink to="/Careers" class="links">Careers</RouterLink>
                <RouterLink to="/Contact" class="links">Contact Us</RouterLink>
              </div>
            </div>
            <div class="footer-col-2">
              <div class="address">
                <h4>Business Solutions</h4>
                <p>
                  Data Entry
                  <br />
                  Graphic Designs
                  <br />
                  Data Integration
                  <br />
                  Customer Support
                  <br />
                  Email and Social Media Management
                </p>
              </div>
            </div>
            <!-- <div class="footer-col-3">
              <div class="address">
                <h4>Useful Links</h4>
                <ul>
                  <li class="foot-links-item">
                    <a href="" class="link-text">Blog Post</a>
                  </li>
                </ul>
              </div>
            </div> -->
            <div class="footer-col-4">
              <div class="address">
                <h4>Follow Us</h4>
                <ul>
                  <li class="foot-links-item">
                    <a href="/facebook" class="link-text">Facebook</a>
                  </li>
                  <li class="foot-links-item">
                    <a href="/twitter" class="link-text">Twitter</a>
                  </li>
                  <FooterMenu />
                  <li class="foot-links-item">
                    <a href="/instagram" class="link-text">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright">
            <div class="with-love">Rexvirtualenterprise &nbsp;</div>
            <div class="copy">&copy; 2022 &nbsp;</div>
            <div class="rights">All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  data() {
    return {
      routes: null,
      windowWidth: null,
      menus: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggle() {
      this.routes = !this.routes;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.menus = false;
        return;
      }
      this.routes = false;
      this.menus = true;
    },
  },
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.routes {
  margin-left: auto;
  margin-right: 30px;
}
.nav {
  display: flex;
  background-color: #5e4dab;
  min-height: 10vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  z-index: 98;
  position: fixed;
  width: 100%;
  top: 0;
  overflow: hidden;
}
.routes a {
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  color: #fff;
}
.routes a.router-link-exact-active {
  color: #f57dba;
  border-radius: 10px;
  text-decoration: underline;
  /* background: linear-gradient(145deg, #b7a2b3, #d9c1d5); */
}
.routes a:hover {
  color: #eeb7d2;
}

.routes-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-right: 1em; */
  margin-left: auto;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  /* position: fixed; */
  z-index: 97;
  overflow: hidden;
  padding-top: 10vh;
  background: #5e4dab;
  width: 100%;
  margin-right: 10px;
}
.content {
  margin-top: 10vh;
}
.links {
  align-items: flex-end;
}
@media only screen and (max-width: 768px) {
  .logo img {
    width: 75px;
    margin-left: 10px;
  }
  .menu-icon {
    margin-left: auto;
    right: 0;
    position: absolute;
    margin-right: 1em;
  }
  .content {
    margin-top: 0px;
  }
  .routes-col {
    font-weight: bold;
    color: #fff;
    padding: 2px 4px;
    position: fixed;
    margin-top: 10vh;
  }
  .nav {
    position: sticky;
  }
  .routes-col .links {
    border-bottom: 0.2px solid;
    padding: 0.3em 0.2em;
  }
  .footer .container {
    padding-left: 0px;
    padding-right: 0px;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
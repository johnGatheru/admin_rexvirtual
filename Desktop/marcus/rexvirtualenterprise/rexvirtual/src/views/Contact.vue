<template>
  <div class="main-contact">
    <section class="contact-top-bar">
      <div class="contact-links">
        <div class="hire"><RouterLink to="/HomeView">Home</RouterLink></div>
        <div class="verticalLine vertical-line"></div>
        <div class="hire"><a href="">Contact us</a></div>
      </div>
      <RouterView />
      <div class="talk-to-us"><h1>Contact Us</h1></div>
    </section>
    <section class="contact-form">
      <div class="wrap">
        <div class="right-side">
          <div class="display-table">
            <div class="vertical-align">
              <!-- <div class="address">
                <h4>MPESA Paybill</h4>
                <p>4566262</p>
              </div> -->
              <div class="address">
                <h4>Business Hours</h4>
                <p>
                  Mondays - Fridays 8.00am to 4.00pm
                  <br />
                  Suturdays - 8.00am to 12.00pm
                  <br />
                  Sundays & Public Holidays - Closed
                </p>
              </div>

              <div class="address">
                <h4>E-mail</h4>
                <p>
                  <a href="mailto:hello@virtualenterprise.co.ke"
                    >hello@rexvirtualenterprise.co.ke</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="left-side">
          <div class="banner-form-wrapper">
            <h4>Get in touch for questions, comments, or concerns.</h4>
            <div class="banner-form-wrapper">
              <div class="form-message">
                <div></div>

                <div class="form_group">
                  <label for="lname" class="frm-label">Name</label>
                  <DataInput v-model="name" placeholder="John Doe" />
                </div>
                <div class="form_group">
                  <label for="lname" class="frm-label">Email</label>
                  <DataInput v-model="email" placeholder="Example@gmail.com" />
                </div>
                <div class="form_group">
                  <label for="lname" class="frm-label">Phone Number</label>
                  <DataInput
                    v-model="phoneNumber"
                    placeholder="+5779865014"
                    inputType="Number"
                  />
                </div>

                <div class="form_group">
                  <textarea
                    v-model="textMessage"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div class="form_group-btn">
                  <dbutton
                    appear="primary"
                    value="Send"
                    @click="sendData()"
                    :loading="isSubmitloading"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Transition name="slide-fade">
      <PopCard v-if="PopCard" appear="terminal">
        <dbutton
          appear="delete"
          value="Exit"
          class="exit"
          @click="PopCard = false"
        />
        <div class="image">
          <img
            src="@/assets/images/succes.jpg"
            alt="success"
            style="width: 10em"
          />
        </div>
        <div class="sent"><p>Success</p></div>
        <div class="success">
          <p>
            Thank you for contacting Rexvirtualenterprise we will get back to
            you shortly 🙏
          </p>
        </div>
      </PopCard>
    </Transition>
    <Transition name="slide-fade">
      <PopCard v-if="PopCard2" appear="bot"
        ><dbutton
          appear="delete"
          value="Exit"
          class="exit"
          @click="PopCard2 = false"
        />
        <p class="please">Please fill all fields...</p>
      </PopCard>
    </Transition>
  </div>
</template>

<script>
import axios from "axios";
import DataInput from "../components/allmenus/DataInput.vue";
import dbutton from "../components/ui/dbutton.vue";
import PopCard from "../components/ui/PopCard.vue";
export default {
  components: {
    dbutton,
    DataInput,
    PopCard,
  },
  data() {
    return {
      isSubmitloading: false,
      PopCard2: false,
      PopCard: false,
      email: "",
      phoneNumber: "",
      textMessage: "",
      name: "",
    };
  },
  methods: {
    sendData() {
      if (
        !this.name == "" &&
        !this.textMessage == "" &&
        !this.email == "" &&
        !this.phoneNumber == ""
      ) {
        let obj = {
          name: this.name,

          phone_number: Number(this.phoneNumber),
          email: this.email,
          message: this.textMessage,
        };
        this.isSubmitloading = true;
        try {
          axios
            .post("https://api.rexvirtualenterprise.com/messages", obj)
            .then((resp) => {
              if (resp.status == 201) {
                this.PopCard = true;
                this.isSubmitloading = false;
                (this.email = ""),
                  (this.textMessage = ""),
                  (this.phoneNumber = ""),
                  (this.name = "");
              }
              // console.log(resp.status);
            });
        } catch (error) {
          console.log("error", error);
        }
      } else {
        this.PopCard2 = true;
      }
    },
  },
};
</script>

<style scoped>
textarea:focus {
  outline: none;
  border-color: var(--main-color);
}
textarea {
  margin-top: 1em;
  padding: 5px;
}
.frm-label {
  display: flex;
  justify-content: start;
  margin: 3px 0px;
}
.form_group ::v-deep(::placeholder) {
  color: rgb(202, 202, 204);
}
.form_group {
  margin-bottom: 15px;
}
.exit {
  display: flex;
  flex-direction: flex-end;
  position: absolute;
  right: 1em;
  top: 1em;
  color: red;
  font-weight: bold;

  border-radius: 5px;
  padding: 1px 6px;
  background: rgb(202, 202, 204);
}
.success p {
  color: #000;
  font-weight: 500;
  justify-content: center;
  display: flex;
}
.image {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.sent p {
  color: green;
  font-weight: bold;
  font-size: 24px;
  justify-content: center;
}

.please {
  font-weight: bold;
  font-size: 13px;
  color: red;
  margin-top: 2em;
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(150px);
  opacity: 0;
}
</style>
<template>
  <div class="main-gethired">
    <div class="topbar">
      <div class="mylinks">
        <div class="hire"><RouterLink to="/HomeView">Home</RouterLink></div>
        <div class="verticalLine vertical-line"></div>
        <div class="hire"><a href="">Get Hired</a></div>
      </div>
      <RouterView />
    </div>
    <section id="subscribe">
      <div class="sub-form">
        <h2 class="sub-heading">Want to be part of virtual enterprise?</h2>
        <div class="center">
          <p>
            Don't hesitate, fill the form below and complete KYC verification to
            apply for your suitable job.
          </p>
        </div>

        <div class="form">
          <div class="frm-group">
            <label for="job" class="frm-label">Choose job title</label>
            <br />
            <select v-model="selected">
              <option disabled value="">
                Please Select the Job that You are Applying for
              </option>
              <option>Data Entry & Virtual Administration</option>
              <option>Email & Social Media Management</option>
              <option>Customer Support</option>
              <option>Graphic Designs</option>
              <option>Data Integration and Analysis</option>
              <option>UI/UX Designs</option>
            </select>
            <br />
          </div>
          <label for="fname" class="frm-label">Name</label><br />
          <DataInput placeholder="Enter Full Names" v-model="name" />

          <br />

          <label for="phoneNumber" class="frm-label">Phone Number</label>
          <DataInput
            placeholder="Enter Phone Number"
            v-model="phoneNumber"
            inputType="Number"
          />
          <br />

          <label for="email" class="frm-label">Email</label><br />
          <DataInput placeholder="Enter Your Email" v-model="email" />

          <br />
          <input
            multiple
            style="display: none"
            type="file"
            placeholder="strategy name"
            class="input-text2"
            @change="onFileSelected"
            ref="files"
          />
          <label for="cv" class="frm-label"
            >Upload Your Tertiary Level Documents eg; Degree, Diploma,
            Transcripts</label
          >
          <div class="uploaded">
            <button class="button" @click="$refs.files.click()">
              Upload Documents
            </button>
            <div
              :class="`upload-data ${file.invalidMessage && 'danger-color'}`"
              v-for="(file, index) in files"
              :key="index"
            >
              <div class="left">
                <div class="">{{ file.name }}</div>
              </div>
              <div class="right">
                <div
                  class="red"
                  @click.prevent="
                    files.splice(index, 1);
                    uploadFiles.splice(index, 1);
                  "
                >
                  <button>remove</button>
                </div>
              </div>
              <span v-if="file.invalidMessage"
                >&nbsp;-{{ file.invalidMessage }}</span
              >
            </div>
          </div>
          <!-- <dbutton
            appear="secondary"
            value="send "
            class="button"
            :loading="isUploadLoading"
            @click="onUpload"
          /> -->
          <input
            style="display: none"
            type="file"
            placeholder="strategy name"
            class="input-text2"
            @change="onFileSelect"
            ref="fileInput"
          />
          <br />

          <label for="selfie" class="frm-label"
            >Upload Your Selfie Holding National ID or Passport for KYC
            verification</label
          >
          <div class="uploaded">
            <button class="button" @click="$refs.fileInput.click()">
              upload file
            </button>
            {{
              selectedSelfie !== null
                ? selectedSelfie.name
                : "upload selfie holding ID/Passport"
            }}
          </div>
          <br />
          <input
            style="display: none"
            type="file"
            placeholder="strategy name"
            class="input-text2"
            @change="onFileSelectId"
            ref="fileInputId"
          />
          <label for="selfie" class="frm-label"
            >Upload Your National ID or Passport
          </label>
          <div class="uploaded">
            <button class="button" @click="$refs.fileInputId.click()">
              upload file
            </button>
            {{ selectedId !== null ? selectedId.name : "upload ID/Passport" }}
          </div>
          <br />
          <div class="buton-send">
            <dbutton
              appear="primary"
              value="Submit"
              :loading="isUploadLoading"
              @click="onUpload"
            />
          </div>
        </div>
      </div>
      <div class="gapp" style="height: 3em"></div>
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
        <div class="centering">
          <div class="sent"><p>Success</p></div>
          <div class="success">
            <p>
              Thank you for your application. we will get back to you if you are
              shortlisted.
            </p>
          </div>
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
import dbutton from "../components/ui/dbutton.vue";
import DataInput from "../components/allmenus/DataInput.vue";
import PopCard from "../components/ui/PopCard.vue";
import { _ } from "lodash";
export default {
  components: {
    DataInput,
    dbutton,
    PopCard,
  },
  data() {
    return {
      progress: 0,
      uploadFiles: [],
      files: [],
      message: "",
      error: false,
      selectedSelfie: null,
      selectedId: null,
      selected: "",
      phoneNumber: "",
      email: "",
      name: "",

      PopCard: false,
      PopCard2: false,
      isUploadLoading: false,
    };
  },
  methods: {
    onFileSelect(event) {
      this.selectedSelfie = event.target.files[0];
    },
    onFileSelectId(event) {
      this.selectedId = event.target.files[0];
    },

    onFileSelected() {
      const files = this.$refs.files.files;

      this.uploadFiles = [...this.uploadFiles, ...files];

      this.files = [
        ...this.files,
        ..._.map(files, (file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          invalidateMessage: this.validate(file),
        })),
      ];
    },
    validate(file) {
      const MAX_SIZE = 800000;
      const allowedTypes = ["image/jpeg"];

      if (file.size > MAX_SIZE) {
        return `Max size: ${MAX_SIZE / 1000}kb`;
      }
      if (!allowedTypes.includes(file.type)) {
        return "Not the required file type";
      }
      return "";
    },
    onUpload() {
      if (
        !this.name == "" &&
        !this.phoneNumber == "" &&
        !this.selected == "" &&
        !this.selectedSelfie == "" &&
        !this.selectedId == "" &&
        !this.email == "" &&
        !this.files == []
      ) {
        const fd = new FormData();
        _.forEach(this.uploadFiles, (file) => {
          if (this.validate(file) === "") {
            fd.append("file", file);
          }
        });
        fd.append("name", this.name);
        fd.append("phoneNumber", Number(this.phoneNumber));
        fd.append("jobTitle", this.selected);
        fd.append("selfie", this.selectedSelfie);
        fd.append("id", this.selectedId);
        // fd.append("academic", this.files);
        fd.append("email", this.email);

        this.isUploadLoading = true;
        axios
          .post(
            "https://api.rexvirtualenterprise.com/applicants/uploadfile",
            fd,
            {
              headers: {
                "Content-type": "multipart/form-data",
                "Access-Control-Allow-origin": "*",
                "Content-type": "application/json",
                Accept: "application/json",
              },
            },
            {
              onUploadProgress: (uploadEvent) => {
                console.log(
                  "upload progress:",
                  +Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                    "%"
                );
                this.progress = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                );
              },
            }
          )
          .then((res) => {
            this.isUploadLoading = false;
            this.PopCard = true;

            this.selectedFile = null;
            this.selected = "";
            this.phoneNumber = "";
            this.email = "";
            this.name = "";
            this.files = [];
            this.uploadFiles = [];
            this.selectedId = "";
            this.selectedSelfie = "";
            const response = res.data.message;

            console.log(response);
          });
      } else {
        this.PopCard2 = true;
      }
    },
  },
};
</script>

<style scoped>
select {
  outline: none;
  padding: 0.7em 1em;
  border: 2px solid #306060;
  border-radius: 8px;
  margin: 0.3em 0 1.2em;
  /* font-size: 1.2em; */
  background: #fff;
  width: 100%;
}
select:focus {
  border: 2px solid #3b50df;
}
.buton-send {
  padding-bottom: 3em;
  display: flex;
  justify-content: start;
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
}
.uploaded {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px dashed;
  padding: 10px 10px;
}
.uploaded:hover {
  outline: none !important;
  border: 1px solid #0067c2;
}
.upload-data {
  display: flex;
  justify-content: space-between;
  max-width: 70%;
}
.right .red button {
  color: red;
  background: none;
  border-radius: 5px;
  border: none;
  margin: 1px 0;
}
.danger-color {
  color: red;
}
.uploaded button {
  max-width: 10em;
  border-radius: 5px;
  border: none;
  background: #0067c2;
  color: #fff;
}
.frm-label {
  color: #000;
}
.form ::placeholder {
  color: rgb(202, 200, 200);
}
@media screen and (max-width: 768px) {
  .frm-label {
    font-size: 14px;
  }
  .form ::placeholder {
    font-size: 10px;
  }
  select {
    font-size: 12px;
  }
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
}
.sent,
.success {
  justify-content: center;
  display: flex;
}

.centering {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
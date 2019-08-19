<template>

	<div id="contact-form" class="contact-form">
		<h1 class="contact-form_title">Contact Me</h1>
		<div class="separator"></div>

		<form @submit.prevent="submitForm" class="form" id="contactForm">
			<input @blur="$v.form.name.$touch()" v-model="form.name" placeholder="Name" type="text" id="name" >
      <template v-if="$v.form.name.$error">
        <span v-if="!$v.form.name.required" class="form-error">This field is required</span>
      </template>
			<input @blur="$v.form.email.$touch()" v-model="form.email" placeholder="E-mail" type="email" id="email" >
      <template v-if="$v.form.email.$error">
        <span v-if="!$v.form.email.required" class="form-error">This field is required</span>
      </template>
			<textarea @blur="$v.form.message.$touch()" v-model="form.message"  rows="4" placeholder="Message" id="message"></textarea>
      <template v-if="$v.form.message.$error">
        <span v-if="!$v.form.message.required" class="form-error">This field is required</span>
      </template>
		   <button class="button" type="submit">Send</button>
		</form>
	</div>

    
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
const firebase = require("./firebaseConfig.js");
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      message: {
        required
      }
    }
  },
  methods: {
    submitForm() {
      console.log("djdjdjdjdj");
    }
  }
};
</script>

<style>
body {
  background: #f1f1f1;
  font-family: "Roboto", sans-serif;
}

.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: white;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #da552f;
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
.form-error {
  color: red;
}
</style>

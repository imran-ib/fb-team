import React, { Component } from "react";
import FormField from "./../../../../utills/Forms/FormField";

// ─────────────────────────────────────────────────────────────── COMPONENTS ─────
import { validate } from "./../../../../utills/helper";
import { firebasePromotions } from "../../../../config/firebase";

export class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  // ────────────────────────────────────────────────────── UPDATING THE FIELDS ─────
  updateForm(element) {
    // ─── COPY OF STATE ───────────────────────────────────────────────
    const newFormdata = { ...this.state.formdata };
    // ─── GET NEW ELEMENT ─────────────────────────────────────────────
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  // ─────────────────────────────────────────────────────────── FORMSUBMISSION ─────
  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;
    // ─── CHECK VALIDATION BEFORE SUBMITING ──────────────────────────────────────────
    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      // ──────────────────────────────────────────────────────────you can submit dataToSubmit to db  ─────
      // ─────────────────────────────────────────────────────────────────
      firebasePromotions
        .orderByChild("email")
        .equalTo(dataToSubmit.email)
        .once("value")
        .then(snapshot => {
          if (snapshot.val() === null) {
            // IF EMAIL IS NOT ON DB
            firebasePromotions.push(dataToSubmit);
            this.resetFormSuccess(true);
          } else {
            this.resetFormSuccess(false);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
    // ─────────────────────────────────────────────────────────────────
  }
  // ─────────────────── AFTER SUBMITING  RESET THE FORM AND SET SUCCESS MESSAGE ─────
  resetFormSuccess = type => {
    // ─── COPY OF STATE ───────────────────────────────────────────────
    const newFormdata = { ...this.state.formdata };

    for (let key in newFormdata) {
      newFormdata[key].value = "";
      newFormdata[key].valid = false;
      newFormdata[key].validationMessage = "";

      this.setState({
        formError: false,
        formdata: newFormdata,
        formSuccess: type ? "Sucsess" : "already on database"
      });
      // ─── CLEAR SUCCESS MESSAGE ──────────────────────────────────────
      this.clearSuccessMessge();
    }
  };
  // ─── CLEAR SUCCESS MESSAGE ──────────────────────────────────────
  clearSuccessMessge() {
    setTimeout(() => {
      this.setState({
        formSuccess: ""
      });
    }, 2000);
  }
  render() {
    return (
      <div className="enroll_wrapper">
        <form onSubmit={event => this.submitForm(event)}>
          <div className="enroll_title">Enter Your Email</div>
          <div className="enroll_input">
            <FormField
              id={"email"}
              formData={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">Something went wrong</div>
            ) : null}
            <div className="success_label">{this.state.formSuccess}</div>
            <button onClick={event => this.submitForm(event)}>Enroll</button>
            <div className="enroll_discl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              aliquid, incidunt facilis doloribus corporis pariatur non
              repellendus nulla amet dolorum !
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Enroll;

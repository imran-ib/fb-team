import React, { Component } from "react";
import FormField from "./../../../../utills/Forms/FormField";

// ─────────────────────────────────────────────────────────────── COMPONENTS ─────
import { validate } from "./../../../../utills/helper";

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

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      // ──────────────────────────────────────────────────────────you can submit dataToSubmit to db  ─────
      // ─────────────────────────────────────────────────────────────────
      // firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
      // .then((snapshot)=>{
      //     if(snapshot.val() === null){
      //         firebasePromotions.push(dataToSubmit);
      //         this.resetFormSuccess(true);
      //     }else{
      //         this.resetFormSuccess(false);
      //     }
      // })
      // ─────────────────────────────────────────────────────────────────
    } else {
      this.setState({
        formError: true
      });
    }
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
            <button onClick={event => this.submitForm(event)}>Enroll</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Enroll;

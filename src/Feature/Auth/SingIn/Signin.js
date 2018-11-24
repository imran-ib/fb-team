import React, { Component } from "react";
import FormField from "./../../../utills/Forms/FormField";
import { validate } from "./../../../utills/helper";
import { firebase } from "../../../config/firebase";

export class Signin extends Component {
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
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
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
      firebase
        .auth()
        .signInWithEmailAndPassword(dataToSubmit.email, dataToSubmit.password)
        .then(() => {
          this.props.history.push("/dashboard");
        })
        .catch(error => {
          this.setState({
            formError: true
          });
        });
    } else {
      this.setState({
        formError: true
      });
    }
    // ─────────────────────────────────────────────────────────────────
  }

  render() {
    return (
      <div className="container">
        <div className="signin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={event => this.submitForm(event)}>
            <h2>Please Login</h2>
            <FormField
              id={"email"}
              formData={this.state.formdata.email}
              change={element => this.updateForm(element)}
            />
            <FormField
              id={"password"}
              formData={this.state.formdata.password}
              change={element => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">Something went wrong</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;

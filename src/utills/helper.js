//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C O N E V R T   O B J E C T   T O   A R R A Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//
export const firebaseLooper = snapshot => {
  const data = [];

  snapshot.forEach(element => {
    data.push({
      ...element.val(),
      id: element.key
    });
  });
  return data;
};

//
// ────────────────────────────────────────────────────────────────── II ──────────
//   :::::: R E V E R S E   A R R A Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//
export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};

//
// ──────────────────────────────────────────────────────────── III ──────────
//   :::::: V A L I D A T I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────
//
export const validate = element => {
  let error = [true, ""];

  //
  // ─── MINLENGTH ──────────────────────────────────────────────────────────────────
  //

  if (element.validation.minLength) {
    // add minlength to validation in state
    const valid = element.value.length >= element.validation.minLength;
    const message = `${
      !valid ? "Must be greater then " + element.validation.minLength : ""
    }`;
    error = !valid ? [valid, message] : error;
  }
  //
  // ─── VALID EMAIL ────────────────────────────────────────────────────────────────
  //

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  //
  // ─── REQUIRED FIELDS ────────────────────────────────────────────────────────────
  //
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }
  return error;
};

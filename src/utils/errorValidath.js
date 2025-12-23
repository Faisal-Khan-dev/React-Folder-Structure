export const validateAuthForm = (formValues, formType) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ================= Signup / AdminRegister / AddUser =================
  if (formType === "signup") {
    if (!formValues.name?.trim()) {
      errors.name = "Name is required";
    } else if (formValues.name.trim().length < 4) {
      errors.name = "Name must be at least 4 characters";
    }

    if (!formValues.email?.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "Invalid email format";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formValues.roleTitle?.trim()) {
      errors.roleTitle = "Role is required";
    }

    if (!formValues.address?.trim()) {
      errors.address = "Address is required";
    } else if (formValues.address.trim().length < 7) {
      errors.address = "Address must be at least 7 characters";
    }
  }

  // ================= Login =================
  if (formType === "login") {
    if (!formValues.email?.trim()) {
      errors.email = t.login.errors.emailRequired;
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = t.login.errors.emailInvalid;
    }

    if (!formValues.password) {
      errors.password = t.login.errors.passwordRequired;
    } else if (formValues.password.length < 6) {
      errors.password = t.login.errors.passwordMin;
    }
  }

  return errors;
};

const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

export function formValidation(element) {
  const value = element.target.value;
  const type = element.target.type;
  const name = element.target.name;
  console.log("name in formValidation", name);

  switch (type) {
    case "email":
      return emailValidation(value, element);

    case "text":
      return validateText(value, element);

    case "number":
        return phoneNumberValidation(value, element);

    case "password":
          return passwordValidation(value, element);

    default:
      break;
  }
}

const emailValidation = (email, element) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.toLowerCase().match(regex)) {
    const isErrored = document.querySelector("#emailError");
    if (isErrored) {
      isErrored.remove();
    }
    return email;
  } else {
    const parentNode = element.target.parentNode;
    const errorTag = document.createElement("div");
    errorTag.id = "emailError";
    errorTag.innerHTML = "<span class='text-danger'>Email is not valid</span>";
    errorTag.style = "margin:5px 0px;font-size:11px;text-align:initial;";
    const isErrored = document.querySelector("#emailError");
    if (!isErrored) {
      parentNode.appendChild(errorTag);
    }
    return;
  }
};

const validateText = (value, element) => {
  if (value.length > 2) {
    const isErrored = document.querySelector(`#${element.target.name}`);
    if (isErrored) {
      isErrored.remove();
    }
    return value.trim();
  } else {
    const parentNode = element.target.parentNode;
    const errorTag = document.createElement("div");
    errorTag.id = element.target.name;
    errorTag.innerHTML = `<span class='text-danger'> ${element.target.name.toLocaleUpperCase()} is too short</span>`;
    errorTag.style = "margin:5px 0px;font-size:11px";
    const isErrored = document.querySelector(`#${element.target.name}`);
    if (!isErrored) {
      parentNode.appendChild(errorTag);
    }
    return;
  }
};

const phoneNumberValidation = (code,phone, element) => {
  console.log(phone,"phoneeeeeeeeeeeeeeee")
  if (phone.length > 11) {
    if (phoneUtil.isValidNumberForRegion(phoneUtil.parse(phone, "Pk"), "Pk")) {
      const isErrored = document.querySelector(`#${element.target.name}`);
      if (isErrored) {
        isErrored.remove();
      }
      return phone;
    }else{
      const parentNode = element.target.parentNode;
      const errorTag = document.createElement("div");
      errorTag.id = element.target.name;
      errorTag.innerHTML = `<span class='text-danger'> Enter valid phone number </span>`;
      errorTag.style = "margin:5px 0px;font-size:11px";
      const isErrored = document.querySelector(`#${element.target.name}`);
      if (!isErrored) {
        parentNode.appendChild(errorTag);
      }
    }
  } else {
    
    const parentNode = element.target.parentNode;
    const errorTag = document.createElement("div");
    errorTag.id = element.target.name;
    errorTag.innerHTML = `<span class='text-danger'> Enter Phone number with country code without spaces </span>`;
    errorTag.style = "margin:5px 0px;font-size:11px";
    const isErrored = document.querySelector(`#${element.target.name}`);
    if (!isErrored) {
      parentNode.appendChild(errorTag);
    }
    return;
  }
};


const passwordValidation = (password,element)=>{

  if (password.length > 7) {

      const isErrored = document.querySelector(`#${element.target.name}`);
      if (isErrored) {
        isErrored.remove();
      }
      return password;
    
  } else {
    const parentNode = element.target.parentNode;
    const errorTag = document.createElement("div");
    errorTag.id = element.target.name;
    errorTag.innerHTML = `<span class='text-danger'> Password must be 8 character long </span>`;
    errorTag.style = "margin:5px 0px;font-size:11px;text-align:initial;";
    const isErrored = document.querySelector(`#${element.target.name}`);
    if (!isErrored) {
      parentNode.appendChild(errorTag);
    }
    return;
  }
}
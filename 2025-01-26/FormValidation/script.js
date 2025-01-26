import saveFormData from "./api.js";

function displaySavedData(data) {
    const container = document.getElementById('savedDataContainer');
    const record = data.record;

    // Create a table
    const table = document.createElement('table');
    table.classList.add('data-table');

    // Create table body
    const tbody = document.createElement('tbody');
    for (const key in record) {
        const row = document.createElement('tr');

        const th = document.createElement('th');
        th.textContent = key;
        row.appendChild(th);

        const td = document.createElement('td');
        td.textContent = record[key];
        row.appendChild(td);

        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // Clear previous content and append the new table
    container.innerHTML = '';
    container.appendChild(table);
}

window.displaySavedData = displaySavedData;

// Snackbar function
function showSnackbar(message, type) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = type === 'success' ? 'green' : 'red';
    snackbar.className = 'show';

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

window.showSnackbar = showSnackbar;

// Name validation
function validateName() {
    let isValid = true; // Flag to track if the form is valid

    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.length < 3 || name.length > 20) {
        nameError.textContent = "Name must be between 3 and 20 characters.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

window.validateName = validateName;

// Address validation
function validateAddress() {
    const address = document.getElementById("address").value;
    const addressError = document.getElementById("addressError");

    if (address.length < 4 || address.length > 30) {
        addressError.textContent =
        "Address must be between 4 and 30 characters.";
        return false;
    } else {
        addressError.textContent = "";
        return true;
    }
}

window.validateAddress = validateAddress;

// Phone validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be a 10-digit number.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

window.validatePhone = validatePhone;

// IQ validation
function validateIQ() {
    const iq = document.getElementById("iq").value;
    const iqError = document.getElementById("iqError");

    if (iq < 50 || iq > 200) {
        iqError.textContent = "IQ must be between 50 and 200";
        return false;
    } else {
        iqError.textContent = "";
        return true;
    }
}

window.validateIQ = validateIQ;

// Checkbox validation
function validateCheckbox(){
    const checkbox = document.querySelector(
        'input[type="checkbox"]:checked'
    );
    const checkboxError = document.getElementById("checkboxError");

    if (!checkbox) {
        checkboxError.textContent = "Please select at least one option.";
        return false;
    } else {
        checkboxError.textContent = "";
        return true;
    }
}

window.validateCheckbox = validateCheckbox;

// Essay validation
function validateEssay() {
    const essay = document.getElementById("msg").value;
    const essayError = document.getElementById("essayError");

    if (essay.length < 5) {
        essayError.textContent =
        "The message must be at least 4 characters long";
        return false;
    } else {
        essayError.textContent = "";
        return true;
    }
}

window.validateEssay = validateEssay;

function validate(event) {
    event.preventDefault(); // Prevent default form submission

    const isNameValid = validateName();
    const isAddressValid = validateAddress();
    const isPhoneValid = validatePhone();
    const isIQValid = validateIQ();
    const isCheckboxValid=validateCheckbox();
    const isEssayValid = validateEssay();

    // console.log(collectFormData());


    if (isNameValid && isAddressValid && isPhoneValid && isIQValid && isCheckboxValid&& isEssayValid) {
        // alert("Form submitted successfully!");
        console.log(collectFormData());
        saveFormData(collectFormData());
        // Reset the form
        // document.forms["Form"].reset(); // Clear all form fields
        // Here, you can call form submission logic if necessary (e.g., AJAX)
    }
}

window.validate = validate;

function collectFormData() {
    const formData = {
      name: document.getElementById("name").value,
      address: document.getElementById("address").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      iq: document.getElementById("iq").value,
      gender: document.querySelector('input[name="gender"]:checked')?.value,
      date: document.getElementById("date").value,
      checkboxes: Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
      ).map((checkbox) => checkbox.nextSibling.textContent.trim()),
      politicalPersuasion: document.getElementById("dropdown").value,
      education: document.getElementById("dropdown2").value,
      essay: document.getElementById("msg").value,
    };
    return formData;
  }

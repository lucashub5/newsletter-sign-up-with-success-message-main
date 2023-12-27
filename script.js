const errorMessageInput = document.querySelector(".valid-status");
const errorMessageText = document.querySelector(".valid-status-text");

errorMessageInput.classList.remove("valid-status");
errorMessageText.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {

    const emailInput = document.getElementById("email-addres"); 
    const buttonSubmit = document.getElementById("button-submit");
    let buttonSumbitValid = false;

    buttonSubmit.addEventListener("click", () => {

        if (buttonSumbitValid === true) {
            document.querySelector(".container-main").style.display = "none";
            document.querySelector(".container-thanks").style.display = "block";
        }
        else {
            errorMessageInput.classList.add("valid-status");
            errorMessageText.style.display = "block";
        }
    });
    

    emailInput.addEventListener("keypress", (event) => {
        if (event.key === " ") {
            event.preventDefault();
            }
        });

    function isValidEmailFormat(email) {

            if (email === "") {
                return true;
            } else if (/^[a-zA-Z0-9]+$/.test(email)) {
                return true;
            } else if (/^[a-zA-Z0-9]+@$/.test(email)) {
                return true;
            } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(email)) {
                return true;
            } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.$/.test(email)) {
                return true;
            } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email)) {
                return true;
            } else {
                return false;
            }
    }


    function isValidEmailFormatBlur(email) {
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return true;
        }
    }

    function handleEmailInput() {
        const email = emailInput.value;

        if (!isValidEmailFormat(email)) {
            errorMessageInput.classList.add("valid-status");
            errorMessageText.style.display = "block";
        } else {
            errorMessageInput.classList.remove("valid-status");
            errorMessageText.style.display = "none";
        }
    }

    emailInput.addEventListener("input", handleEmailInput);
    emailInput.addEventListener("focus", handleEmailInput);

    emailInput.addEventListener("blur", function () {

        const email = emailInput.value;

        if (email !== "" && isValidEmailFormatBlur(email)) {
            errorMessageInput.classList.add("valid-status");
            errorMessageText.style.display = "block";

            buttonSumbitValid = true;

        } else {
            errorMessageInput.classList.remove("valid-status");
            errorMessageText.style.display = "none";

            buttonSumbitValid = false;

        }
    });



});

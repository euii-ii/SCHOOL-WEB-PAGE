document.addEventListener("DOMContentLoaded", function () {
    const admissionForm = document.getElementById('admission-form');
    const progress = document.querySelector('.progress');
    const inputs = admissionForm.querySelectorAll("input, select, textarea");

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            const filledInputs = Array.from(inputs).filter(i => i.value !== "").length;
            const percentage = (filledInputs / inputs.length) * 100;
            progress.style.width = `${percentage}%`;
        });
    });

    admissionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let formValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                errorMessage.style.display = "block";
                input.classList.add("invalid");
                formValid = false;
            } else {
                errorMessage.style.display = "none";
                input.classList.remove("invalid");
            }
        });

        if (formValid) {
            alert("Application submitted successfully!");
        } else {
            alert("Please fill in all required fields correctly.");
        }
    });
});

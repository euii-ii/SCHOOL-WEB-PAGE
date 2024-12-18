function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "navbar-lists") {
        x.className += " responsive";
    } else {
        x.className = "navbar-lists";
    }
}

const scrollLinks = document.querySelectorAll('.navbar-link');
scrollLinks.forEach(link => {
    link.addEventListener('click',
         function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
            const targetElement = 
                  document.getElementById(targetId
                            .substring(1));
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with id 
                            '${targetId.substring(1)}' 
                             not found.`);
            }
        } else {
            console.error('No href attribute found.');
        }
    });
});

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".school-img");
    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block"; 
    setTimeout(showSlides, 3000); 
}


showSlides();


const loginLink = document.querySelector('.login-link');
const loginFormContainer = document.getElementById('login-form-container');
const closeLoginForm = document.getElementById('close-login-form');


loginLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    loginFormContainer.style.display = 'flex'; 
});


closeLoginForm.addEventListener('click', () => {
    loginFormContainer.style.display = 'none'; 
});


loginFormContainer.addEventListener('click', (event) => {
    if (event.target === loginFormContainer) {
        loginFormContainer.style.display = 'none';
    }
});


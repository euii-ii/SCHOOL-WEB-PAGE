document.addEventListener("DOMContentLoaded", function () {
    const levelFilter = document.getElementById('levelFilter');
    const courseCards = document.querySelectorAll('.course-card');

    levelFilter.addEventListener('change', function () {
        const selectedLevel = levelFilter.value;

        courseCards.forEach(card => {
            if (selectedLevel === 'all' || card.getAttribute('data-level') === selectedLevel) {
                card.style.display = 'block';
                card.classList.add('highlight');
                setTimeout(() => card.classList.remove('highlight'), 300);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function scrollToCourses() {
    document.getElementById('courses-list').scrollIntoView({ behavior: 'smooth' });
}

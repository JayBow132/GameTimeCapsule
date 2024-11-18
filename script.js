function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    function animateSkills() {
        const skillElements = document.querySelectorAll('.skill-percentage');
        
        skillElements.forEach(function (skill) {
            const target = parseInt(skill.getAttribute('data-skill')); 
            let count = 0;

            const interval = setInterval(function () {
                if (count < target) {
                    count++;
                    skill.textContent = count + "%";
                } else {
                    clearInterval(interval);
                }
            }, 20);
        });

        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(function (skillLevel) {
            const width = skillLevel.parentElement.querySelector('.skill-percentage').getAttribute('data-skill');
            skillLevel.style.width = width + "%"; 
        });
    }
    animateSkills();
});

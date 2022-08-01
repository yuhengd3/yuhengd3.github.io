document.addEventListener("DOMContentLoaded", () => {
    const about_btn = document.querySelector('#about-btn');
    const experience_btn = document.querySelector('#experience-btn');
    const projects_btn = document.querySelector('#projects-btn');
    const skills_btn = document.querySelector('#skills-btn');
    const contact_btn = document.querySelector('#contact-btn');

    about_btn.addEventListener('click', () => {
        document.getElementById("about").scrollIntoView();
    });
    experience_btn.addEventListener('click', () => {
        document.getElementById("experience").scrollIntoView();
    })
    projects_btn.addEventListener('click', () => {
        document.getElementById("projects").scrollIntoView();
    })
    skills_btn.addEventListener('click', () => {
        document.getElementById("skills").scrollIntoView();
    })
    contact_btn.addEventListener('click', () => {
        document.getElementById("contact").scrollIntoView();
    })
    const typed_out_text = document.querySelector('#typed-out-text');
    const observer = new IntersectionObserver(entries => {
        typed_out_text.style.opacity = 1;
        typed_out_text.classList.toggle("type-animation", entries[0].isIntersecting);
        console.log(entries);
    })
    observer.observe(typed_out_text);
});

const homeButton = document.querySelectorAll('#home-button');
const aboutButton = document.querySelectorAll('#about-button');
const projectsButton = document.querySelectorAll('#projects-button');
const contactButton = document.querySelectorAll('#contact-button');
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');
const projects = document.getElementById('projects');
const navToggle = document.getElementById('nav-toggle');

const buttons = [
    {button: homeButton, target: home}, 
    {button: aboutButton, target: about},
    {button: contactButton, target: contact},
    {button: projectsButton, target: projects}
]

buttons.forEach(btn => {

    btn.button.forEach(b => {
        b.addEventListener('click', e => {
            e.preventDefault();
            btn.target.scrollIntoView({behavior: 'smooth'})
            b.blur();      
            navToggle.classList.remove('close');
    })
    })
})

particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
});

navToggle.addEventListener('click', e => {
    e.preventDefault();
    navToggle.classList.toggle('close');
})
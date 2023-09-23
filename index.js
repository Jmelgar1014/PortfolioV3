const hamburger = document.querySelector('i');
const mobile = document.querySelector('.mobile-container');
const projects = document.querySelector('.container');
const blurry = document.querySelector('.blurry');
const sections = document.querySelectorAll('.items-mobile')
const main = document.querySelector('.home');
const navHeight = document.querySelector('.navigation-desk').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navHeight - 1 + 'px');

hamburger.addEventListener('click',()=>{
    const list = document.querySelector('.mobile-container')

    list.classList.toggle('active');
    if(list.classList.contains('active')){
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-x');
        blurry.style.display = 'block';


    }
    else {
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-x')
        blurry.style.display = 'none';

    }


})

const windowWidth = () =>{
    const ham = document.querySelector('i');
    const mob= document.querySelector('.mobile-container');
    const blurr = document.querySelector('.blurry');
    if(ham.classList.contains('active') && window.innerWidth >= 800){
        mob.style.display = 'none';
        blurr.style.display = 'none';
    }
}
windowWidth();


sections.forEach((item)=>{
    item.addEventListener('click',()=>{
        mobile.classList.remove('active');
        blurry.style.display = 'none';
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-x');
    })
})
document.addEventListener('click', (e)=>{
    if(!mobile.contains(e.target) && e.target !== hamburger){
        mobile.classList.remove('active');
        blurry.style.display = 'none';
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-x');
    }
})

const projectItems = [{
    name: 'Movie and Tv Search',
    photo: 'images/movieproject.png',
    Stack: 'HTML,CSS',
    webLink: ' https://jmelgar1014.github.io/Entertainment-Search/',
    gitLink: 'https://github.com/Jmelgar1014/Entertainment-Search',
    Description: 'Used the "The Movie Database" API, to create a website to be able to search for movies and tv shows. '
},{
    name: 'Personal Website V1',
    photo: 'images/Personal Website V1.jpg',
    Stack: 'HTML,CSS',
    webLink: 'https://jmelgar1014.github.io/First-Website/',
    gitLink: 'https://github.com/Jmelgar1014/First-Website',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
},{
    name: 'Personal Website V2',
    photo: 'images/Personal Website V2.jpg',
    Stack: 'HTML,Bootstrap',
    webLink: 'https://jmelgar1014.github.io/Personal-Site-V2/',
    gitLink: 'https://github.com/Jmelgar1014/Personal-Site-V2',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
},{    
    name: 'Currency Exchange',
    photo: 'images/currency.png',
    Stack: 'HTML,CSS,Javascript',
    webLink: "https://jmelgar1014.github.io/exchange-rate/",
    gitLink: 'https://github.com/Jmelgar1014/exchange-rate',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
},{    
    name: 'Weather App',
    photo: 'images/weather2.png',
    Stack: 'HTML,CSS,Javascript',
    webLink: "https://jmelgar1014.github.io/weather-app/",
    gitLink: 'https://github.com/Jmelgar1014/weather-app',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
},{    
    name: 'Todo App',
    photo: 'images/todo.png',
    Stack: 'HTML,CSS,Javascript',
    webLink: " https://jmelgar1014.github.io/todo-app/",
    gitLink: 'https://github.com/Jmelgar1014/todo-app',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
},{    
    name: 'Personal Website V3',
    photo: 'images/v3.png',
    Stack: 'HTML,CSS,Javascript',
    webLink: " https://jmelgar1014.github.io/PortfolioV3/",
    gitLink: 'https://github.com/Jmelgar1014/PortfolioV3',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
}]

const contain = document.getElementById('pro');
let html = '';
projectItems.forEach(item => {
    html += `
        <div class="gridItem">
            <h2>${item.name}</h2>
            <div class="hero-container">
                <div class="project-img">
                    <img src="${item.photo}">
                </div>
                <div class="project-links">
                    <button id="web"><a  href="${item.webLink}">Website</a></button>
                    <button id="git"><a  href="${item.gitLink}">Github</a></button>
                </div>
            </div>

        </div>
    `
    contain.innerHTML = html;

})



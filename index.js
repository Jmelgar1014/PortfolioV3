const hamburger = document.querySelector('i');
const mobile = document.querySelector('.mobile-container');
const projects = document.querySelector('.container');

const main = document.querySelector('.home');

hamburger.addEventListener('click',()=>{
    const removeHam = document.querySelector('i');
    if(removeHam.classList.contains('active')){
        removeHam.classList.remove('active','fa-solid','fa-x');
        removeHam.classList.add('fa-solid','fa-bars', 'fa-4x')
        mobile.style.display = 'none';
        main.style.display = 'contents';
        projects.style.display = 'contents';


    }else{
        removeHam.classList.add('active','fa-solid','fa-x');
        projects.style.display = 'none';
        main.style.display = 'none';

        mobile.style.display = 'contents';
    }

})

const projectItems = [{
    name: 'Movie and Tv Search',
    photo: 'images/movieproject.png',
    Stack: 'HTML,CSS',
    webLink: ' https://jmelgar1014.github.io/Entertainment-Search/',
    gitLink: 'https://github.com/Jmelgar1014/Entertainment-Search',
    Description: 'Used HTML and CSS to create the google homepage to familiarize myself with how to create navigation bars and an input box.'
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
projectItems.forEach(item => {
    const newItem = document. createElement('div');
    newItem.classList.add('gridItem');
    const gitBtn = document.createElement('a');
    const webBtn = document.createElement('a');
    gitBtn.setAttribute('id','git');
    webBtn.setAttribute('id','web');
    console.log(item.gitLink);
    console.log(item.webLink);
    gitBtn.href = item.gitLink;
    webBtn.href = item.webLink;

    const gitText = document.createTextNode('Github');
    const webText = document.createTextNode('Website');
    const projectImage = document.createElement('img');
    gitBtn.appendChild(gitText);
    webBtn.appendChild(webText);
    projectImage.src = item.photo;
    const textItem = document.createElement('h2');
    const info = item.name;
    const list = document.createTextNode(info);
    contain.appendChild(newItem);
    textItem.appendChild(list);
    newItem.appendChild(textItem);
    newItem.appendChild(projectImage);
    newItem.appendChild(webBtn);
    newItem.appendChild(gitBtn);
    

})


const mobileHome = document.querySelectorAll('.items-mobile');



mobileHome.forEach(item =>{
    item.addEventListener('click', ()=>{
        const removeHam = document.querySelector('i');
        removeHam.classList.remove('fa-solid','fa-x','active');
        mobile.style.display = 'none';
        main.style.display = 'contents';
        projects.style.display = 'contents';
        removeHam.classList.add('fa-solid','fa-bars','active');
        let locate = item.href;
        console.log(locate);
        let news = location.href = locate;
  

       
    })
})
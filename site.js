
document.body.style.backgroundColor = 'lightgray'
document.title = "Logan's website"


const nav = document.querySelector('nav')
const mainContentSection = document.querySelector('h2.active')

const about = document.querySelector('#about')
about.style.color = 'orange'

const active = document.querySelector('.active') 
active.style.color = 'blue'

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    //contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue'
})


mainContentSection.style.color = 'red'

setTimeout(() => {
    const h1 = document.querySelector('h1')
    h1.textContent = 'Hello There *in jedi voice*'
    h1.style.textDecoration = 'underline'
    h1.style.fontWeight = 'bold'

})

// Approach 1: Underline link using only JavaScript (no HTML changes)
// const fork = document.querySelector('footer a')
// fork.style.textDecoration = 'underline'

// Exercise 2 - Approach 2: Access link via ID
const fork = document.querySelector('#fork')
fork.style.textDecoration = 'underline'

const activeElements = document.querySelectorAll('.active')

//activeElements.forEach(el => el.style.border = '1px solid red')

for (let i = 0; i < activeElements.length; i++)
{
    activeElements[i].style.border = '1px solid red'
}
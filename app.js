const cards = document.querySelectorAll('.card')
const icons = document.querySelectorAll('a')



icons.forEach( (icon,index)=> {

    icon.addEventListener('click', (e) => {
    
       removeActiveClass()
       cards[index].classList.toggle('active')
    })

})

function removeActiveClass()
{
    cards.forEach((card) => {
        if(card.classList.contains('active'))
        {
            card.classList.remove('active') 
        }
    })
}

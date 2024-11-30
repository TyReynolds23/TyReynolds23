document.getElementById('water').onclick = noRhonda
document.getElementById('beer').onclick = bloatedSam
document.getElementById('wine').onclick = noPantsDance
document.getElementById('tequila').onclick = rightHereYaBrusselSprout
const rightHere = document.querySelector('#brusselSprout')
const somthingIWant = document.querySelector('#iWant')
const pants = document.querySelector('#pants')
const itsMe = document.querySelector('#itsMe')

function noRhonda() {
    document.querySelector('#levelOfRhonda').innerHTML="Just Sam. She is still lots of fun and usually DTF"
    document.querySelector('#waterRhonda').style.display='block'
    document.querySelector('#beerRhonda').style.display='none'
    document.querySelector('#wineRhonda').style.display='none'
    document.querySelector('#tequilaRhonda').style.display='none'
    itsMe.play()
};
function bloatedSam() {
    document.querySelector('#levelOfRhonda').innerHTML="Still just Sam. While the beer made her horny, she is probably going to get bloated quick and the spicy time window is small"
    document.querySelector('#waterRhonda').style.display='none'
    document.querySelector('#beerRhonda').style.display='block'
    document.querySelector('#wineRhonda').style.display='none'
    document.querySelector('#tequilaRhonda').style.display='none'
    pants.play()
};
function noPantsDance() {
    document.querySelector('#levelOfRhonda').innerHTML="Rhonda is starting to show up. Sam is still in control but Rhonda is whispering to her"
    document.querySelector('#waterRhonda').style.display='none'
    document.querySelector('#beerRhonda').style.display='none'
    document.querySelector('#wineRhonda').style.display='block'
    document.querySelector('#tequilaRhonda').style.display='none'
    somthingIWant.play()
};
function rightHereYaBrusselSprout() {
    document.querySelector('#levelOfRhonda').innerHTML="Rhonda has arrived. Be prepared to have your world rocked"
    document.querySelector('#waterRhonda').style.display='none'
    document.querySelector('#beerRhonda').style.display='none'
    document.querySelector('#wineRhonda').style.display='none'
    document.querySelector('#tequilaRhonda').style.display='block'
    document.querySelector('#brusselSprout')
    rightHere.play()
};
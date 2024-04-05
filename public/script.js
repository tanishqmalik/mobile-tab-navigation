const homebutton=document.getElementById('homebutton')
// const tempimg = document.getElementById('tempimg')



// const title1st= document.getElementById('title1st')
// const columns=document.getElementById('columns')
// const projectstitle=document.querySelector('projectstitle')
// const line = document.getElementById('line')
// const edits= document.getElementById('edits')


const main=document.querySelectorAll('.main')

const hideElements = ()=>{
    main.forEach((Elements)=>Elements.classList.add("hidden"))
}
const showElements = ()=> {
    main.forEach((Elements)=>Elements.classList.remove('hidden'))
}

const userselected= document.getElementById('userselected')

const profilebutton= document.querySelector('.profile')
profilebutton.addEventListener('click',(e)=>{
    e.preventDefault();
    profilebutton.classList.add('show');
    hideElements();
    userselected.classList.remove('hidden');
    profilebutton.classList.add('hidden');
});


homebutton.addEventListener('click', ()=>{
    showElements();
})
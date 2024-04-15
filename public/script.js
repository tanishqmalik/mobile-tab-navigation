  
const homebutton=document.querySelector('.homebutton')
const main=document.querySelectorAll('.main')
const userselected= document.getElementById('userselected')
const profilebutton= document.getElementById('user');
const hb_ns=document.getElementById("homebutton_ns");
const hb_span=document.getElementById('home_span');
const pb_span=document.getElementById('profile_span');
const indicator_id = document.getElementById('indicator_id');
const navbar = document.getElementById('navbar');
const indicator_content= document.getElementById('indicator_content')
const indicator_back = document.getElementById('indicator_back')

const hideElements = ()=>{
    main.forEach((Elements)=>Elements.classList.add("hidden"))
}
const showElements = ()=> {
    main.forEach((Elements)=>Elements.classList.remove('hidden'))
}


homebutton.addEventListener('click', (e) => {
    showElements();
});


const profile_content=document.getElementById('profile_content')
const home_content=document.getElementById('home_content')

profilebutton.addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('userselected').classList.remove('hidden')
    hideElements();
    userselected.classList.remove('hidden');
    profilebutton.classList.add('hidden');

    document.getElementById("homebutton_ns").classList.remove('hidden')
    homebutton.classList.add('hidden')

    hb_ns.style.opacity = '0.75';
    hb_span.style.opacity='0.75';
    hb_span.style.fontWeight='300';
    pb_span.style.opacity='1'
    pb_span.style.fontWeight='500'

    indicator_id.style.left= '2.4px'


    home_content.classList.add('hidden')
    home_content.classList.toggle('opacity-0')




    if(profile_content.classList.contains('hidden')){
        profile_content.classList.toggle('hidden');

        setTimeout(()=>{
            profile_content.style.opacity='1'
            home_content.style.opacity='0'
        },1)
    }

});





hb_ns.addEventListener('click', ()=>{
    showElements();
    userselected.classList.add('hidden')
    profilebutton.classList.remove('hidden')
    document.getElementById("homebutton_ns").classList.add('hidden')
    homebutton.classList.remove('hidden')
    hb_span.style.opacity='1'
    hb_span.style.fontWeight='500'
    pb_span.style.opacity='0.75'
    pb_span.style.fontWeight='300'
    indicator_id.style.left= '0.5px'


    profile_content.classList.add('hidden')


    if(home_content.classList.contains('hidden')){
        home_content.classList.remove('hidden');

        setTimeout(()=>{
            home_content.style.opacity = '1';
            profile_content.style.opacity = '0';
        },1)
    }

    // home_content.classList.remove('opacity-0')
    // home_content.classList.add('opacity-1')
});


indicator_id.addEventListener('click',()=>{
    home_content.classList.add('hidden');
    profile_content.classList.add('hidden')
    navbar.classList.add('hidden')
    indicator_content.classList.remove('hidden')
    // indicator_content.classList.add('animate-sildeInFromBottom')
})

indicator_back.addEventListener('click',()=>{
    location.reload();
})






// const toggleButton = document.getElementById('toggleButton');
// const content = document.getElementById('content');

// toggleButton.addEventListener('click', (e) => {
//   content.classList.remove('opacity-0');
//   content.classList.add('opacity-100');
//   console.log(content)
// });





// scrolling try


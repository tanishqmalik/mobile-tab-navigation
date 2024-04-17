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
const indicator_helper = document.getElementById('indicator_helper');



// navbar icons
const signalhigh_white = document.getElementById('signalhigh_white')
const signalhigh_black = document.getElementById('signalhigh_black')

const batterylow_white = document.getElementById('batterylow_white')
const batterylow_black = document.getElementById('batterylow_black')

const search_white = document.getElementById('search_white')
const search_black = document.getElementById('search_black')

const sliders_horizontal_black = document.getElementById('sliders_horizontal_black')
const sliders_horizontal_white = document.getElementById('sliders_horizontal_white')


const ellipsis_white = document.getElementById('ellipsis_white')
const ellipsis_black = document.getElementById('ellipsis_black')




const image = document.createElement('img');


image.src = 'assets/ellipsis1.svg'; 
image.id = 'ellipsis_black';
image.className = 'absolute left-[350px] cursor-pointer hidden';

const container = document.getElementById('edit2');


container.appendChild(image);




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

const checkbox = document.getElementById('check');
const mobiletabnav= document.getElementById('mobiletabnav')

// const spans = ()=>{
//     const spanss = document.getElementsByTagName('span')
//     main.forEach((spanss)=spanss.style.color='black');
//     console.log(spanss);
// }



// checkbox.addEventListener('click', ()=>{
//     mobiletabnav.style.background='white'
//     console.log(mobiletabnav);
//     spans.style.color='black';
//     console.log(spans)
// })

// const spans = Array.from(document.querySelectorAll('span'))
const spans= document.querySelectorAll('span')
const h1_tags = document.querySelectorAll('h1');

const random_line = document.querySelector('#line')

function changeContent(){
    if(checkbox.checked){
        mobiletabnav.style.backgroundColor='white';

        spans.forEach(Element=>{
            Element.style.color='black'
        })

        navbar.style.backgroundColor='#E7E7E7'
        // navbar.style.backgroundColor='#F2F3F5'
        h1_tags.forEach(Element=>{
            Element.style.color='black'
        })

        random_line.style.backgroundColor='#E7E7E7'

        indicator_helper.style.backgroundColor='white'

        signalhigh_black.classList.remove('hidden')
        signalhigh_white.classList.add('hidden')


        batterylow_black.classList.remove('hidden')
        batterylow_white.classList.add('hidden')


        search_black.classList.remove('hidden')
        search_white.classList.add('hidden')

        sliders_horizontal_black.classList.remove('hidden')
        sliders_horizontal_white.classList.add('hidden')


        ellipsis_black.classList.remove('hidden')
        ellipsis_white.classList.add('hidden')

        
        console.log(container)


    }
    else{
        mobiletabnav.style.backgroundColor = '#202125';

        spans.forEach(Element=>{
            Element.style.color='white'
        })

        navbar.style.backgroundColor='#303135'


        h1_tags.forEach(Element=>{
            Element.style.color='white '
        })

        random_line.style.backgroundColor='#303135'

        indicator_helper.style.backgroundColor='#202125'

        signalhigh_black.classList.add('hidden')
        signalhigh_white.classList.remove('hidden')


        batterylow_black.classList.add('hidden')
        batterylow_white.classList.remove('hidden')


        search_black.classList.add('hidden')
        search_white.classList.remove('hidden')

        sliders_horizontal_black.classList.add('hidden')
        sliders_horizontal_white.classList.remove('hidden')


        ellipsis_black.classList.add('hidden')
        ellipsis_white.classList.remove('hidden')


    }
}

checkbox.addEventListener('change', changeContent)
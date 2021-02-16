// SLIDER 

var app = new Vue({
    el: '#jumbo',
    data:{
        img: ['1.png', '2.png', '3.png'],
        count:0
    },
    methods:{
        slider(i) {
            this.count = i;
            gsap.from(".jumbo-img img", {x:'100%'});
        }
    }
});

// GALLERY IMG 

var app = new Vue({
    el: '#fourj',
    data:{
        gallery: [1,2,3,4,5,6,7,8],
    }
});

// SEARCH BAR 

let iconSearch = document.querySelector('.sear');
let barSearch = document.querySelector('.search-bar');
let close = document.querySelector('.close');

iconSearch.addEventListener("click", function() {
    barSearch.classList.toggle('display');
    gsap.from(".search-bar", {opacity:0, duration:0.8});
}); 

close.addEventListener("click", function(){
    barSearch.classList.toggle('display');
});

// ANIMAZIONI 

gsap.timeline()
    .from("#jumbo", {opacity: 0, duration: .2})
    .from(".text-area", {scale:0, ease: "back"})
    .from(".text-area a", {opacity:0, y:'1000px', stagger: .1})
    .from(".jumbo-img", {x:'120%', duration: .8, ease: "back.out"})
    .from(".num-slider", {scale:0, delay:0.5});











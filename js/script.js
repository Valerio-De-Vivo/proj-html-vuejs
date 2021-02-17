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
        },
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

gsap.from(".icons", {
    scrollTrigger: {
        trigger: ".icon",
        start: "top bottom",
        end:"center center",
        toggleActions: "restart none none none ",
        scrub:true
    },
    xPercent:400,
    opacity: 0,
});

gsap.from(".third-img", {
    scrollTrigger: {
        trigger: ".third-text",
        start: "top bottom",
        end:"center center",
        toggleActions: "restart none none none ",
        scrub:true
    },
    xPercent:-400,
    opacity: 0,
});

gsap.from(".row-gallery img", {
    scrollTrigger: {
        trigger: ".row-text",
        start: "top top",
        end:"center center"
    },
    scale:0,
    duration:2,
    stagger: .2,
    ease:"bounce"
});

gsap.from(".blog-article", {
    scrollTrigger: {
        trigger: ".title",
        start: "top 200px",
        end:"bottom center"
    },
    xPercent:400,
    duration:1.5,
    stagger: .2
});

gsap.from(".client", {
    scrollTrigger: {
        trigger: ".talk",
        start: "top 200px",
        end:"bottom center"
    },
    xPercent:400,
    duration:.6,
    stagger: .2
});

gsap.from(".scroll-top", {
    scrollTrigger: {
        trigger: ".third-text",
        start: "top 1200px",
        scrub:true
    },
    opacity: 0,
    duration:.6
});











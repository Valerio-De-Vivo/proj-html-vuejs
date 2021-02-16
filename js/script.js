var app = new Vue({
    el: '#jumbo',
    data:{
        img: ['1.png', '2.png', '3.png'],
        count:0
    },
    methods:{
        slider(i) {
            this.count = i;
        }
    }
});

var app = new Vue({
    el: '#fourj',
    data:{
        gallery: [1,2,3,4,5,6,7,8],
    }
});

let iconSearch = document.querySelector('.sear');
let barSearch = document.querySelector('.search-bar');
let close = document.querySelector('.close');

iconSearch.addEventListener("click", function() {
    barSearch.classList.toggle('display');
}); 

close.addEventListener("click", function(){
    barSearch.classList.toggle('display');
});









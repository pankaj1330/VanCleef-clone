
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time *500)
})

gsap.ticker.lagSmoothing(0)

const myNav = document.getElementById('mynav');
window.onscroll = function () { 
        if (document.documentElement.scrollTop >= 200 ) {
        myNav.style.background = 'white'
    } 
    else {
        myNav.style.background = 'transparent'
    }
};

//gsap

gsap.to('.image-1 img',{
    scale:2,
    opacity:.4,
    scrollTrigger:{
        trigger:'.image-1',
        start : "top 0%",
        end : 'bottom 0%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
}) 
gsap.from('.image-2 img',{
    // scaleX:.8,
    width:"85%",
    // brightness : 3,
    filter: "brightness(.5)",
    scrollTrigger:{
        trigger:'.image-2',
        start : "bottom 70%",
        end : 'bottom 0%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
})
gsap.from('.pattern-image1 img',{
    scale:8,
    scrollTrigger:{
        trigger:'.pattern-image1',
        start : "top 100%",
        end : 'bottom 100%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
}) 

gsap.from('#collection1',{
    y:-1000,
    scale:3,
    color:'white',
    scrollTrigger:{
        trigger:'.collection1',
        start : "top center",
        end : 'bottom center',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
}) 


// gsap.registerPlugin(ScrollTrigger);
function animateTab(pinSections,lists){
  pinSections.forEach((section, i) => {
    const list = lists[0];
    const list2 = lists[1];
    const listItems = gsap.utils.toArray("li", list);
    const listItems2 = gsap.utils.toArray("li", list2);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=" + listItems.length * 30 + "%",
        pin: true,
        scrub: true,
        id: i + 1,
        toggleActions : 'play pause resume reset'
      }
    });
    listItems.forEach((item, j) => {
      tl.add(() => {
        listItems.forEach((item, i) => {
          if(item === listItems[j]){
            item.classList.add('active')     
          }
          else{
            item.classList.remove('active')    
          }        
        })
      },0.3*j)
    });
    listItems2.forEach((item, j) => {  
  
      tl.add(() => {
        listItems2.forEach((item, i) => {
          if(item === listItems2[j]){
            item.classList.add('active','show')     
          }
          else{
            item.classList.remove('active','show')       
          }        
        })
      },0.3*j)
    });
  });
}

const pinSections1 = gsap.utils.toArray(".tab1");
const lists1 = gsap.utils.toArray(".main-tab1 ul");

animateTab(pinSections1,lists1);


gsap.from('.pattern-image2 img',{
    scale:8,
    scrollTrigger:{
        trigger:'.pattern-image2',
        start : "top 100%",
        end : 'bottom 100%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
    
}) 


const pinSections2 = gsap.utils.toArray(".tab2");
const lists2 = gsap.utils.toArray(".main-tab2 ul");

animateTab(pinSections2,lists2);


gsap.from('.pattern-image3 img',{
    scale:8,
    scrollTrigger:{
        trigger:'.pattern-image3',
        start : "top 100%",
        end : 'bottom 100%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
    
}) 

const pinSections3 = gsap.utils.toArray(".tab3");
const lists3 = gsap.utils.toArray(".main-tab3 ul");

animateTab(pinSections3,lists3);


gsap.from('.pattern-image4 img',{
    scale:8,
    scrollTrigger:{
        trigger:'.pattern-image4',
        start : "top 100%",
        end : 'bottom 100%',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
}) 

gsap.from('#collection2',{
    y:-1000,
    scale:2.4,
    color:'white',
    scrollTrigger:{
        trigger:'.collection2',
        start : "top center",
        end : 'bottom center',
        scrub : true,
        toggleActions : 'play pause reverse play'
    }
}) 
const top_wrapper = document.querySelector(".top-wrapper");
const top_impcat_1 = document.querySelector(".top-impact-1");
const top_impcat_2 = document.querySelector(".top-impact-2");
const top_impcat_3 = document.querySelector(".top-impact-3");
const top_bg_black = document.querySelector(".top-bg-black");
const op_animation = document.querySelector(".op-animation");
const op_animation_h1 = document.querySelector(".op-animation-h1");
const hum_menu_body = document.querySelector(".hum-menu-body");
const kouen_info = document.querySelector(".star-square");

const tl = gsap.timeline();
const tl_1 = gsap.timeline();
const tl_2 = gsap.timeline();
const tl_3 = gsap.timeline();
const tl_4 = gsap.timeline();
const tl_5 = gsap.timeline();
const tl_6 = gsap.timeline();
const tl_7 = gsap.timeline();

let mm = gsap.matchMedia();

mm.add("(min-width: 1024px)", () => {
tl_4.fromTo(top_bg_black, 1 , {backgroundColor: "rgba(0, 0, 0, 1)"}, {backgroundColor: "rgba(0, 0, 0, 0.4)",ease: Power2.easeInOut}).delay(2);
tl.fromTo(top_wrapper, 2 , {opacity: "0", height: "0%"}, {opacity: "1",height:"100vh",ease: Power2.easeInOut});
tl_1.fromTo(top_impcat_1, 1 , {opacity: "0", x:"-100px"}, {opacity:"1", x:"0", ease: Power2.easeInOut}).delay(3.2);
tl_2.fromTo(top_impcat_2, 1 , {opacity: "0", x:"100px"}, {opacity:"1", x:"0", ease: Power2.easeInOut}).delay(3.5);
tl_3.fromTo(top_impcat_3, 1 , {opacity: "0", x:"-100px"}, {opacity:"1", x:"0", ease: Power2.easeInOut}).delay(4);

tl_5.fromTo(op_animation, 1 , {opacity: "1"}, {opacity: "0",display: "none",ease: Power2.easeInOut}).delay(1);
tl_6.fromTo(op_animation, 1 , {opacity: "1"}, {opacity: "0",display: "none"}).delay(0.5);

tl_7.fromTo(kouen_info, 1 , {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut});
});

mm.add("(max-width: 599px)", () => {
    // ここに1024px以下のときのコードを書きます
    tl_4.fromTo(top_bg_black, 1 , {backgroundColor: "rgba(0, 0, 0, 1)"}, {backgroundColor: "rgba(0, 0, 0, 0.4)",ease: Power2.easeInOut}).delay(2);
    tl.fromTo(top_wrapper, 2 , {opacity: "0", height: "0"}, {opacity: "1",height:"auto",ease: Power2.easeInOut});
    tl_5.fromTo(op_animation, 1 , {opacity: "1"}, {opacity: "0",display: "none",ease: Power2.easeInOut}).delay(1);
tl_6.fromTo(op_animation, 1 , {opacity: "1"}, {opacity: "0",display: "none"}).delay(0.5);
});

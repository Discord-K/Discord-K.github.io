// window.onload = function (){
//     // const body = document.body;
//     // if (window.scrollY === 0)body.style.overflow = 'hidden';
//     // const cover = document.getElementById('cover');
//     // cover.style.opacity = '1';
//     // const headline = document.getElementById('headline');
//     // headline.style.opacity = '0';
//     // let top = 100;
//     // 首图标题浮现动效
//     // cover.onwheel = function (event){
//     //     const deltaY = event.deltaY;
//     //     const opacity = cover.style.opacity;
//     //
//     //     if(deltaY > 0 && opacity > 0.5){
//     //         cover.style.opacity = `${opacity - 0.25}`;
//     //         headline.style.opacity = `${parseFloat(headline.style.opacity) + 0.5}`;
//     //         top = top - 25;
//     //         headline.style.top = `${top}%`;
//     //     }else if(deltaY < 0 && opacity < 1 && opacity > 0){
//     //         cover.style.opacity = `${parseFloat(opacity)+0.25}`;
//     //         headline.style.opacity = `${parseFloat(headline.style.opacity) - 0.5}`;
//     //         top = top + 25;
//     //         headline.style.top = `${top}%`;
//     //     }
//     //     // if(cover.style.opacity <= 0.5) body.style.overflow = 'auto';
//     //     // if(cover.style.opacity > 0.75) body.style.overflow = 'hidden';
//     // }
//
//
//     // 滑动图层动效
//     const slides = document.getElementsByClassName('slide');
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];
//         // slide.style.height = screenHeight + 'px';
//         const height = slide.clientHeight + 100;
//         slide.onscroll = function () {
//             // 更换背景
//             const className = slide.className.split(' ')[1];
//             const children = (slide.children.length - 1) / 2;
//             if ( i === 1 ) {
//                 if (slide.scrollTop > 0 && slide.scrollTop <= 0.05 * height) slide.style.backgroundImage = `url('img/${className}1.png')`;
//                 if (slide.scrollTop > 0.2 * height && slide.scrollTop <= 1.1 * height) slide.style.backgroundImage = `url('img/${className}2.png')`;
//                 for (let j = 2; j < children + 1; j++) {
//                     const imgName = `url('img/${className}${j + 1}.png')`;
//                     if (slide.scrollTop > (j-1) * height && slide.scrollTop <= j * 1.1 * height) slide.style.backgroundImage = imgName;
//                 }
//             }else for (let j = 0; j < children; j++) {
//                 const imgName = `url('img/${className}${j + 1}.png')`;
//                 if (slide.scrollTop > j * 0.8 * height && slide.scrollTop <= (j + 1) * 1.2 * height) slide.style.backgroundImage = imgName;
//             }
//
//             //  内部滚完恢复
//             // 判断条件：最后一个空白的顶部 = slide顶部
//             const childrenList = slide.children;
//             const lastBlank = childrenList[childrenList.length - 1];
//             const blankTop = lastBlank.getBoundingClientRect().top;
//             const top = slide.getBoundingClientRect().top;
//             if (blankTop <= top) {
//                 slide.style.setProperty('position', 'relative');
//             }
//         }
//     }
// }
//
// window.onscroll = function (){
// //     屏幕顶端超过slide
//     const slides = document.getElementsByClassName('slide');
//     const top = window.scrollY;
//     for (let i = 0; i < slides.length; i++) {
//         const slide = slides[i];
//         const slideTop = slide.getBoundingClientRect().top;
//         if (slideTop>0){
//             console.log("ok", top, slideTop)
//             slide.style.setProperty('position', 'sticky');
//         }else
//             console.log("x", top, slideTop, slide.className)
//     }
//
// }
//
//
// // 导航栏动效
// // window.onscroll = function (){
// //     const top = [];
// //     for (let i = 0; i < 6; i++) {
// //         const anchor = document.getElementById('anchor' + i).getBoundingClientRect();
// //         top.push(anchor.top);
// //     }
// //     const order = top.filter(d=>(d<10)).length;
// //     const anchor = document.getElementById('nav' + order);
// //     for (let i = 1; i < 7; i++) {
// //         const nav = document.getElementById('nav' + i);
// //         nav.style.borderBottom = '0';
// //         nav.style.fontWeight = '400';
// //     }
// //     anchor.style.borderBottom = '#243b6d 4px solid';
// //     anchor.style.fontWeight = '900';
// // }
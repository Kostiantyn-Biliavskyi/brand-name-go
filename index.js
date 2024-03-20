var sumCord = 0, sumLeftSlider = 0, sumRigthSlider = 0;

function clickSlder() {
   let wraperSliderNavigation = document.querySelector('.wraperSliderNavigation');
   let sliderOne = document.querySelector('.sliderOne');
   let sliderFotoOneLength = document.querySelectorAll('.sliderFotoOne');
   let sliderOneWidth = document.querySelector('.sliderOne').offsetWidth;
   let sliderFotoOneWidth = document.querySelector('.sliderFotoOne').offsetWidth;
   // ----------
   let LeftSlider = document.querySelector('.LeftSlider');
   let sliderFotoSmalWidth = document.querySelector('.sliderFotoSmal').offsetWidth;
   // ----------
   let RigthSlider = document.querySelector('.RigthSlider');
   let RigthSliderAll = document.querySelectorAll('.rigthS');

   sumCord = -(sliderOneWidth / sliderFotoOneLength.length);

   sumRigthSlider = -((RigthSliderAll.length - 1) * sliderFotoSmalWidth);

   wraperSliderNavigation.addEventListener('click', (e) => {

      if (e.target.dataset.button == 'left' && sumCord != -(sliderFotoOneLength.length - 1) * sliderFotoOneWidth) {
         sumCord = sumCord - sliderFotoOneWidth;
         sliderOne.style.left = sumCord + 'px';

         sumLeftSlider = sumLeftSlider - sliderFotoSmalWidth;
         LeftSlider.style.left = sumLeftSlider + 'px';


         sumRigthSlider = sumRigthSlider - sliderFotoSmalWidth;
         RigthSlider.style.left = sumRigthSlider + 'px';
      }

      if (e.target.dataset.button == 'rigth' && sumCord != 0) {
         sumCord = sumCord + sliderFotoOneWidth;
         sliderOne.style.left = sumCord + 'px';

         sumLeftSlider = sumLeftSlider + sliderFotoSmalWidth;
         LeftSlider.style.left = sumLeftSlider + 'px';

         sumRigthSlider = sumRigthSlider + sliderFotoSmalWidth;
         RigthSlider.style.left = sumRigthSlider + 'px';
      }

   });
}
clickSlder()
// -----------------Бегунок-------------------------
var thumb = slider.querySelector('.linePoint');
var lineSum = 0;
var newLeft = 0;

// thumb.addEventListener('mousedown', clickPoint);
thumb.addEventListener('pointerdown', clickPoint);
/*
thumb.addEventListener('touchstart', xx);
let shiftX;
function xx(event) {

   let bacgroundLine = document.querySelector('.bacgroundLine');
   let bacgroundLineWidth1 = bacgroundLine.offsetWidth;
   let shiftT = event.changedTouches[0].clientX;
   let lineOnePr1 = bacgroundLineWidth1 / 100;
   let wraperLineTextSpan = document.querySelector('.wraperLineTextSpan');


   document.addEventListener('touchmove', onMouseMove1);
   document.addEventListener('touchend', onMouseUp1);

   function onMouseMove1(event) {
      newLeft = event.changedTouches[0].pageX - slider.getBoundingClientRect().left;

      if (newLeft < 0) {
         newLeft = 0;
      }

      let rightEdge = slider.offsetWidth - thumb.offsetWidth;

      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';

      lineSum = newLeft / lineOnePr1;
      if (lineSum >= 0) {
         wraperLineTextSpan.textContent = Math.floor(lineSum);
      }
      map.style.scale = 1 + (Math.floor(lineSum) / 10);
      bacgroundLine.style.left = -(bacgroundLineWidth1 - newLeft) + 'px';
   }

   function onMouseUp1() {
      document.removeEventListener('touchmove', onMouseMove1);
      document.removeEventListener('touchend', onMouseUp1);
   }
}
*/
function clickPoint(event) {

   thumb.setPointerCapture(event.pointerId);
   event.preventDefault();

   let bacgroundLine = document.querySelector('.bacgroundLine');
   let bacgroundLineWidth = bacgroundLine.offsetWidth;
   let lineOnePr = bacgroundLineWidth / 100;
   let wraperLineTextSpan = document.querySelector('.wraperLineTextSpan');
   // alert(slider.getBoundingClientRect().left + '---' + event.clientX)
   let shiftX = event.clientX - thumb.getBoundingClientRect().left;

   // document.addEventListener('mousemove', onMouseMove);
   // document.addEventListener('mouseup', onMouseUp);

   thumb.addEventListener('pointermove', onMouseMove);
   thumb.addEventListener('pointerup', onMouseUp);

   // thumb.onpointermove = function (event) {

   function onMouseMove(event) {

      // newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
      newLeft = event.clientX - slider.getBoundingClientRect().left - (thumb.offsetWidth / 2);

      if (newLeft < 0) {
         newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';

      lineSum = newLeft / lineOnePr;
      // if (lineSum >= 0) {
      wraperLineTextSpan.textContent = Math.floor(lineSum);
      // }
      map.style.scale = 1 + (Math.floor(lineSum) / 10);
      bacgroundLine.style.left = -(bacgroundLineWidth - newLeft) + 'px';
   };

   function onMouseUp(event) {
      // thumb.onpointerup = function onMouseUp(event) {
      // document.removeEventListener('mouseup', onMouseUp);
      // document.removeEventListener('mousemove', onMouseMove);
      thumb.removeEventListener('pointermove', onMouseMove);
      thumb.removeEventListener('pointerup', onMouseUp);
      thumb.onpointermove = null;
      thumb.onpointerup = null;

   };

   window.addEventListener('resize', () => {
      thumb.style.left = 0 + 'px';
      wraperLineTextSpan.textContent = 0;
      map.style.scale = 1;
      bacgroundLine.style.left = -100 + '%';
   });
};

thumb.ondragstart = function () {
   return false;
};
// ----------------Burger---------------------
document.querySelector('.burgerSmallMenu').addEventListener('click', (e) => {
   document.querySelector('.topMenuClick').classList.add('hop');
});
document.querySelector('.burgerSmallClose').addEventListener('click', () => {
   document.querySelector('.topMenuClick').classList.remove('hop');
});
// ---------------------imput search-----------------------------
document.querySelector('.searchInputText').addEventListener("click", function (e) {
   if (e.target.value === 'Search ') {
      e.target.value = " ";
   }
   e.target.onblur = function (e) {

      if (e.target.value.trim() == "") {
         e.target.value = 'Search ';

      }
   }
});
// -------------------------imput contact----------------------------
document.querySelector('.form').addEventListener("click", function (e) {

   if (e.target.value === 'Name* ' || e.target.value === 'Phone namber* ' || e.target.value === 'Leave your message if needed ') {
      e.target.value = "";
   }

   e.target.onblur = function (e) {

      if (e.target.value.trim() == "") {

         switch (e.target.name) {
            case 'name':
               e.target.value = 'Name* ';
               break;
            case 'phone':
               e.target.value = 'Phone namber* ';
               break;
            case 'commit':
               e.target.value = 'Leave your message if needed ';
               break;

            default:
               alert('ERROR');
               break;
         }
      }
   }
});
// -----------------------------------------------------
document.addEventListener('pointerdown', clickSeti);

function clickSeti(e) {
   e.target.style.scale = 1.5;

   document.addEventListener('pointerdown', clickZoom);
   function clickZoom(e) {
      e.target.style.scale = 1;
   };
};
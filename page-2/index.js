// ----------------Burger---------------------
document.querySelector('.burgerSmallMenu').addEventListener('click', (e) => {
   document.querySelector('.topMenuClick').classList.add('hop');
});
document.querySelector('.burgerSmallClose').addEventListener('click', () => {
   document.querySelector('.topMenuClick').classList.remove('hop');
});
// --------------------imput search----------------------
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
// -------------------- imput contact-----------------------
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
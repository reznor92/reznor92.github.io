jQuery(function ($) {
    $("#phone").mask("+7 (999) 99-99-99");
    $("#phone2").mask("+7 (999) 99-99-99");
});


$(".personal_area_title").click(function () {
    $(".personal_area_list").toggleClass('show');
});


// questions

var acc = document.getElementsByClassName("question_item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = document.getElementsByClassName("question_item_text");
      if (panel[i].style.maxHeight){
        panel[i].style.maxHeight = null;
      } else {
        panel[i].style.maxHeight = panel[i].scrollHeight + "px";
      } 
    });
}

// modal

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);
function openModal(){
    modal.style.display = 'flex';
}
function closeModal(){
    modal.style.display = 'none';
}
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// advantages

var tabs = document.querySelectorAll('.advantages_tab').length;
var content = document.querySelectorAll('.advantages_tabs_content');
var tab = document.querySelectorAll('.advantages_tab');
this.tab[0].classList.add('active');
this.content[0].style.display = "block";

function opentab(i) {
    this.tab[i].classList.add('active');
    this.content[i].style.display = "block";
    for (var n = 0; n < tabs; n++) {
        if (n != i) {
            content[n].style.display = "none";
            tab[n].classList.remove('active');
        }
    }
}


$('select.select-city').selectize({
});

$('select.header_content_form_select').selectize({
    placeholder: 'Врач, клиника, услуга'
});

$('select.header_content_form_select2').selectize({
    placeholder: 'Метро, город МО'
});



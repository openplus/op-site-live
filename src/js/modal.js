//
// modal.js
// Theme module
//

const modals = document.querySelectorAll('.modal');

function overflowHide() {
  document.documentElement.style.overflowX = 'visible';
}

function overflowShow() {
  document.documentElement.style.overflowX = '';
  if (document.getElementById("navvideoModal")) {
    var div = document.getElementById("navvideoModal");
    var iframe = div.getElementsByTagName("iframe")[0];
    iframe.setAttribute('src',iframe.getAttribute('src'));
    console.log(iframe.getAttribute('src'));
  }
}

modals.forEach((modal) => {
  modal.addEventListener('show.bs.modal', overflowHide);
  modal.addEventListener('hidden.bs.modal', overflowShow);
});

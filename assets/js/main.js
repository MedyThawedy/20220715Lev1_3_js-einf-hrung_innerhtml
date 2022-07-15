// https://www.w3schools.com/tags/tag_figure.asp
/*
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
*/

let vSection = document.getElementById('gallery');

let vFigure1 = '<figure><img src="https://images.unsplash.com/photo-1513543806865-85e29a7c0352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"';
vFigure1 += ' alt="Trulli" style="width:100%"><figcaption>Fig.1 - Valletta.</figcaption></figure>';
let vFigure2 = '<figure><img src="https://images.unsplash.com/photo-1592732268749-fdac4be747c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"';
vFigure2 += ' alt="Trulli" style="width:100%"><figcaption>Fig.2 - Marsaxlokk</figcaption></figure>';
let vFigure3 = '<figure><img src="https://images.unsplash.com/photo-1590261177475-f1f245ec70d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80" ';
vFigure3 += 'alt="Trulli" style="width:100%"><figcaption>Fig.3 - Blue Grotto</figcaption></figure>';

vSection.innerHTML = vSection + vFigure1;
vSection.innerHTML += vFigure2;
vSection.innerHTML += vFigure3; 

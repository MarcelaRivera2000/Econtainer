var btnAbrir=document.getElementById('boton1'),
    overlay= document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnCerrar=document.getElementById('btn-cerrar-popup');

var btnAbrir2=document.getElementById('boton'),
    overlay2= document.getElementById('overlay2'),
    popup2= document.getElementById('popup2'),
    btnCerrar2=document.getElementById('btn-cerrar-popup2');

$(document).ready(function(){
    $(window).scroll(function(){//para saber cuando el usuario usa el scroll
        if($(this).scrollTop()>0){
           $('header').addClass('header2')
        }else{
          $('header').removeClass('header2')
        }
    });
});

btnAbrir.addEventListener('click',function(){
  overlay.classList.add('active');
});

btnCerrar.addEventListener('click',function(){
    overlay.classList.remove('active');
});

btnAbrir2.addEventListener('click',function(){
    overlay2.classList.add('active');
  });
  
  btnCerrar2.addEventListener('click',function(){
      overlay2.classList.remove('active');
  });


var bolsa= document.getElementById('bolsa'),
  botella= document.getElementById('botella'),
  vaso= document.getElementById('vaso'),
  input=document.getElementById('tam'),
  cantBols=document.getElementById('cantBols'),
  cantBote=document.getElementById('cantBote'),
  cantVas=document.getElementById('cantVas'),
  progresBar=document.getElementById('progresBar');

bolsa.addEventListener('click',function(){
    var cont=input.value;
    cantBols.innerHTML="Cantidad: "+cont;
    input.value=' ';
    progresBar.value=progresBar.value+4;
});

vaso.addEventListener('click',function(){
  var cont=input.value;
  cantVas.innerHTML="Cantidad: "+cont;
  input.value=' ';
  progresBar.value=progresBar.value+4;
});

botella.addEventListener('click',function(){
  var cont=input.value;
  cantBote.innerHTML="Cantidad: "+cont;
  input.value=' ';
  progresBar.value=progresBar.value+4;
});
$(document).ready(function(){
   $('#config-btn').click(function(){
       $('#create-config').load('create-config.html');
   });

    $('#product-btn').click(function(){
       $('#product-config').load('create-config.html');
   });

    $('#related-btn').click(function(){
       $('#related-product').load('related-product.html');
    });

    $('#choose-product').click(function(){
       $('#list-area').load('choose-product.html');
    });

});
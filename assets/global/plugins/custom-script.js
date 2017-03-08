$(document).ready(function(){
   $('#config-btn').click(function(){
       $('#create-config').load('create-config.html');
   });

    $('#product-btn').click(function(){
       $('#product-config').load('choose-product.html');
   });

    $('#related-btn').click(function(){
       $('#related-product').load('related-product.html');
    });

    $('#select-product').click(function(){
       $('#selected-product').load('select-product.html');
    });

});
(function(){
    $(".boton_envio").click(function() {
 
        var codigo = $(".codigo").val();
		    validacion_codigo = /^[1-2-3-4-5-6-7-8-9]+$/;
            servicio = $(".servicio").val();
            mensaje = $(".mensaje").val();
 
        if(codigo == "" || !validacion_codigo.test(codigo)){
            $(".codigo").focus();    
            return false;
        }else if(servicio == ""){
            $(".servicio").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'codigo='+ codigo + '&servicio=' + servicio + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "http://www.createlaweb.esy.es/eyc_pluss/phpscrip/app_email.php",
                data: datos,
                success: function() {  
                    $('.ajaxgif').hide();
                    $('.msg').text('Enviado!').addClass('msg_ok').animate({ 'right' : '130px' }, 300);   
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);                 
                }
            });
            return false;
        }
 
    });
})();

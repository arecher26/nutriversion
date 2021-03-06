// JavaScript Document

$(document).ready(function(){
    $("#resultado").hide();
    $("label[contenteditable=true]").on("blur",function(){
        var id_dieta = $('#id_dieta').text();
        var ids = $(this).attr("id").split(';');
        var id_comida = ids[0];
        var id_categoria = ids[1];
        var valor = $(this).text();
        var nombre = $('#nombre_dieta').text();
        $.post( "http://localhost/nutriversion/index.php/clientepro/modificar_dieta", {id_dieta:id_dieta,id_comida:id_comida,id_categoria:id_categoria,porcion:valor,nombre_dieta:nombre})
			  .done(function( data ) {
				$( "#resultado" ).html(data);
			});
    })
    $("#nombre_dieta").on("blur",function(){
        var id_dieta = $('#id_dieta').text();
        var nombre = $('#nombre_dieta').text();
        if (nombre.length > 3){
            $.post( "http://localhost/nutriversion/index.php/clientepro/modificar_dieta", {id_dieta:id_dieta,nombre_dieta:nombre})
			  .done(function( data ) {
				$( "#resultado" ).html(data);
			});
        }else{
            $("#validacion_nombre").html("Ingrese un nombre correcto").show(500,function(){
                $("#resultado").delay(3000).hide(500);
			});
        }
    })
    $("#confirmar").on("click",function(){
        var id_dieta = $('#id_dieta').text();
        $.post( "http://localhost/nutriversion/index.php/clientepro/confirmar_dieta", {id_dieta:id_dieta})
			  .done(function(data){
				$("#resultado").html(data).show(500,function(){
				    $("#resultado").delay(3000).hide(500);
				});
                
			});
    })
});


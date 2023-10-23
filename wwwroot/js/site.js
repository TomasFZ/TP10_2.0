// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MostrarActores(idSerie)
{
    $.ajax(
        {
            type: 'POST',
            dataType: 'JSON',
            url:'/Home/VerDetalleActores', //ver si el modal es en un nuevo.cshtml. 
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                for(let act of response){ //ver si es let o const
                    console.log(act.Nombre);
                    $("#Nombre").html(act.nombre);  
                }
            }
        }
    );
}

function MostrarTemporadas(idSerie) 
{
    $.ajax(
    
        {
            type: 'POST',
            dataType: 'JSON',
            url:'/Home/VerDetalleTemporadas', //ver si el modal es en un nuevo.cshtml. Ver si aca va el nombre de la funcion del controller
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                for(let tem of response){
                    console.log(tem.nombre);
                    $("#Nombre").html(tem.tituloTemporada); //ver si es asi o como esta abajo. 
                    $("#Num").html(tem.numeroTemporada);
                }
            }
        }
    );
}

function MostrarInfoSerie(idSerie) 
{
    $.ajax(
    
        {
            type: 'POST',
            dataType: 'JSON',
            url:'/Home/VerSerie', //ver si el modal es en un nuevo.cshtml. Ver si aca va el nombre de la funcion del controller
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                $("#Nombre").html("Nombre: " + response.nombre);
                $("#Texto").html("Sinopsis: " + response.sinopsis);
                $("#Num").html("Año de Inicio: " + response.añoInicio);
            }
        }
    );
}
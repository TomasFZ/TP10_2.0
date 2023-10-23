// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function MostrarActores(idSerie)
{
    $.ajax{
        {
            type: 'POST',
            dataType: 'JSON',
            url:'/Home/VerDetalleActores', //ver si el modal es en un nuevo.cshtml. 
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                $("#NombreActor").html(response.Nombre);
            }
        }
    }

}

function MostrarTemporadas(idSerie) //tiene que ser una lista. 
{
    $.ajax
    {
        {
            type: 'POST',
            dataType: 'JSON',
            url:'/Home/VerDetalleTemporadas', //ver si el modal es en un nuevo.cshtml. Ver si aca va el nombre de la funcion del controller
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                for(const tem of response){
                    console.log(tem.Nombre);
                    $("#TiuloTemporada").html(tem.TituloTemporada); //ver si es asi o como esta abajo. 
                    $("#NumeroTemporada").html(tem.NumeroTemporada);
                }
            }
        }
    }

}
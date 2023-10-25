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
                let string = "";
                let num = "";
                for(let act of response){
                    console.log(act.nombre); 
                    string = string + " " + act.nombre + "<br>"
                }
                $("#Texto").html(string); 
                $("#Nombre").html("Actores");
                $("#Num").html(""); 
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
            url:'/Home/VerDetalleTemporadas', 
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                let string = "";
                let num = "";
                for(let tem of response){
                    console.log(tem.tituloTemporada);
                    console.log(tem.numeroTemporada)
                    string = string + " " + tem.tituloTemporada + "<br>";
                    num = num + " " + tem.numeroTemporada;
                } 
                $("#Texto").html(string); 
                $("#Nombre").html("Temporadas"); 
                $("#Num").html(num); 
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
            url:'/Home/VerSerie', 
            data: {IdSerie : idSerie}, //
            success: 
            function (response)
            {
                console.log(response.nombre)
                console.log(response.sinopsis)
                console.log(response.añoInicio)
                $("#Nombre").html("Info de " + response.nombre);
                $("#Texto").html("Sinopsis: " + response.sinopsis);
                $("#Num").html("Año de Inicio: " + response.añoInicio);
            }
        }
    );
}//anda todo menos mostrarInfoSerie mentira ya esta. oficialmente terminado el tp.
using Microsoft.AspNetCore.Mvc;

namespace TP10.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.ListaSeries = BD.CargarSeries();
        return View();
    }

    public Actores VerDetalleActores(int idSerie){
        return BD.ObtenerActores(idSerie);
    }

    public Temporadas VerDetalleTemporadas(int idSerie){
        return BD.ObtenerTemporadas(idSerie);
    }
}

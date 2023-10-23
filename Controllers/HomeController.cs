using Microsoft.AspNetCore.Mvc;
using TP10.Models;

namespace TP10.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        ViewBag.ListaSeries = BD.CargarSeries();
        return View();
    }

    public List<Actores> VerDetalleActores(int idSerie){
        return BD.ObtenerActores(idSerie);
    }

    public List<Temporadas> VerDetalleTemporadas(int idSerie){
        return BD.ObtenerTemporadas(idSerie);
    }

    public Series VerSerie(int idSerie){
        return BD.VerSerie(idSerie);
    }
}
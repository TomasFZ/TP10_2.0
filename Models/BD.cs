using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;

namespace TP10.Models
{
    public class BD
    {
        private static string _connectionString = @"Server=.; Database=BDSeries; Trusted_Connection=True;"; 
        public static List<Series> CargarSeries()
        {
            List<Series> ListaSeries = new List<Series>(); 
            using(SqlConnection db = new SqlConnection(_connectionString)){
                string sql = "Select * from Series";
                ListaSeries = db.Query<Series>(sql).ToList();
                return ListaSeries;
            }
        }

        public static List<Actores> ObtenerActores(int idSerie)
        {
            List<Actores> ListaActores = new List<Actores>();
            using(SqlConnection db = new SqlConnection(_connectionString)){
                //Actores act = new Actor();
                string sql = "Select * from Actores where IdSerie = @pIdSerie";
                ListaActores = db.Query<Actores>(sql, new {pIdSerie = idSerie}).ToList();
                return ListaActores;
            }
        }

        public static List<Temporadas> ObtenerTemporadas(int idSerie)
        {
            List<Temporadas> ListaTemporadas = new List<Temporadas>();
            //Temporadas tem = new Temporadas();
            using(SqlConnection db = new SqlConnection(_connectionString)){
                string sql = "Select * from Temporadas where IdSerie = @pIdSerie";
                ListaTemporadas = db.Query<Temporadas>(sql, new {pIdSerie = idSerie}).ToList();
                return ListaTemporadas;
            }
        }

        public static Series VerSerie(int idSerie){
            Series s = new Series();
            using(SqlConnection db = new SqlConnection(_connectionString)){
                string sql = "Select * from Series where IdSerie = @pIdSerie";
                 s = db.QueryFirstOrDefault<Series>(sql, new {pIdSerie = idSerie});
                return s;
            }
        }
    }
}
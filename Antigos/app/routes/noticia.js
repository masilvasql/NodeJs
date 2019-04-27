module.exports = function(app) {
    app.get("/noticia", function(req, res) {
      var connection = app.config.dbConnection();

      var noticiasModel = app.app.models.noticiasModel;

      noticiasModel.getNoticia(connection, function(err, result) {
        res.render("noticias/noticia", { noticias: result });
      });

    });
  };
  
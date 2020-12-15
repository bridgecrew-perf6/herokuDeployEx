const express = require("express")
var app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });

app.listen(PORT, function() {
    console.log("We are listening on PORT: ", PORT)
})
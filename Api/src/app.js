const express = require("express");
let cors = require("cors");
const morgan = require("morgan");
const route = require('./Routes/index');
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

mongoose.set('strictQuery', true)
// Middleware
app.use(cors());
app.use(express.json())
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', process.env.CORS_URL||"http://localhost:3000"); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
// app.use(express.json());
// app.use(morgan("dev"));

// // Routes
// app.use("/products", require("./routes/productRoutes"));
// app.use("/categories", require("./routes/categoryRoutes"));
// app.use("/features", require("./routes/featuresRoutes"));
// app.use("/favorites", require("./routes/favoritesRoutes"));
// app.use("/users", require("./routes/userRoutes"));
// app.use("/lugares", require('./routes/lugaresRoutes'))
// app.use("/admin", require("./routes/adminRoutes"))
// app.use("/shoping", require("./routes/shopingCarRoutes"))
// app.use("/paypal", require("./routes/paypalRoutes"))
// app.use("/FormBuy",require("./routes/formbuyRoute"))
// app.use("/Orden",require("./routes/ordenRoute"))

app.use("/api",route)

// Route Deploy
// app.get("/api", function (req, res) {
//   res.json({ msg: "Servidor funcionando" });
// });

module.exports ={
    app
}

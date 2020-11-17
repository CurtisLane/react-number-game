const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes")(app);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes, both API and view
app.use(express.static("./client/public"));

// Connect to the mysql DB
// Start the API server
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server listening on PORT ${PORT}!`)
  );
});

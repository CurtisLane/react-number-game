const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

// Connect to the mysql DB


// Start the API server
app.listen(PORT, () =>
  console.log(`Server listening on PORT ${PORT}!`)
);

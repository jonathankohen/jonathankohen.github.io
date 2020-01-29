/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require("express");
const next = require("next")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app 
    .prepare()
    .then(() => {
        const server = express();
        const showRoutes = require("./routes/index.js");

        server.use("/api", require("./routes/shows"));

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        models.sequelize.sync().then(function() {
            server.listen(PORT, err => {
                if (err) throw err;
                console.log(`> Ready on ${PORT}`);
            })
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from 'express';
import App from "../src/App.js";
import {StaticRouter} from "react-router-dom/server";

const app = express();
app.get('*', (req, res) => {
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );

    return res.send("<!DOCTYPE html>" + app);
});

app.use(express.static('./build'));

app.listen(3000, () => {
    console.log('Server is listening to port: 3000')
})
// var require: any;
// var module: any;
// var into: any;
import Express from 'express';
import {Application}  from "express";
import bodyParser from 'body-parser'
import cors from 'cors'

var consign = require('consign');

var app: Application = Express()

app.use('/uploads', Express.static("uploads"))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(cors())

consign()
    .include('app/routes')
    .then('config/dbConnection.ts')
    .into(app)

module.exports = app
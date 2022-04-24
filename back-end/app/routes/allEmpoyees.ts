import { Application } from "express";

// @ts-nocheck
const Crud = require('../../models/all')

module.exports = (app:Application) => {
    app.get('/allemployees', Crud.getAllEmployees);
}
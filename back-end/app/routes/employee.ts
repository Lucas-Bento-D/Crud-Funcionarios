import { Application } from "express";

const Crud = require("../../models/all")

module.exports = (app:Application) => {
    app.get('/employee', Crud.getEmployee);
}
import {Application} from "express"


const Crud = require("../../models/all")

const multer = require("multer")

import bodyParser from 'body-parser'
const path = require('path')
const express = require('express')
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
    destination: (req:any, file:any, callBack:any) => {
        callBack(null, 'uploads/images/')
    },
    filename: (req:any, file:any, callBack:any) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

module.exports = (app: Application) => {
    app.post('/inclusionemployeeform', upload.single('foto'), Crud.addNewEmployee);
}
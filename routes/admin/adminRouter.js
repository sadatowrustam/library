const express = require('express')
const router = express.Router()
const {uploadExcel, getAllBooks, giveBook, getOneBook, receiveBook, getActions}=require("../../controllers/admin/booksControllers")
const { uploadStudentExcel, getAllStudents } = require('../../controllers/admin/studentsControllers')
router.post("/books/upload-excel",uploadExcel)
router.get("/books",getAllBooks)
router.get("/books/:id",getOneBook)
router.post("/books/give",giveBook)
router.post("/books/receive",receiveBook)
router.post("/students/upload-excel",uploadStudentExcel)
router.get("/students",getAllStudents)
router.get("/actions",getActions)

module.exports = router
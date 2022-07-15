const {Router} = require("express")
const config = require("config")
const {db} = require('../db')

const router = Router()

//
router.get(
    '/getData',
    [],
    async (req,res)=>{
        console.log("asdasdsad")
        db.dataTable.create()
    }
)


module.exports = router
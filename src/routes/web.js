const express=require('express');
const router=express.Router();
const {getHOme,getHELLO}=require('../controllers/homeController')

router.get('/',getHOme)
router.get('/hello',getHELLO)

module.exports=router
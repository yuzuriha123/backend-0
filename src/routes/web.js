const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('hello')
})
router.get('/hello',(req,res)=>{
    res.render('sample.ejs')
})

module.exports=router
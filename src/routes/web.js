const express=require('express');
const router=express.Router();
const {getHOme,getHELLO,postCreateUser,getCreateUser,getupdateuser,postUpdateUser}=require('../controllers/homeController')

router.get('/',getHOme)
router.get('/hello',getHELLO)
router.get('/create-user',getCreateUser)
router.get('/updateuser/:id',getupdateuser)
router.post('/create-user',postCreateUser)
router.post('/update-user',postUpdateUser)


module.exports=router



//file này lấy các route controller ở bên controler để thực thi
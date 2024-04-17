const getHOme =(req,res)=>{
    res.send('hello')
}

const getHELLO=(req,res)=>{
    res.render('sample.ejs')
}

module.exports={
    getHOme,
    getHELLO
}
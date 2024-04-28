const { json } = require("express");
const connection = require("../config/db");
const { getALLUsers,INSERTUser } = require("../services/CRUDServices");


const getHOme = async (req, res) => {
  
  
  let results=await getALLUsers()
  console.log('results',results)
  return res.render("home.ejs",{listUser:results});

};

const getHELLO = (req, res) => {
  res.render("sample.ejs");
};
const getCreateUser = (req, res) => {
  res.render("create.ejs");
};
const getupdateuser= async(req,res)=>{
  const userID= req.params.id;
  let[results,fields]=await connection.query('select * from Users where id=?',[userID])
  console.log(results)
  let user = results && results.length>0 ? results[0]:{}
  res.render('edit.ejs',{useredit:user})
}
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(email, name, city);

  let [results, fields] = await connection.query(
    `INSERT INTO
  Users (email, name, city)
   VALUES (?,?,?);`,
    [email, name, city]
  );
  console.log('check result>>',results)
  res.send('user created')
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let id =req.body.id;
  console.log(email, name, city,id);

  let [results, fields] = await connection.query(
    `UPDATE Users
SET    email = ?,city = ?,name = ?
WHERE  id=?;`
,
    [email,city,name,id]
  );
  console.log('check result>>',results)
  res.send('user updated')
};
module.exports = {
  getHOme,
  getHELLO,
  postCreateUser,
  getCreateUser,
  getupdateuser,
  postUpdateUser
};
//file này để controll các route

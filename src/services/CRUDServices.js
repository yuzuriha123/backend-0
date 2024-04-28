const connection=require('../config/db')

const  getALLUsers= async ()=>{
    const [results, fields] = await connection.query(
        `SELECT * FROM Users`)
    return results;
}
const INSERTUser= async(email, name, city)=>{
    let [results, fields] = await connection.query(
        `INSERT INTO
      Users (email, name, city)
       VALUES (?,?,?);`,
        [email, name, city]
      );

}
module.exports={
    getALLUsers,
    INSERTUser
}
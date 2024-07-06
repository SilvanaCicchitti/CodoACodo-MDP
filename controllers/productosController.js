const db =require ('../db/db')

const getAllProducts = (req,res) =>{
    const sql ='SELECT * FROM products';
    db.query(sql, (err, results)=>{
        if(err) throw err;
        res.json(results);
    })
}

module.exports ={
    getAllProducts
}
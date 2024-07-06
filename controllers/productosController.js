const db =require ('../db/db')

const getAllProducts = (req,res) =>{
    const sql ='SELECT * FROM products';
    db.query(sql, (err, results)=>{
        if(err) throw err;
        res.json(results);
    })
}

const getProductsById =(req,res) => {
    const {id_product} =req.params;
    const sql ='SELECT * FROM products WHERE id_product = ?';
    db.query(sql, [id_product], (err, results) =>{
        if (err){
            console.error('Error al obtener producto:', err);
            res.status(500).json({error:'Error al obtener producto'});
            return;
        }
        res.json(results);
    })
}

module.exports ={
    getAllProducts,
    getProductsById
}
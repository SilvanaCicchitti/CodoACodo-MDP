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

const createProduct = (req,res) => {
    const {name, data, imageUrl, stock} =req.body;
    const sql= 'INSERT INTO products (name, data, imageUrl, stock) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, data, imageUrl, stock], (err, results) =>{
        if (err){
            console.error('Error al crear producto:', err);
            res.status(500).json({error:'Error al crear producto'});
            return;
        }
        res.json({messege:'Producto creado', productID: results.insertId})
        
    })

}

const updateProduct = (req,res) =>{
    const {id_product}= req.params;
    const {name, data, imageUrl, stock} =req.body;
    const sql ='UPDATE products SET name = ?, data = ?, imageUrl= ?, stock= ? WHERE id_product = ?';
    db.query( sql, [name, data, imageUrl, stock, id_product], (err, result)=>{
        if(err){
            console.error('Error al modificar producto:', err);
            res.status(500).json({error:'Error al modificar producto'});
            return;
        }
        res.json ({message: "producto actualizado"});
});
};

module.exports ={
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
}
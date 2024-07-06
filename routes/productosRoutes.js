const express=require ('express')
const router = express.Router()
const productosController =require ('../controllers/productosController')

router.get('/', productosController.getAllProducts)
router.get('/:id_product', productosController.getProductsById)
//router.post('/', productosController.createProduct)
//router.put('/:id', productosController.updateProduct)
//router.delete('/:id', productosController.deleteProduct)

module.exports = router;

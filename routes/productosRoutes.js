const express=require ('express')
const router = express.Router()
const productosController =require ('../controllers/productosController')

router.get('/', productosController.getAllProducts)
router.get('/:id_product', productosController.getProductsById)
router.post('/', productosController.createProduct)
router.put('/:id_product', productosController.updateProduct)
//router.delete('/:id_product', productosController.deleteProduct)

module.exports = router;

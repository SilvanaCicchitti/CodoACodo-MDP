const express = require('express');
const productosRoutes =require ('../routes/productosRoutes')
const app = express();
const PORT = 3101;

app.use(express.json());
app.use('/productos', productosRoutes);


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}/`);
});
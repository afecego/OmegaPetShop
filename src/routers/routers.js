const { Router } = require('express');
var controllerProducts = require('../controllers/controllerProducts');
const router = Router();

router.post('/create', controllerProducts.saveProduct);
router.get('/listall/:idb?',controllerProducts.listAllData);
router.get('/search/:id',controllerProducts.searchData);
router.put('/update/:id', controllerProducts.updateProduct);
router.delete('/delete/:id',controllerProducts.deleteProduct);

module.exports = router;

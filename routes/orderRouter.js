const router = require('express').Router()
const orderCtrl = require('../controllers/orderCtrl')

router.route('/order')
    .get(orderCtrl.getOrder)
    .post(orderCtrl.placeOrder)

router.route('/order/:id')
    .delete(orderCtrl.deleteOrder)
    .put(orderCtrl.updateOrder)

module.exports = router
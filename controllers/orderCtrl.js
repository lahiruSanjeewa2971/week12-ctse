const Orders = require('../models/order')

const orderCtrl = {
    getOrder: async(req, res) => {
        try {
            const orders = await Orders.find()
            res.json(orders)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    placeOrder: async (req, res) => {
        try {
            const {order_id, client_id, product_id, qty, totalPrice, deliveryAddress} = req.body;
            
            const newOrder = new Orders({
                order_id, 
                client_id, 
                product_id, 
                qty, 
                totalPrice, 
                deliveryAddress
            })
            await newOrder.save()
            res.json({msg: "Order Placed...!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteOrder: async(req, res)=>{
        try{
            await Orders.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Order"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateOrder: async(req, res)=>{
        try{
            const {qty, totalPrice, deliveryAddress} = req.body;
           
            await Orders.findOneAndUpdate({_id: req.params.id}, {
                qty, 
                totalPrice, 
                deliveryAddress
            })

            res.json({msg: "Updated an Order"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = orderCtrl
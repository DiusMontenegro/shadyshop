import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @description   Create new order
// @route         POST /api/orders
// @access        Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error('No Order Items');
    } else {
        const order = new Order({
            orderItems: orderItems.map((x) => ({
                ...x,
                product: x._id,
                _id: undefined,
            })),
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        res.status(201).json(createdOrder);
    }
});

// @description   Get logged-in user orders
// @route         GET /api/orders/mine
// @access        Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
});

// @description   Get order by id
// @route         GET /api/orders/:id
// @access        Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params._id).populate(
        'user',
        'name email'
    );

    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @description   Update order to paid
// @route         PUT /api/orders/:id/pay
// @access        Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('Update order to paid');
});

// @description   Update order to delivered
// @route         PUT /api/orders/:id/deliver
// @access        Private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('Update order to delivered');
});

// @description   Get all orders
// @route         GET /api/orders
// @access        Private/admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('Get all orders');
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders,
};

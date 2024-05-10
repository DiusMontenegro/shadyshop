import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @description   Create new order
// @route         POST /api/orders
// @access        Private
const addOrderItems = asyncHandler(async (req, res) => {
    res.send('Order items added');
});

// @description   Get logged-in user orders
// @route         GET /api/orders/mine
// @access        Private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('Get my orders');
});

// @description   Get order by id
// @route         GET /api/orders/:id
// @access        Private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('Get order by id');
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

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 8000;

connectDB(); // mongoDB connection
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { TokenService } from './services/TokenService';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize TokenService
TokenService.initialize();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes
app.use('/', routes);
//  listern port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

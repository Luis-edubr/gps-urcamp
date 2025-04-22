import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { connectDB } from './config/database';
import routes from './routes';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(helmet()); // Segurança
app.use(compression()); // Compressão
app.use(cors()); // CORS
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded

// Rotas
app.use('/api', routes);

// Rota de saúde
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'GPS Urcamp API is running' });
});

// Inicialização do servidor
const startServer = async () => {
  try {
    // Conectar ao MongoDB
    await connectDB();
    
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;

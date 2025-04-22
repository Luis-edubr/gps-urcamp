import { Router } from 'express';
import buildingRoutes from './building.routes';
import locationRoutes from './location.routes';
import navigationRoutes from './navigation.routes';

const router = Router();

// Rotas para prédios e plantas
router.use('/buildings', buildingRoutes);

// Rotas para localizações (salas, pontos de interesse)
router.use('/locations', locationRoutes);

// Rotas para navegação
router.use('/navigation', navigationRoutes);

export default router;

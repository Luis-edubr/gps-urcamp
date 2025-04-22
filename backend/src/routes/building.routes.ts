import { Router } from 'express';
import BuildingController from '../controllers/building.controller';

const router = Router();
const controller = new BuildingController();

// Listar todos os prédios
router.get('/', controller.getAllBuildings);

// Obter um prédio específico por ID
router.get('/:id', controller.getBuildingById);

// Criar um novo prédio
router.post('/', controller.createBuilding);

// Atualizar um prédio existente
router.put('/:id', controller.updateBuilding);

// Excluir um prédio
router.delete('/:id', controller.deleteBuilding);

// Upload de planta para um prédio específico
router.post('/:id/blueprint', controller.uploadBlueprint);

// Obter planta de um prédio específico
router.get('/:id/blueprint', controller.getBlueprint);

// Obter todos os andares de um prédio
router.get('/:id/floors', controller.getBuildingFloors);

export default router;

import { Router } from 'express';
import LegalDataController from './legal_data.controller.js';

const router = Router();

router.get('/', LegalDataController.getAllLegalData);
router.get('/:id', LegalDataController.getLegalDataById);
router.post('/', LegalDataController.createLegalData);
router.put('/:id', LegalDataController.updateLegalData);
router.delete('/:id', LegalDataController.deleteLegalData);

export default router;

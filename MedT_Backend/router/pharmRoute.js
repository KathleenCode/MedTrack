import { Router } from "express";
import { addMedicine, allMedicines, removeMedicine, updateMedicine, singleMedicine } from "../controller/pharmController.js"

const router = Router();

router.post('/', addMedicine)
router.get('/', allMedicines)
router.delete('/:id', removeMedicine)
router.put('/:id', updateMedicine)
router.get('/:id', singleMedicine)


export default router;
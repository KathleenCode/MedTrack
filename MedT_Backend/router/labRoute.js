import { Router } from "express";
import { addLabItem, allLabItems, removeLabItem, singleItem, updateLabItem } from "../controller/labController.js";

const router = Router();

router.post('/', addLabItem)
router.get('/', allLabItems)
router.delete('/:id', removeLabItem)
router.put('/:id', updateLabItem)
router.get('/:id', singleItem)


export default router;
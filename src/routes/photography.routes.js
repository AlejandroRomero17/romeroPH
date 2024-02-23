import { Router } from "express";
import {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService,
  getHomePage,
  getPhotographers
} from "../controllers/services.controller.js";

const router = Router();

router.get("/home", getHomePage);
router.get("/photographers", getPhotographers);
// Obtener todos los servicios
router.get("/", getAllServices);
router.get("/:serviceId", getService);
router.post("/", createService);
router.post("/:serviceId", updateService);
router.get("/delete/:serviceId", deleteService);

export default router;

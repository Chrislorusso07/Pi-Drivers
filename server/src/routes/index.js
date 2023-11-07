const { Router } = require("express");
const { getTeams } = require("../controllers/getTeams");
const createDrivers = require("../controllers/createDrivers");
const { getAllDriversHand } = require("../handlers/getDriversH");
const { getIdHandler } = require("../handlers/getIdH");

const router = Router();
router.get("/drivers", getAllDriversHand);
router.get("/drivers/:id", getIdHandler);
router.post("/drivers", createDrivers);
router.get("/teams", getTeams);
module.exports = router;

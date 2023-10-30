const { Router } = require("express");
const getIdDrivers = require("../controllers/getIdDrivers");
const getTeams = require("../controllers/getTeams");
const createDrivers = require("../controllers/createDrivers");
const getDrivers = require("../controllers/getDrivers");

const router = Router();
router.get("/drivers", getDrivers);
router.get("/drivers/:idDriver", getIdDrivers);
router.post("/drivers", createDrivers);
router.get("/teams", getTeams);
module.exports = router;
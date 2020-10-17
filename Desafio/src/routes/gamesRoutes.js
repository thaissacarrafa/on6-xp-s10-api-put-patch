const express = require("express");
const router = express.Router();
const controller = require("../controller/gamesController");
const cors = require("cors");

router.put("/jogos/:id", cors(), controller.atualizarGamePut);
router.patch("/jogos/:id", cors(), controller.atualizarGamePatch);

module.exports = router
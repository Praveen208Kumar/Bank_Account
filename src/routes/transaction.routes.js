const { Router } = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const transactionController = require("../controllers/transaction.controller")
const transactionRoutes = Router();

// regular user transaction
transactionRoutes.post("/", authMiddleware.authMiddleware, transactionController.createTransaction)

// system user can add initial funds to any account
transactionRoutes.post("/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)

module.exports=transactionRoutes
const express = require("express")
const { removeTicket, modifyTicket, createNewTicket, getAllTickets, getSingleTicket } = require("../controller/logicFile")

const routes = express.Router()



routes.get("/ticket/:id", getSingleTicket) //byid
routes.get("/list", getAllTickets) //list
routes.put("/ticket/:id", modifyTicket) //update
routes.delete("/ticket/:id", removeTicket) //delete
routes.post("/ticket", createNewTicket) //create

module.exports = routes;
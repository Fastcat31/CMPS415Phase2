const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
var dataBaseFile = require("./database/dataBaseFile")
let routes = require("./route/ticketRouteFile")

dataBaseFile()

const expressApp = express()
expressApp.use(express.json())
expressApp.use("/rest", routes)

//

expressApp.get("/ticket/:id", (req, res) => {
    const ticketId = req.params.id;
    // retrieves ticket
    res.send(ticket); 
});

//expressApp.get("/ticket/:id", getSingleTicket) //byid



//expressApp.get("/list", getAllTickets) //list


function modifyTicket(req, res) {
    const ticketId = req.params.id;
    
    var {
        type = '',
        subject = '',
        description = '',
        priority = '',
        status = '',
        recipient = '',
        submitter = '',
        assignee_id = ''
      } = req.body;

    res.send(`Ticket ${ticketId} modified`);
  }


//expressApp.put("/ticket/:id", modifyTicket) //update



function removeTicket(req, res)
 {
    const id = req.params.id;
    // use the id to remove the ticket from your data source
    res.send(`id ${id} has been deleted.`);
  }
//expressApp.delete("/ticket/:id", removeTicket) //delete

//expressApp.post("/ticket", createNewTicket) //create


//
module.exports = routes;

const PORT = process.env.PORT || 7000
expressApp.listen(PORT, console.log(`You are listening on port: ${PORT}`))
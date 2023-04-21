let tickets = require("../model/ticketModel");
var logic;

let expressAsyncHandler = require("express-async-handler");

  
  
  var getSingleTicket = expressAsyncHandler(async (req, res) => 
  {
    var { id } = req.params;
    
    try 
    {
      var ticket = await tickets.findById(id);
  
      res.status(200).json(ticket);
  
    } catch (error) {
  
      res.status(500).json(error);
  
    }
  
  });
  
    
   
  
   const modifyTicket = expressAsyncHandler(async (req, res) => 
  {  
    const { id } = req.params;
  
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
    

    var ticket = await tickets.findByIdAndUpdate(
      id,
      {
      type,
      subject,
      description,
      priority,
      status,
      recipient,
      submitter,
      assignee_id
    });
  

   res.status(200).json(ticket);

  }); 






    const createNewTicket = (async (req, res) => {

    try {
  

      var {
      type = type,
      subject = subject,
      description = description,
      priority = priority,
      status = status,
      recipient = recipient,
      submitter = submitter,
      assignee_id = assignee_id
    } = req.body;
    
      var ticket = await tickets.create({
        
        type: req?.body?.type,
 
        subject: req?.body?.subject,

        description: req?.body?.description,
        priority: req?.body?.priority,
        status: req?.body?.status, 
        recipient: req?.body?.recipient,
        submitter: req?.body?.submitter,
        assignee_id: req?.body?.assignee_id, 
      follower_ids: req?.body?.follower_ids, 
        tags: req?.body?.tags,
  
      });
  
      res.status(200).json(ticket);
  
    } catch (error) {
  
      res.json(error);
  
    }
    createNewTicket = expressAsyncHandler(createNewTicket);
  });
  
   

  //deletes
   const removeTicket = expressAsyncHandler(async (req, res) => {
     
    const { id } = req.params;

    try {
  
      var ticket = await tickets.findByIdAndDelete(id);
  
      res.status(200).json(ticket);
  
    }
     catch (error) 
     {

      res.status(500).json(error);
  
    }
  
  });


    const getAllTickets = expressAsyncHandler(async (req, res) => {
  
    try {
  
      var ticketstofetch = await tickets.find({});
  
      res.status(200).json(ticketstofetch);
  
    } 
    catch (error)
     { 
      res.status(500).json(error);
  
    }
  });
  
  module.exports = {getAllTickets, getSingleTicket, modifyTicket, removeTicket, createNewTicket}
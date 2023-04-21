let tickets = require("../model/ticketModel");



let expressAsyncHandler = require("express-async-handler");

 

   
  
  const getSingleTicket = expressAsyncHandler(async (req, res) => 
  {
  
    var { id } = req.params;
  
  
    try 
    {
  
      const ticket = await tickets.findById(id);
  

      res.json(ticket);
  


    } catch (error) {
  
      res.json(error);
  
    }
  
  });
  
   
  
  
   
  
   const modifyTicket = expressAsyncHandler(async (req, res) => 
  {  
    const { id } = req.params;
  
  



    var ticket = await tickets.findByIdAndUpdate(
  
      id,
      {
  
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
      },
  
      { new: true }
  
    );
  
    res.json(ticket);
  
  });
  

    const createNewTicket = expressAsyncHandler(async (req, res) => {

    try {
  
      const ticket = await tickets.create({
        
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
  
      res.json(ticket);
  
    } catch (error) {
  
      res.json(error);
  
    }
  
  });
  
   
  //deletes
   const removeTicket = expressAsyncHandler(async (req, res) => {
    
  
    const { id } = req.params;
  
  
    try {
  
      var ticket = await tickets.findByIdAndDelete(id);
  
      res.json(ticket);
  
    }
     catch (error) 
     {

  
      res.json(error);
  
    }
  
  });


    const getAllTickets = expressAsyncHandler(async (req, res) => {
  
    try {
  
      var ticketstofetch = await tickets.find({});
  
      res.json(ticketstofetch);
  
    } 
    catch (error)
     {
  
      res.json(error);
  
    }
  
  });
  
  module.exports = {getAllTickets, getSingleTicket, modifyTicket, removeTicket, createNewTicket}
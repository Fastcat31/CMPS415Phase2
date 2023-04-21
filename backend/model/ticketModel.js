var mongoose = require("mongoose");
var model;

var ticketFormat = new mongoose.Schema(
  {
    type: String,

    subject: String,

    description: String,

    priority: String,

    status: String,

    recipient: String,

    submitter: String,

    assignee_id: [Number],

    follower_ids: [Number],

    tags: [String],
  },

);

let ticket = mongoose.model("Ticket", ticketFormat);

module.exports = ticket;

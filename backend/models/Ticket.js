const mongoose = require('mongoose'); 

const ticketSchema = new mongoose.Schema({
  employeeName: String,
  employeeId: String,
  issue: {
    main: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    },
    inner_sub: {
      type: String,
      required: false // Optional field
    }
  },
  date: Date,
  time: String,
  email: String,
  itSupport: {
    type:String,
    default:null},
  resolution: {
    type:String,
    default:null},
  status: {
    type: String,
    enum: ['Open', 'Closed','InProgress'],
    default: 'Open'
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);
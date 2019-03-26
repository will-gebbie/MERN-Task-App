
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Task data
let Task = new Schema({
  title: {
    type: String
  },
  priority: {
    type: String
  },
  due_date: {
    type: String
  }
},{
    collection: 'tasks'
});

// model([collection name uppercase and singluar form of collection], schemaName)
//Collection name tasks, model name Task
module.exports = mongoose.model('Task', Task);
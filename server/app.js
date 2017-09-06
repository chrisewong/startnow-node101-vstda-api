const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();


// add your code here
var todoList =
  [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
  ];

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.status(200).json({'status': 'ok'});
});



app.get('/api/TodoItems', function (req, res) {
  res.status(200).json(todoList);
});



app.get('/api/TodoItems/:id', function (req, res) {
  // console.log(todoList[req.params.id]);
  let item = todoList[req.params.id];
  item = item.todoItemId
  res.status(200).json(item); 
});


app.post('/api/TodoItems', function (req, res) {
  res.status(201).json(req.body);
});



app.delete('/api/TodoItems/:number', function (req, res) {
  // console.log(req.params.number);
  let item = todoList[req.params.number];
  

  var deleted = todoList.splice(req.params.number, 1);
  console.log(deleted);
  // for (i = 0; i < todoItemId.length; i++) {
  //   if( = todoList[i].todoItemId) {
     
  //   }
    

  res.status(200).json(item);
  res.end();
// }
});
  










module.exports = app;

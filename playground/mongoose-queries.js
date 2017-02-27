const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/*
var id = '58afe70c772d597b4533dd961';

if(!ObjectID.isValid(id)){
  console.log('ID not valid!');
}*/



/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ', todo);
});*/

/*
Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id: ', todo);
}).catch((e) => console.log(e));*/

var id = '589c490d23a6df4b296388ab'
/*
var email = 'info@ninnimania.de';

User.findOne({
  email: email
}).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User: ', user);
}).catch((e) => console.log(e));*/



User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by Id: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

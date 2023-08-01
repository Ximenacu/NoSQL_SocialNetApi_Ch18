const mongoose = require('mongoose');
const connection = require('../config/connection');
const { User, Thought } = require('../models');

// connection.once('open', async () => {
//     await Thought.collection.insertMany([
//         {
//             thoughtText: 'Im thinking of music.',//{type: String, require: true, minLength: 1, maxLength: 280},
//             //createdAt: {type: Date, default: Date.now },  // Use a getter method to format the timestamp on query
//             userName: 'Xime', //{type: String, require: true},  // user that created this thought ... 
//             reactions: [
//                 {
//                     //reactionId: {type: mongoose.Schema.Types.ObjectId}, // Default new ObjectID
//                     reactionBody: 'Me too!',//{type: String, require: true, maxLength: 280 }, 
//                     userName: 'Matt' //{type: String, require: true},  // ref: 'user'
//                     //createdAt: {type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
//                 }, 
//                 {
//                     //reactionId: {type: mongoose.Schema.Types.ObjectId}, // Default new ObjectID
//                     reactionBody: 'What kind?',//{type: String, require: true, maxLength: 280 }, 
//                     userName: 'Luc' //{type: String, require: true},  // ref: 'user'
//                     //createdAt: {type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
//                 }, 
//             ]
//         }, 
//         {
//             thoughtText: 'Its my birthday!',//{type: String, require: true, minLength: 1, maxLength: 280},
//             //createdAt: {type: Date, default: Date.now },  // Use a getter method to format the timestamp on query
//             userName: 'Luc', //{type: String, require: true},  // user that created this thought ... 
//             reactions: [
//                 {
//                     //reactionId: {type: mongoose.Schema.Types.ObjectId}, // Default new ObjectID
//                     reactionBody: 'HBD!',//{type: String, require: true, maxLength: 280 }, 
//                     userName: 'Matt' //{type: String, require: true},  // ref: 'user'
//                     //createdAt: {type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
//                 }, 
//                 {
//                     //reactionId: {type: mongoose.Schema.Types.ObjectId}, // Default new ObjectID
//                     reactionBody: 'Congrats!!!',//{type: String, require: true, maxLength: 280 }, 
//                     userName: 'Xime' //{type: String, require: true},  // ref: 'user'
//                     //createdAt: {type: Date, default: Date.now }, // Use a getter method to format the timestamp on query
//                 }, 
//             ]
//         }, 
//     ]);

//     User.collection.insertMany([

//         {
//             userName: 'Xime', //{ type: String, unique: true, required: true, trim: true }, 
//             email: 'xime@mail.com' //{ type: String, required: true, unique: true }, //must match valid (mongoose matching validation )
//             // thoughts: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'thought',
//             // }],
//             // friends: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'user',
//             // }], // array of ID's referencing user model (self reference). 
//         }, 
//         {
//             userName: 'Matt', //{ type: String, unique: true, required: true, trim: true }, 
//             email: 'matt@mail.com' //{ type: String, required: true, unique: true }, //must match valid (mongoose matching validation )
//             // thoughts: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'thought',
//             // }],
//             // friends: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'user',
//             // }], // array of ID's referencing user model (self reference). 
//         }, 
//         {
//             userName: 'Luc', //{ type: String, unique: true, required: true, trim: true }, 
//             email: 'Luc@mail.com' //{ type: String, required: true, unique: true }, //must match valid (mongoose matching validation )
//             // thoughts: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'thought',
//             // }],
//             // friends: [{
//             // type: mongoose.Schema.Types.ObjectId,
//             // ref: 'user',
//             // }], // array of ID's referencing user model (self reference). 
//         }, 
//     ])

// })

//DIFFERENCE BETWEEN. 
// new User({
//     userName: 'Xime', 
//     email: 'xime@mail.com'
// });
// User.save();

User.insertMany([
    {userName: 'Matt', email: 'matt@mail.com'},
    {userName: 'Luc', email: 'luc@mail.com'}, 
    {userName: 'Fabs', email: 'fabs@mail.com'}, 
    {userName: 'Xim', email: 'xim@mail.com'}
])

Thought.insertMany([
    {thoughtText: 'I love Game of thrones!',
    userName: 'Fabs' }, 
    {thoughtText: 'Go 49ers',
    userName: 'Matt' },
    {thoughtText: 'IM THE BEST',
    userName: 'Luc' },
])

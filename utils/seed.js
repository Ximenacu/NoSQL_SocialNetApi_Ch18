const mongoose = require('mongoose');
const connection = require('../config/connection');
const { User, Thought } = require('../models');

User.insertMany([
    {userName: 'Matt', email: 'matt@mail.com'},
    {userName: 'Luc', email: 'luc@mail.com'}, 
    {userName: 'Fabs', email: 'fabs@mail.com'}, 
    {userName: 'Xim', email: 'xim@mail.com'}
])

Thought.insertMany([
    {thoughtText: 'I love Game of thrones!',
    userName: 'Xim' }, 
    {thoughtText: 'Go 49ers',
    userName: 'Matt' },
    {thoughtText: 'IM THE BEST',
    userName: 'Luc' },
])

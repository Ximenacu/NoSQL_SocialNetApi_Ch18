const mongoose = require('mongoose');

//Schema for Users Collection
const userSchema = new mongoose.Schema({
    userName: { 
      type: String, 
      unique: true, 
      required: true, 
      trim: true 
    }, 
    email: { 
      type: String, 
      required: true, 
      unique: true 
      //must match valid (mongoose matching validation )
    }, 
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }], // array of ID's referencing user model (self reference). 
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

// Virtual 
userSchema.virtual('friendCount').get(function (){
  return this.friends.length;
});

const User = mongoose.model('User', userSchema);
module.exports = User;
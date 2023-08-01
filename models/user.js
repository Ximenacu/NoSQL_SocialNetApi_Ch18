const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new Types.ObjectId(), 
    ref: 'User'
  }
})

const thoughtsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, 
    default: () => new Types.ObjectId(), 
    ref: 'Thought'
  }
})

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
    thoughts: [thoughtsSchema],
    friends: [friendsSchema], // array of ID's referencing user model (self reference). 
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
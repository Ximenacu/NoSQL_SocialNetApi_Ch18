const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: mongoose.Schema.Types.ObjectId, // Default new ObjectID
    reactionBody: {
        type: String, 
        require: true, 
        maxLength: 280 }, 
    userName: {
        type: String, 
        require: true},  // ref: 'user'??
    createdAt: {
        type: Date, 
        default: Date.now }, // Use a getter method to format the timestamp on query
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String, 
        require: true, 
        minLength: 1, 
        maxLength: 280},
    createdAt: {
        type: Date, 
        default: Date.now },  // Use a getter method to format the timestamp on query
    userName: {
        type: String, 
        require: true},  // user that created this thought ... 
    reactions: [reactionSchema]
    }, 
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
)

// Virtual 
thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
  });

thoughtSchema.methods.formatTimestamp = function (){
    console.log(`I format Timestamps: ${this.createdAt}`)
}

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
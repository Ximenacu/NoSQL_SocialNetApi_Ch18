const {Thought, User} = require('../models');

module.exports = {
    async getThoughts(req, res){
        try {
            const dbThoughtData = await Thought.find();
            res.json(dbThoughtData);

        } catch(err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
          const dbThoughtData = await Thought.create(req.body);
          const insert = await User.findOneAndUpdate(
            {userName: req.body.userName}, 
            {$push: {thoughts: {_id: dbThoughtData._id}}},
            { new: true }
          );
          res.json(dbThoughtData);
        } catch (err) {
          res.status(500).json(err);
          console.log(err);
        }
    },
    async getSingleThought(req, res) {
      try {
        const  dbThoughtData = await Thought.findOne({ _id: req.params.ThoughtId })
        res.json( dbThoughtData)
        if (!dbThoughtData) {
          return res.status(404).json({ message: 'No Thought with that ID' });
        }  
      } catch(err) {
        res.status(500).json(err);
      }
    },
    async updateThought(req, res) {
      try {
        const dbThoughtData = await Thought.findOneAndUpdate(
          {_id: req.params.ThoughtId}, 
          {thoughtText: req.body.thoughtText},
          { new: true }
        );
        res.json(dbThoughtData);
      } catch (err){
        res.status(500).json(err);
      }
    }, 
    async deleteThought(req, res) {
      try {
        const dbThoughtData = await Thought.deleteOne(
          {_id: req.params.ThoughtId}, 
        );
        res.json(dbThoughtData);
      } catch (err){
        res.status(500).json(err);
      }
    }, 
    async addReaction(req, res){
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.ThoughtId}, 
                {$push: {reactions: req.body}},
                { new: true }
            );
            res.json(dbThoughtData);
            
        } catch (err){
            res.status(500).json(err);
        }
    }, 
        async deleteReaction(req, res) {
            try {
                console.log("req params: ", req.params);
                const dbThoughtData = await Thought.findByIdAndUpdate(
                    req.params.ThoughtId, 
                    {$pull: {reactions: {_id: req.params.reactionId}}},
                    { new: true }
                );
                if (!dbThoughtData) {
                    return res.status(404).json(
                        { message: 'No Thought or Reaction with the IDs provided' });
                } 
                res.json(dbThoughtData);

            } catch (err) {
                res.status(500).json(err);
            }
        }
}



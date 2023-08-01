const {User, Thought} = require('../models');

module.exports = {
    async getUsers(req, res){
        try {
            const users = await User.find();
            res.json(users);

        } catch(err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
          const dbUserData = await User.create(req.body);
          res.json(dbUserData);
        } catch (err) {
          res.status(500).json(err);
          console.log(err);
        }
    },
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
        res.json(user)
        // if (!user) {
        //   return res.status(404).json({ message: 'No user with that ID' });
        // }  
      } catch(err) {
        res.status(500).json(err);
      }
    },
    async updateUser(req, res) {
      try {
        const user = await User.findOneAndUpdate(
          {_id: req.params.userId}, 
          {userName: req.body.userName},
          { new: true }
        );
        res.json(user);
      } catch (err){
        res.status(500).json(err);
      }
    }, 
    async deleteUser(req, res) {
      try {
        const findName = await User.findOne(
          {_id: req.params.userId}
        )
        const del = await Thought.deleteMany(
          {userName: findName.userName}
        )
        const user = await User.deleteOne(
          {_id: req.params.userId}, 
        );
        res.json('User Deleted');
      } catch (err){
        res.status(500).json(err);
      }
    }, 
    async addFriend (req, res) {
      try {
        const friendOne = await User.findByIdAndUpdate(
          req.params.userId, 
          {$push: {friends: {_id: req.params.friendId}}}, 
          { new: true }
        );
        const friendTwo = await User.findByIdAndUpdate(
          req.params.friendId, 
          {$push: {friends: {_id: req.params.userId}}}, 
          { new: true }
        );
        const friends = [friendOne, friendTwo]
        res.json(friends);

      } catch (err) {
        res.status(500).json(err);
      }
    }, 
    async deleteFriend (req,res) {
      try {
        const friendOne = await User.findByIdAndUpdate(
          req.params.userId, 
          {$pull: {friends: {_id: req.params.friendId}}}, 
          { new: true }
        );
        const friendTwo = await User.findByIdAndUpdate(
          req.params.friendId, 
          {$pull: {friends: {_id: req.params.userId}}}, 
          { new: true }
        );
        const friends = [friendOne, friendTwo]
        res.json(friends);

      } catch (err) {
        res.status(500).json(err);
      }
    }
}



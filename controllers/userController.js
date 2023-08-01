const {User} = require('../models');

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
        const user = await User.deleteOne(
          {_id: req.params.userId}, 
        );
        res.json(user);
      } catch (err){
        res.status(500).json(err);
      }
    }
}



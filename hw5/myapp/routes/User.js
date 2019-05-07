var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = mongoose.Schema({
  gid: {
    type: String,
    index: true
  }
});

var User = mongoose.model('User', UserSchema);


module.exports = {

    getUser: function(){
        return User;
    },
    
    findOrCreate : function(gID, callback) {
        const thisUser = new User({ gid: String(gID) });
        thisUser.save().then(() => console.log('user added'));
    }
}
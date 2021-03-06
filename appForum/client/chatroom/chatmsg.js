Template.chatmsg.helpers({
    username : function(){
        var userId = this.publishedBy;
        var author = Meteor.users.find({
            _id : userId
        }).fetch();
        return author[0].username;
    },
    date : function (){
        return moment(this.publishedAt).format('DD-MMM-YYYY HH-mm');
    },
    userProfilePicture: function(){
        return Meteor.users.find({
            _id : this.publishedBy
        }).fetch();
    }
});

Template.chatmsg.onRendered(function(){
   placeMsg(this);
});


var placeMsg = function(chatData){
    if(chatData.data.publishedBy===Meteor.userId()){
        $(chatData.firstNode).addClass('rightChat');
    }
};
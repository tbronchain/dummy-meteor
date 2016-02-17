Template.messageList.helpers({
    messages: function() {
        return Messages.find({}, {
            sort: {timestamp: -1}
        });
    }
});

Template.messageForm.events({
    'keydown input[data-field=message]': function(e){
        if (e.keyCode != 13) {return;}

        //var name = $('input[data-field=name]').val();
        var message = $('input[data-field=message]').val();
        Messages.insert({
            _owner: Meteor.userId(),
            name: Meteor.user().emails[0].address,
            message: message,
            timestamp: new Date()
        });
        $('input[data-field=message]').val('').focus();
    }
});

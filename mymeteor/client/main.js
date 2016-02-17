Template.messageList.helpers({
    messages: function() {
        return Messages.find({}, {
            sort: {timestamp: -1}
        });
    },
    prettyTime: function() {
        // check moment.js website for formatting list
        return moment(this.timestamp).format('LTS');
    }
});

Template.messageForm.helpers({
    lastMessage: function() {
        return moment(
            Session.get('lastMessage')
        ).format('LTS');
    }
});

Template.messageForm.events({
    'keydown input[data-field=message]': function(e){
        if (e.keyCode != 13) {return;}

        // get values from form
        //var name = $('input[data-field=name]').val();
        var message = $('input[data-field=message]').val();

        // Insert into DB
        Session.set('lastMessage', new Date());
        Messages.insert({
            _owner: Meteor.userId(),
            name: Meteor.user().emails[0].address,
            message: message,
            timestamp: new Date()
        });
        $('input[data-field=message]').val('').focus();
    }
});

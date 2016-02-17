Template.messageList.helpers({
    messages: function() {
        return Messages.find();
    }
});

Template.messageForm.events({
    'keydown input[data-field=message]': function(e){
        if (e.keyCode != 13) {return;}

        var name = $('input[data-field=name]').val();
        var message = $('input[data-field=message]').val();
        Messages.insert({
            name: name,
            message: message
        });
        $('input[data-field=message]').val('').focus();
    }
});

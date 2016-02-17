Template.messageList.helpers({
    messages: function() {
        return Messages.find();
    }
});

Template.messageForm.events({
    'click button[data-action=send]': function(e){
        var name = $('input[data-field=name]').val();
        var message = $('input[data-field=message]').val();
        Messages.insert({
            name: name,
            message: message
        });
        $('input[data-field=message]').val('').focus();
    }
});

Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: function(userId, doc){

        if(!userId){ return; }

        if(doc._owner !== userId){ return false; }

        return true;

    }
});

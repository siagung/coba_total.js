// A simple service cleaner for expired sessions
F.on('service', function(counter) {

    // Clean session each 5 minutes
    if (counter % 5 !== 0)
        return;

    var sessions = Object.keys(ONLINE);

    //  Set 'ticks' to -20 minutes from now 
    var ticks = F.datetime.add('-' + EXPIRE);

    for (var i = 0, length = sessions.length; i < length; i++) {
        var session = ONLINE[sessions[i]];

        // Sessions will be removed when are older than "-20 minutes"
        if (session.ticks < ticks)
            delete ONLINE[sessions[i]];
    }

});
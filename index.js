const client = require('twilio')('AC9221abb322f3d94ff389841eee96f083', 'ad0367f27fd073c7cd8e394d7365be0e');

client.calls.create({
   to: '+15132830950',
   from: '+18599558824',
   url: 'http://twimlets.com/message?Message%5B0%5D=Your%20security%20code%20is%205%206%204%209%208'
}, (err, res) => {
   console.log(err)
})

client.messages.create({
   to: '+15135024880',
   from: '+18599558824',
   body: 'Your security code is 13265'
}, (err, res) => {
   console.log(err)
})
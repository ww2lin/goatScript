

var sendGmail = function(opts){
    var str = 'http://mail.google.com/mail/?view=cm&fs=1'+
              '&to=' + opts.to +
              '&su=' + opts.subject +
              '&body=' + opts.message.replace(/\n/g,'%0A') +
              '&ui=1';
    location.href = str;
}

opts = {};
opts["to"] = "ajen@yelp.com";
opts["subject"] = "got subject";
opts["message"] = "body message";

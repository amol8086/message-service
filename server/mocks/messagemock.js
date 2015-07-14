module.exports = function(app) {
  var express = require('express');
  var bodyParser = require('body-parser');
  var messagemockRouter = express.Router();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Not used anywhere as its mapping is not posible in ember.
  var ServiceResponse = function(){
    this.status = {
      "statusCode": 200,
      "errorKey": "",
      "errorMessage": "SUCCESS"
    };
  };

  var predefinedMessages = [{
        "id": 1,
        "preDefinedMessageText": "When doctor will visit?",
        "gender": "female",
        "age": "20"
      },{
        "id": 2,
        "preDefinedMessageText":  "When are meals served?",
        "gender": "female",
        "age": "25"
      },{
        "id": 3,
        "preDefinedMessageText": "When will I have my tests performed?",
        "gender": "male",
        "age": "27"
      },{
        "id": 4,
        "preDefinedMessageText": "When will i recieve my test results?",
        "gender": "male",
        "age": "29"
      }];

  var getPreDefinedMessageById = function(id) {
    for (var i = predefinedMessages.length - 1; i >= 0; i--) {
      var message = predefinedMessages[i];
      if (message.id == id) {
        return message;
      };
    };
    return null;
  }; 

  var getPreDefinedMessageIndexById = function(id) {
    for (var i = predefinedMessages.length - 1; i >= 0; i--) {
      var message = predefinedMessages[i];
      if (message.id == id) {
        return i;
      };
    };
    return null;
  }; 
  
  messagemockRouter.get('/', function(req, res) {
    var serviceResponse = new ServiceResponse();
    serviceResponse.payloadList = predefinedMessages;

    res.send({
      "status" : {
        "statusCode": 200,
        "errorKey": "",
        "errorMessage": "SUCCESS"
      },
      "messages": predefinedMessages
    });
  });

  messagemockRouter.post('/', function(req, res) {
    var newMessage = req.body.message;
    var msgId = 1;
    if (predefinedMessages.length > 0) {
      msgId = eval(predefinedMessages[predefinedMessages.length-1].id) + 1;
    };
    newMessage.id = msgId;
    predefinedMessages.push(newMessage);

    res.send({
      'message': newMessage
    });
  });

  messagemockRouter.get('/:id', function(req, res) {
    var message = getPreDefinedMessageById(req.params.id);
    var serviceResponse = new ServiceResponse();
    serviceResponse.payload = message;

    res.send({
      "meta" : {
        "statusCode": 200,
        "errorKey": "",
        "errorMessage": "SUCCESS"
      },
      "message": message
    });
  });

  messagemockRouter.put('/:id', function(req, res) {
    var newMessage = req.body.message;
    newMessage.id = req.params.id;
    var idx = getPreDefinedMessageIndexById(req.params.id);
    predefinedMessages[idx] = newMessage;

    res.send({
      'message': newMessage
    });
  });

  messagemockRouter.delete('/:id', function(req, res) {
    var idx = getPreDefinedMessageIndexById(req.params.id);
    predefinedMessages.splice(idx, 1);
    res.status(204).end();
  });

  app.use('/api/messages', messagemockRouter); 

};

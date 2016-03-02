'use strict';

exports.nodejsGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "nodejs_id" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodejsPost = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = {
  "nodejs_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodejsNodejsIdGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodejsId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "nodejs_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodejsNodejsIdPut = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodejsId (String)
   **/

var examples = {};
  
  examples['application/json'] = {
  "nodejs_id" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.nodejsNodejsIdDelete = function(args, res, next) {
  /**
   * parameters expected in the args:
   * nodejsId (String)
   **/

var examples = {};
  

  
  res.end();
}

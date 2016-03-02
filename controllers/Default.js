'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.nodejsGet = function nodejsGet (req, res, next) {
  Default.nodejsGet(req.swagger.params, res, next);
};

module.exports.nodejsPost = function nodejsPost (req, res, next) {
  Default.nodejsPost(req.swagger.params, res, next);
};

module.exports.nodejsNodejsIdGet = function nodejsNodejsIdGet (req, res, next) {
  Default.nodejsNodejsIdGet(req.swagger.params, res, next);
};

module.exports.nodejsNodejsIdPut = function nodejsNodejsIdPut (req, res, next) {
  Default.nodejsNodejsIdPut(req.swagger.params, res, next);
};

module.exports.nodejsNodejsIdDelete = function nodejsNodejsIdDelete (req, res, next) {
  Default.nodejsNodejsIdDelete(req.swagger.params, res, next);
};

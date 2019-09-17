
var carry = require('../config/carry.js');

var burgers = {
	all: function (cb) {
		carry.all('Burgers', function (res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		carry.create('Burgers', cols, vals, function (res){
			cb(res);
		});
	},
	devour: function (objColVals, condition, cb) {
		carry.devour('Burgers', objColVals, condition, function (res) {
			cb(res);
		})
	},
	clear: function (condition, cb) {
		carry.clear('Burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burgers;	
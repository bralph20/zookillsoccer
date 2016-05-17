(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** 
 * Create ES6 Classes.
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

'use strict';

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var GamePiece = (function () {
    function GamePiece(credentials) {
        _classCallCheck(this, GamePiece);

        //TODO: use super();
        this.name = credentials.name;
        this.uuid = this.setId();
    }

    /** 
     * Arena objects derive directly from generic GamePiece
     */

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */

    GamePiece.prototype.setId = function setId() {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
    };

    /** 
     * Return the given name of this object.
     */

    GamePiece.prototype.getName = function getName() {
        return this.name;
    };

    /** 
     * Return the unique id of this object.
     */

    GamePiece.prototype.getId = function getId() {
        return this.uuid;
    };

    return GamePiece;
})();

var Arena = (function (_GamePiece) {
    _inherits(Arena, _GamePiece);

    function Arena(credentials) {
        _classCallCheck(this, Arena);

        _GamePiece.call(this, credentials);
    }

    /** 
     * Sample file configuration.
     */
    return Arena;
})(GamePiece);

var config = {
    name: 'Forest Trump or Donald Gump',
    enrollmentNo: 11115078
};

// Make some test game objects
var x = new GamePiece(config);
console.log(x.getName());

// Make a test Arena object.
var y = new Arena(cred);
console.log(y.getName());

},{}]},{},[1]);

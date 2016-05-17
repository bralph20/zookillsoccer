/**
 * Create my ES6 Classes.
 * To make this work, you must be running the Babel transpiler,
 * and watching for changes in this file with browserify. Two
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */

class GamePiece {

    constructor (credentials) {
    	//TODO: use super();
        this.name = credentials.name;
        this.uuid = this.setId();
    }

    /**
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    setId () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    /**
     * Return the given name of this object.
     */
    getName () {
        return this.name;
    }

    /**
     * Return the unique id of this object.
     */
    getId () {
        return this.uuid;
    }
}

/**
 * Arena objects derive directly from generic GamePiece
 */
class Arena extends GamePiece {
    constructor(credentials) {
        super(credentials);
    }
}

/**
 * Sample file configuration.
 */
var config = {
    name:'Forest Trump or Donald Gump',
    enrollmentNo:11115078
}

// Make some test game objects
var x = new GamePiece(config);
console.log(x.getName());

// Make a test Arena object.
var y = new Arena(cred);
console.log(y.getName());

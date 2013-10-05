var Random = require( '../' )

/**
 * Park Miller (1988) "minimal standard" linear 
 * congruential PRNG constructor
 * @param {Number} seed
 */
function ParkMiller( seed ) {
  Random.call( this )
  this._seed = seed != null ? seed : 1
}

// Exports
module.exports = ParkMiller

// Inherit from Random
var $ = ParkMiller.prototype =
  Object.create( Random.prototype )

/**
 * Prototype's constructor
 * @type {Function}
 */
$.constructor = ParkMiller

/**
 * Get a random number in range [0,1]
 * @return {Number}
 */
$.uniform = function() {
  
  var hi = 16807 * ( this._seed >> 16 )
  var lo = 16807 * ( this._seed & 0xFFFF ) +
    ( ( hi & 0x7FFF ) << 16 ) + ( hi >> 15 )
  
  this._seed = ( lo > 0x7FFFFFFF ? lo - 0x7FFFFFFF : lo )
  
  return this._seed / 2147483647
  
}

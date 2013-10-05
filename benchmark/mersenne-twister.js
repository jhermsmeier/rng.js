var MT = require( '../lib/mersenne-twister' )

suite( 'Mersenne Twister', function() {
  
  var mt = new MT()
  
  bench( 'constructor', function() {
    new MT()
  })
  
  bench( 'uniform', function() {
    return mt.uniform()
  })
  
})
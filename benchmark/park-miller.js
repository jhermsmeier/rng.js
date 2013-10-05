var PM = require( '../lib/park-miller' )

suite( 'Park Miller', function() {
  
  var pm = new PM()
  
  bench( 'constructor', function() {
    new PM()
  })
  
  bench( 'uniform', function() {
    return pm.uniform()
  })
  
})
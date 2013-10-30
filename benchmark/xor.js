var XOR = require( '../lib/xor' )

suite( 'XOR (128)', function() {
  
  var xor = new XOR()
  
  bench( 'constructor', function() {
    new XOR()
  })
  
  bench( 'uniform', function() {
    return xor.uniform()
  })
  
})
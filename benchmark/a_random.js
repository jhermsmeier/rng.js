var Random = require( '../' )

suite( 'Random', function() {
  
  var rand = new Random()
  
  bench( 'constructor', function() {
    return new Random()
  })
  
  bench( 'byte', function() {
    return rand.next()
  })
  
  bench( 'uniform', function() {
    return rand.uniform()
  })
  
  bench( 'range', function() {
    return rand.range( 40, 100 )
  })
  
  bench( 'exp', function() {
    return rand.exp()
  })
  
  bench( 'normal', function() {
    return rand.normal()
  })
  
  bench( 'poisson', function() {
    return rand.poisson( 4 )
  })
  
  bench( 'gamma', function() {
    return rand.gamma( 4 )
  })
  
})
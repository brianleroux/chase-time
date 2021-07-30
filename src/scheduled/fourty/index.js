exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('forty')
    console.log(JSON.stringify(event, null, 2))
  }, 40*1000)
}

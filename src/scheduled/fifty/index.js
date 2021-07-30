exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('fifty')
    console.log(JSON.stringify(event, null, 2))
  }, 50*1000)
}

exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('thirty')
    console.log(JSON.stringify(event, null, 2))
  }, 30*1000)
}

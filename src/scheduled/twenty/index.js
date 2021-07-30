exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('twenty')
    console.log(JSON.stringify(event, null, 2))
  }, 20*1000)
}

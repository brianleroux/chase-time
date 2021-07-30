exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('sixty')
    console.log(JSON.stringify(event, null, 2))
  }, 60*1000)
}

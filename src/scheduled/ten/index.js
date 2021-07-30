exports.handler = async function scheduled (event) {
  setTimeout(function() { 
    console.log('ten')
    console.log(JSON.stringify(event, null, 2))
  }, 10*1000)
}

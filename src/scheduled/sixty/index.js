exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('sixty')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 60*1000)
  })
}

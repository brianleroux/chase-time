exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('thirty')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 30*1000)
  })
}

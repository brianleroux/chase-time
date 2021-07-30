exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('forty')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 40*1000)
  })
}

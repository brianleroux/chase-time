exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('fifty')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 50*1000)
  })
}

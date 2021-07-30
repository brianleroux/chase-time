exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('twenty')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 20*1000)
  })
}

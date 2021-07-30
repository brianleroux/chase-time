exports.handler = async function scheduled (event) {
  return new Promise(resolve=> {
    setTimeout(function() { 
      console.log('ten')
      console.log(JSON.stringify(event, null, 2))
      resolve()
    }, 10*1000)
  })
}

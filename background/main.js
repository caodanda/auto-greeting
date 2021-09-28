
console.log('你好')
chrome.extension.onMessage.addListener(function(objRequest,sendResponse){
  let txt = objRequest.txt
  axios.get({
    url:'https://testtrain.1xxmt.com/api/userinfo',
    headers:{'Authorization':'eyJhbGciOiJzaGExIiwidHlwIjoiSldUIn0.eyJpc3MiOiIiLCJpYXQiOjE2MzI3OTQ0OTksImV4cCI6MTYzMjg4MDg5OSwiYXVkIjoiIiwic3ViIjoiIiwibmJmIjoiIiwianRpIjo2N30.f4ae2e482655e6cfb4c2bd8bf47849fa1a33d1bc'}
  })
  .then(data=>{
    console.log(data)
    sendResponse({'status': 200});
  })
  .catch(err=>{
    console.log(err)
    sendResponse({'status': 500});
  })

})

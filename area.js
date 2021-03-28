import  fs  from 'fs';
import http from 'http';

http.createServer((request, response) => {
  // const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
      console.error(err);
    });
    const responseBody = body ;
if(request.method == 'POST'){
 fs.appendFileSync(`${JSON.parse(responseBody).fs}.txt`,`${JSON.parse(responseBody).con}`,function(err){
   if(err) throw console.log("Error hai bhai")
  console.log("File Created")
 })
}
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})
    response.write(JSON.parse(responseBody).name);
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  });
}).listen(8080);
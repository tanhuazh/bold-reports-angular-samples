
### NodeJs version

Make sure using 10.13.0.

If using NVM, execute "nvm use 10.13.0"

https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node-js


### Angular localhost ERR_SSL_PROTOCOL_ERROR

in chrome, go to url: chrome://net-internals/#hsts

Under Delete domain security policies enter localhost or your problem domain and click the delete button on screen

https://stackoverflow.com/questions/52677872/localhost-sent-an-invalid-response-for-my-angular-app

### Run without CORS(With administrator rights)

"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security  --user-data-dir=~/chromeTemp

https://www.code4it.dev/blog/run-google-chrome-without-cors

### Run app

npm run serve

And use http://localhost:4200

Test report url: http://localhost:4200/#/report-viewer/product-catalog


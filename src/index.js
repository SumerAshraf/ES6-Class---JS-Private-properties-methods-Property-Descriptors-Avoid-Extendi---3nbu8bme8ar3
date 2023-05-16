//Write your code here
class API{
  #secure;
  constructor(url,method='GET'){
  this.url=url;
  this.method=method;
  this.#secure=url.startsWith('https');
  }
  isSecure(){
  return this.#secure;
  }
  updateURL(url){
  this.url=url.replace("http://", "https://");
    this.#secure=url.startsWith('https');
  }
}




//Do not remove this code
module.exports = { API }

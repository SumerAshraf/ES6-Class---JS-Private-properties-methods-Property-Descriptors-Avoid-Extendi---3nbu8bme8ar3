//Write your code here
class API{
  #secure;
  constructor(url,method='GET'){
  this.url=url;
  this.method=method;
    this.#secure=url.startsWith('https');
  }
  
  this.isSecure(){
  return this.#secure;
  }
  this.updateURL(url){
  this.url=url;
    this.#secure=url.startsWith('https');
  }
}




//Do not remove this code
module.exports = { API }

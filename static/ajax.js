class GameAjax{

    constructor(endpoit, succ_cb, fail_cb){
        this.xhttp = new XMLHttpRequest();
        this.xhttp.open('POST', endpoit, true);
        // this.xhttp.setRequestHeader("X-CSRFToken", document.querySelector('meta[name=csrf-token]').getAttribute('token'));
        
        this.xhttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    succ_cb(this.responseText);
                }
        };
    }
  
    async send_json(payload){
        this.xhttp.setRequestHeader('Content-Type', 'application/json');
        this.xhttp.send(JSON.stringify(payload));
    }
}
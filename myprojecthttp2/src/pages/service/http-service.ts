import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



export class HttpService {  
    static get parameters() {
        return [[Http]];
    }
 
	constructor(private http:Http) {
    
		
	}
 
    servicePost(url,data){
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var response = this.http.post(url,JSON.stringify(data),headers).map(res => res.json());
		return response;
    }
    serviceGet(url){
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    

    

    


}

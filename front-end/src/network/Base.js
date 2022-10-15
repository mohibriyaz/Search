import axios from 'axios';
class Base {
    
    instance;
    get = () => {};
    
    post = () => {};
    constructor(prefix=''){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}${prefix}`,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.get = this.instance.get;
        this.post = this.instance.post;
    }

}

export default Base;
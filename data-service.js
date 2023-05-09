class DataService{

    static BASE_URL = './fake-data.json';

    static async getData(){
        // return fetch(this.BASE_URL).then(resp => resp.json()); modo solito...
        // const data = await fetch(this.BASE_URL).then(resp => resp.json()); oppure...
        const resp = await fetch(this.BASE_URL);
        const data = await resp.json();
        return data;
    };

}
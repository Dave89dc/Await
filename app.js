
// Async e Await:

async function loadData(){
    // DataService.getData().then(data => console.log(data)); modo solito con then...
    const data = await DataService.getData();
    console.log(data);
}

loadData();
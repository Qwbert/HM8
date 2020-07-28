const notification = [
    {    createAt:'12/07/20',
        msg: 'Message 01',
        author:'Oleg'
    },
    {
        createAt:'12/07/20',
        msg: 'Message 02',
        author:'Kolya'
    },
    {
        createAt:'14/07/20',
        msg: 'Message 03',
        author:'Anna'
    },
    {
        createAt:'14/07/20',
        msg: 'Message 04',
        aurhor:'Oleg'
    },
    {
        createAt:'16/09/20',
        msg: 'Message 05',
        author: 'Anna'
    }
];
    
    const o = {};
    
    function groupBy(arr,property) {
    
    return arr.reduce(function(acc,item) {
    const key = item[property];
    
        if(!acc[key]) {
            acc[key] = [];
        }
     acc[key].push(item.msg);
       
     return acc;
    },{});
    }
    const result = groupBy(notifications, 'author');
    console.log(result);
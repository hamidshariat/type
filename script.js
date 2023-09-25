
let data = [
    { id : 1 , title : 'item1' , text : 'projectJavascript'},
    { id : 2 , title : 'item2' , text : 'projectJavascript'},
    { id : 3 , title : 'item3' , text : 'projectJavascript'},
    { id : 4 , title : 'item4' , text :'projectJavascript'},
    { id : 5 , title : 'item5' , text : 'projectJavascript'},
]

new draggable({
    el : document.querySelector('#list'),
    list : data,
    template : (item) => {
        return `
        
            <div class="list-item" id="${item.id}">
                <div class="list-item_head">
                    <span class="head-id">${item.id}</span>
                </div>
                <div class="list-item_content">
                    <span class="item-title">${item.title}</span>
                    <p>${item.text}</p>
                </div>
            </div>
        
        `
    },
    update : (list) => {
        console.log(list)
    }
});
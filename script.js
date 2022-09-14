let button = document.getElementById("btn");
let input = document.getElementById("input");
button.addEventListener('click', ()=> {findAndRemove(input.value, makeRoot(arr))});



let arr = [{
    id: 0,
    name: 'Armenia',
    parentId: null
  }, {
    id: 1,
    name: 'Shirak',
    parentId: 0
  }, {
    id: 2,
    name: 'Lori',
    parentId: 0
  }, {
    id: 3,
    name: 'Tavush',
    parentId: 0
  }, {
    id: 4,
    name: 'Syuniq',
    parentId: 0
  }, {
    id: 5,
    name: 'Gyumri',
    parentId: 1
  }, {
    id: 6,
    name: 'Vanadzor',
    parentId: 2
  }, {
    id: 7,
    name: 'Ijevan',
    parentId: 3
  }, {
    id: 8,
    name: 'Goris',
    parentId: 4
  }, {
    id: 9,
    name: '58',
    parentId: 5
  }, {
    id: 10,
    name: 'Dimac',
    parentId: 6
  }, {
    id: 11,
    name: 'Rembaz',
    parentId: 7
  }, {
    id: 12,
    name: 'Getapnya',
    parentId: 8
  }];

//SEARCHING FUNCTION /////////////////
  function findAndRemove(text,data) {
    document.getElementById("container").innerHTML = "";


}



function makeRoot(items){
  const arm = (items,id = null)=>
items.filter(item => item.parentId === id)
.map(i => ({...i,children:arm(arr,i.id)}));
return arm(items);
}





function genUl(){
  let el =  document.createElement("ul");
  el.classList.add("nested")
  return el;
}
function genArrow(cont){
  let arrow = document.createElement("span");
  arrow.className = "caret";
  arrow.innerHTML = cont.name;
  return arrow;
}

function genLi(content){
    let el =  document.createElement("li");
    el.classList.add(content.name);
    el.id = content.id;
    el.innerHTML = `<span class='caret'>${content.name}</span>`;
    return el;
}

function render(data, id="container"){
    data.forEach(ch => {
      if(ch.children.length){
        document.getElementById(id).appendChild(genLi(ch));
     
        render(ch.children, ch.id);
      }else {
        document.getElementById(id).appendChild(genLi(ch));
      }
    });
}

render(makeRoot(arr));


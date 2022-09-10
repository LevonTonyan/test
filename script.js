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



    function rec1(li,id = "container"){

      if (!li.name.includes(text) && li.children){
        document.getElementById(id).appendChild(genLi(li));

        li.children.forEach(ch => {
          rec1(ch, ch.parentId);
        });
      } 
      
      
    
  }
rec1(data);
}



function makeRoot(arr){
let root;
arr.forEach((el) => {
    if(el.parentId === null){
        root = el;
        return;
    }
    const parentEl = arr[el.parentId];
    parentEl.children = [...(parentEl.children || []), el];

});
return root;
}


function genUl(){
  let el =  document.createElement("ul");
  return el;
}

function genLi(content){
    let el =  document.createElement("li");
    el.classList.add(content.name);
    el.id = content.id;
    el.innerHTML = content.name;
    return el;
}

function rec(data, id="container"){
    if(data.children){
      
        document.getElementById(id).appendChild(genLi(data));
        data.children.forEach(child => {
            rec(child, child.parentId);
        });
    }else {
        document.getElementById(id).appendChild(genLi(data));
    }

}
function render(data){
  return rec(makeRoot(data));
}
render(arr);


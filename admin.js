let numbersOfName = 4;
let namesArray = [];
let apiResult =[
    {id:1, name:"peace"},
    {id:2, name:"ngozi"},
    {id:3, name:"matthew"},
    {id:4, name:"genesis"}
]
const handleShowMenu = (link) =>{
    let allContent = document.querySelectorAll(`div.main-content > div`);
    allContent.forEach(content =>{
        content.style.display = "none"
    })
    document.querySelector(`div.main-content > div.${link}-div`).style.display = "flex";
    let allLink = document.querySelectorAll(`.menu-link > span`);
    allLink.forEach(link =>{
        link.classList.remove("active-link");
    })
    document.querySelector(`span.${link}-link`).classList.add("active-link");
}
const handleShowName = (link) =>{
    let nameContent = document.querySelectorAll(`div.name-content > div`);
    nameContent.forEach(content =>{
        content.style.display ="none"
    })
    document.querySelector(`div.name-content > div.${link}-div`).style.display ="flex";
    let alltapped = document.querySelectorAll(`.real-name > button`);
    alltapped.forEach(link =>{
        link.classList.remove("tapped");
    })
    document.querySelector(`button.${link}-link`).classList.add("tapped");
}
const addNewNames = () =>{
    const name = document.getElementById("nameinp").value;
    if (name== '' || name == null || typeof name == undefined){
        alert("oga name nor dey");
        return false;
    }
    // numbersOfName++;
    // let content = "";
    // content +=`
    //             <div class="last3">
    //                    <input type="text" disabled name="" class="inp1" value="${name}" id="">
    //                    <button class="btn2" onclick="handleDone(${numbersOfName -1})">Done</button>
    //                    <div>
    //                         <div class="dot" onclick="handleDisplay(this)">
    //                             <span class="span2"></span>
    //                             <span class="span2"></span>
    //                             <span class="span2"></span>
    //                         </div>
    //                         <div class="edit">
    //                             <span class="span4" onclick="handleDisplay(1,2)">&#10006</span><br>
    //                             <span class="span3" onclick="handleEdit(${numbersOfName -1})">Edit</span><br>
    //                             <span class="span3" onclick="handleDelete(${numbersOfName -1})">Delete</span>
    //                         </div>
    //                     </div>
    //             </div>
    // `;
    // let parent= document.getElementById("names-list-div");
    // parent.innerHTML = content;
    document.getElementById("nameinp").value = ''
    alert(`${name} add successfully`);
    numbersOfName ++;
    namesArray = [...namesArray,{id:numbersOfName,name}];
    renderNames(namesArray);
}
const handleDisplay =(arg,arg2) =>{
    // console.log(arg)
    if(arg2){
        let allDot = document.querySelectorAll(".last3");
        allDot.forEach((element,index) =>{
            element.children[2].children[1].style.display="none";
        })
        return false;
    }
    let allDot = document.querySelectorAll(".last3");
    allDot.forEach(element =>{
        element.children[2].children[1].style.display="none";
    })
    let parent = arg.parentElement;
    // console.log(parent);
    // console.log(parent.children)

    let lastDiv = parent.children[1];
    lastDiv.style.display="block";
    
}
const handleEdit = (arg) =>{
    let parent = document.querySelector(`.last3:nth-child(${arg+1})`);
    parent.children[1].style.display="inline-block";
    parent.children[0].disabled = false;
    parent.children[0].focus();
    // parent.children[2].children[1].style.display="none";
    handleDisplay(1,2)

}
const handleDone = (arg) =>{
    let parent = document.querySelector(`.last3:nth-child(${arg+1})`);
    parent.children[1].style.display="inline-block";
    parent.children[0].disabled = true;
    // parent.children[0].focus();
}
const handleDelete = (arg) => {
    let parent = document.querySelector(`.last3:nth-child(${arg+1})`);
    parent.style.display = "none";
}
const renderNames = (data) => {
    let content = "";
    data.forEach(({name,id},i)=> {
        content +=`
        <div class="last3">
                       <input type="text" disabled name="" class="inp1" value="${name}" id="">
                       <button class="btn2" onclick="handleDone2(${id},${i})">Done</button>
                       <div>
                            <div class="dot" onclick="handleDisplay(this)">
                                <span class="span2"></span>
                                <span class="span2"></span>
                                <span class="span2"></span>
                            </div>
                            <div class="edit">
                                <span class="span4" onclick="handleDisplay(1,2)">&#10006</span><br>
                                <span class="span3" onclick="handleEdit(${i})">Edit</span><br>
                                <span class="span3" onclick="handleDelete2(${id})">Delete</span>
                            </div>
                        </div>
        </div>
        `;
    })
    let parent= document.getElementById("names-list-div");
    parent.innerHTML = content;
}
const handleDelete2 = (id) => {
    namesArray = namesArray.filter(element => element.id != id);
    renderNames(namesArray);
}
const handleDone2 = (id,i) => {
    const parent = document.querySelector(`.last3:nth-child(${i+1})`);
    const name = parent.children[0].value;
    parent.children[0].disabled = true;
    namesArray = namesArray.filter(element => element.id == id ?
        {id:element,name} : element);
    renderNames(namesArray);
}
// IIFE: Immediately Invoked Function Expression
(function loadAllNames (){
    namesArray = apiResult;
    renderNames(namesArray);
})();
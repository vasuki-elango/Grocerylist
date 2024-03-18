const btn = document.querySelector('button');
btn.addEventListener('click',() => {
    //value get
    const inputbox = document.getElementById("input-box").value;
    const quantity = document.getElementById('quantity-value').value;
    const errormsg = document.getElementById('error');
    if(inputbox === ' '){
       errormsg.innerHTML="Please enter the value"
    }
    //create Element
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    const item = document.createElement('span');
    const del = document.createElement('span');

    item.innerHTML = `${inputbox} - ${quantity}`;
    del.innerHTML = 'Delete';

    item.classList.add("item");
    del.classList.add('delete')

    li.append(item);
    li.append(del);
    list.appendChild(li);    
})

//delete element
const deleteElement = document.querySelector("ul")
deleteElement.addEventListener('click',(e)=>{
    if(e.target.className == 'delete')
    {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})

function isChecked(){
    let data = document.querySelector('.item');
    if(checkbox = document.querySelectorAll("li .mycheckbox").checked){
        data.classList.add('checked');
    }
    else{
        data.classList.remove('checked');
    }
}
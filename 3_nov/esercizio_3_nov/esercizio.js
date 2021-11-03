document.addEventListener("DOMContentLoaded", () => {  
    const elenco = document.querySelector ("ul")


    const elements = list.map((element, index) => {

        if(element.completed === true){
        return `<li>
        <p><strong>Title:</strong> ${element.title} </p>
        <p><strong>Completed:</strong> <input type="checkbox" name="check" checked>${element.completed} </p>
        </li> `;}
        else {
            return `<li>
        <p><strong>Title:</strong> ${element.title} </p>
        <p><strong>Completed:</strong> <input type="checkbox" name="check" >${element.completed} </p>
        </li> `;};
    });
    const content = elements.join("");
    elenco.innerHTML = content;

});


/*




const q = (selector) => document.querySelector(selector);


const render = (container, items) => {
  const elements = items.map((element) => {
    if(element.completed === true) {
         `<li>
        <p><strong>Title:</strong> ${element.title} </p>
        <p><strong>Completed:</strong> <input type="checkbox" name="check" checked>${element.completed} </p>
        </li> `;}
    else {
        `<li>
        <p><strong>Title:</strong> ${element.title} </p>
        <p><strong>Completed:</strong> <input type="checkbox" name="check" >${element.completed} </p>
        </li> `;};
   });
  
  const content = elements.join('');

  container.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  
  
  const elenco = q('ul');
  
  render(elenco, list);
});

*/


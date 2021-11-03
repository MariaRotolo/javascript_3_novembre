
//     const q = (selector) => document.querySelector(selector); /// si potrebbe inserire questa riga e modificare il testo sotto come segue

document.addEventListener("DOMContentLoaded", () => {     
    const form = document.querySelector ("form");     ////// const form = q("form");
    const input = document.querySelector (" form input");  ///// const input = q("form input");
    const list = document.querySelector ("ul");         ////// const list = q("ul");
    
    const elements = data.map((element, index) => {                     //// permette di mappare degli elementi lavorando sul contenuto di un array  ////si potrebbe usare anche forEach, ma non è l'ideale perché è un metodo distruttivo
                                                                         // return element.name + "," + element.phone + "," + element.email;
       return ` <li>
        <h3> ${element.name} </h3>
        <p><strong>Phone:</strong> <a href="tel:"${element.phone}">${element.phone} </a></p> 
        <p><strong>Email:</strong><a href="mailto:"${element.email}>${element.email} </a> </p>      
        </li>`;
    }) ;
    
    const content = elements.join("");
    list.innerHTML = content;


});



// è una funzione che deve semplificare e rendere ripetibile il codice scritto sopra
const q = (selector) => document.querySelector(selector);
const render = (container, items) => {
    const elements = items.data.map((element, index) => {                     
    return ` <li>
    <h3> ${element.name} </h3>
    <p><strong>Phone:</strong> <a href="tel:"${element.phone}">${element.phone} </a></p> 
    <p><strong>Email:</strong><a href="mailto:"${element.email}>${element.email} </a> </p>      
    </li>`;
    }) ;
    const content = elements.join("");
    container.innerHTML = content;

}

document.addEventListener("DOMContentLoaded", () => {     
     const form = q("form");
    const input = q("form input");
     const list = q("ul");

     render(list, data);
});
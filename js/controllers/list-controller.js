function State(){
    this.listSection = null;
}

const state = new State();

export function init(){
    state.listSection = document.querySelector(".list-container");
}

export function addCard(address){
    const card = createCard(address);
    state.listSection.appendChild(card);
}

function createCard(address){
    const div = document.createElement("div");
    div.classList.add("card-list-item");

    const h3 = document.createElement("h3");
    h3. innerHTML= address.city;

    const line = document.createElement("p");
    line.innerHTML = `${address.street}, ${address.number}`;
    line.classList.add("address-line");

    const cep = document.createElement("p");
    cep.innerHTML = address.cep;
    cep.classList.add("address-cep");

    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    return div;
}
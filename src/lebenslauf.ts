const element = document.getElementById("header")!;

function Wrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    return wrapper;
}
const wrapper = Wrapper();
element.appendChild(wrapper);

function Img() {
    const image = document.createElement("img");
    image.src =
        "https://profile-images.xing.com/images/69f8e0b08c631937469942a9f88c7ce6-1/marvin-demirkaya.1024x1024.jpg";
    image.classList.add("image");
    return image;
}
const image = Img();
wrapper.appendChild(image);

function Name() {
    const namestyle = document.createElement("div");
    namestyle.innerText = "Marvin Demirkaya";
    namestyle.classList.add("namestyle");
    return namestyle;
}
const namestyle = Name();
wrapper.appendChild(namestyle);

function Link() {
    const link = document.createElement("div");
    link.innerText = "https://p6.gg/";
    link.classList.add("linkandemail");
    return link;
}
const link = Link();
wrapper.appendChild(link);

function Email() {
    const email = document.createElement("div");
    email.innerText = "m.demirkaya@progani.com";
    email.classList.add("linkandemail");
    return email;
}
const email = Email();
wrapper.appendChild(email);

// function EducationHeader(){

// }

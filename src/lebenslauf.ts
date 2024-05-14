const element = document.body;

function Wrapper() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const image = Img();
    wrapper.appendChild(image);
    const namestyle = Name();
    wrapper.appendChild(namestyle);
    const link = LinkWrapper();
    wrapper.appendChild(link);
    const email = Email();
    wrapper.appendChild(email);
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

function Name() {
    const namestyle = document.createElement("div");
    namestyle.innerText = "Marvin Demirkaya";
    namestyle.classList.add("namestyle");
    return namestyle;
}

function LinkWrapper() {
    const link = document.createElement("a");
    link.innerText = "https://p6.gg/";
    link.href = "https://p6.gg/";
    link.classList.add("link-and-email");
    return link;
}

function Email() {
    const email = document.createElement("div");
    email.innerText = "m.demirkaya@progani.com";
    email.classList.add("link-and-email");
    return email;
}

function CvContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    const experience = document.createElement("div");
    experience.innerText = "Ausbildung";
    experience.classList.add("experience");
    container.appendChild(experience);
    const jobtitle = document.createElement("div");
    jobtitle.innerText = "Abschluss der allgemeinen Hochschulreife";
    jobtitle.classList.add("jobtitle");
    container.appendChild(jobtitle);
    const year = document.createElement("div");
    year.innerText = "2014";
    year.classList.add("year");
    container.appendChild(year);
    const text1 = document.createElement("div");
    text1.innerText = "Kernfächer im Abitur: Englisch und Geschichte";
    text1.classList.add("text");
    container.appendChild(text1);
    // const text2 = document.createElement("div");
    // text2.innerText ="";
    // text2.classList.add("text");
    // container.appendChild(text2);
    const text3 = document.createElement("div");
    text3.innerText =
        "Weitere Fächer in der Abiturprüfung: Deutsch und Mathematik (4.Fach)";
    text3.classList.add("bottom-text");
    container.appendChild(text3);
    return container;
}
const container = CvContainer();
element.appendChild(container);

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
    const containerWrapper = document.createElement("div");
    containerWrapper.classList.add("container-wrapper");
    const containerHeader = document.createElement("div");
    containerHeader.classList.add("education-header");
    const containerContent = document.createElement("div");
    containerContent.classList.add("container-content");
    const experience = document.createElement("div");
    experience.innerText = "Ausbildung";
    experience.classList.add("experience");
    containerHeader.appendChild(experience);
    const jobtitle = document.createElement("div");
    jobtitle.innerText = "Abschluss der allgemeinen Hochschulreife";
    jobtitle.classList.add("jobtitle");
    containerHeader.appendChild(jobtitle);
    const year = document.createElement("div");
    year.innerText = "2014";
    year.classList.add("year");
    containerHeader.appendChild(year);
    const text1 = document.createElement("p");
    text1.innerText = "Kernfächer im Abitur: Englisch und Geschichte";
    text1.classList.add("text");
    containerContent.appendChild(text1);
    // const text2 = document.createElement("p");
    // text2.innerText ="";
    // text2.classList.add("text");
    // containerContent.appendChild(text2);
    const text3 = document.createElement("p");
    text3.innerText =
        "Weitere Fächer in der Abiturprüfung: Deutsch und Mathematik (4.Fach)";
    text3.classList.add("bottom-text");
    containerContent.appendChild(text3);

    containerWrapper.appendChild(containerHeader);
    containerWrapper.appendChild(containerContent);

    return containerWrapper;
}

const container = CvContainer();
element.appendChild(container);

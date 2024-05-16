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

type Props = {
    experience: string;
    jobtitle: string;
    year: string;
    text1: string;
    text2: string;
    text3: string;
};

function CvContainer(props: Props) {
    const containerWrapper = document.createElement("div");
    containerWrapper.classList.add("container-wrapper");
    const containerHeader = document.createElement("div");
    containerHeader.classList.add("education-header");
    const containerContent = document.createElement("div");
    containerContent.classList.add("container-content");
    const experience = document.createElement("div");
    experience.innerText = props.experience;
    experience.classList.add("experience");
    containerHeader.appendChild(experience);
    const jobtitle = document.createElement("div");
    jobtitle.innerText = props.jobtitle;
    jobtitle.classList.add("jobtitle");
    containerHeader.appendChild(jobtitle);
    const year = document.createElement("div");
    year.innerText = props.year;
    year.classList.add("year");
    containerHeader.appendChild(year);
    const text1 = document.createElement("p");
    text1.innerText = props.text1;
    text1.classList.add("text");
    containerContent.appendChild(text1);
    const text2 = document.createElement("p");
    text2.innerText = props.text2;
    text2.classList.add("text");
    containerContent.appendChild(text2);
    const text3 = document.createElement("p");
    text3.innerText = props.text3;
    text3.classList.add("bottom-text");
    containerContent.appendChild(text3);

    containerWrapper.appendChild(containerHeader);
    containerWrapper.appendChild(containerContent);

    return containerWrapper;
}

const objectContainer1: Props = {
    experience: "Ausbildung",
    jobtitle: "Abschluss der allgemeinen Hochschulreife",
    year: "2014",
    text1: "Kernfächer im Abitur: Englisch und Geschichte",
    text2: "",
    text3: "Weitere Fächer in der Abiturprüfung: Deutsch und Mathematik(4.Fach)",
};
const container1 = CvContainer(objectContainer1);
element.appendChild(container1);

const objectContainer2: Props = {
    experience: "Bisherige Berufserfahrung",
    jobtitle: "Pinos Eiscafe&Ristorante",
    year: "2014-2015",
    text1: "Erste Erfahrungen im Gastronomiebereich",
    text2: "Arbeit hinter der Theke und direkte Bedienung der Kundschaft",
    text3: "Erlernung der Kommunikation im direkten Kundenkontakt",
};
const container2 = CvContainer(objectContainer2);
element.appendChild(container2);

const objectContainer3: Props = {
    experience: "Weitere Berufserfahrung",
    jobtitle: "Arbeit als Inklusionshelfer",
    year: "2015-2024",
    text1: "Begleitung von Kindern von 4-12 Jahren in ihrem Schul- und Kitaalltag",
    text2: "Aneignung breitgefächerten Fachwissens & Erfahrung im pädagogischen Bereich",
    text3: "Spezialisierung auf Begleitung von Kindern mit Autismus, ADHS und ES",
};

const container3 = CvContainer(objectContainer3);
element.appendChild(container3);

const objectContainer4: Props = {
    experience: "Weitere Berufserfahrung",
    jobtitle: "Junior Software Developer bei Progani GmbH",
    year: "04.2024-heute",
    text1: "Erlernung neuer Programmiersprachen und -techniken, zB. HTML und Typescript",
    text2: "Durchführung individuell erstellter Aufgaben durch den Vorgesetzten als Lernprozess",
    text3: "Verköstigung eines kulinarisch erquickenden Mettbrötchens an einem jeden Mettwoch",
};

const container4 = CvContainer(objectContainer4);
element.appendChild(container4);

function BottomContainer() {
    const bottomContainer = document.createElement("div");
    const skills = document.createElement("div");
    skills.innerText = "Persönliche Skills";
    skills.classList.add("skills");
    bottomContainer.appendChild(skills);
    const list = document.createElement("ul");
    list.classList.add("list");
    const list1 = document.createElement("li");
    list1.innerText = "Empathie";
    list1.classList.add("list");
    list.appendChild(list1);
    const list2 = document.createElement("li");
    list2.innerText = "Teamfähigkeit";
    list2.classList.add("list");
    list.appendChild(list2);
    const list3 = document.createElement("li");
    list3.innerText = "Geduld";
    list3.classList.add("list");
    list.appendChild(list3);
    const list4 = document.createElement("li");
    list4.innerText = "Kommunikation";
    list4.classList.add("list");
    list.appendChild(list4);
    bottomContainer.appendChild(list);
    return bottomContainer;
}

const bottomContainer = BottomContainer();
element.appendChild(bottomContainer);

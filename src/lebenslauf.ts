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
    text: string[];
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

    for (let text of props.text) {
        const textElement = document.createElement("p");
        textElement.innerText = text;
        textElement.classList.add("text");
        containerContent.appendChild(textElement);
    }
    containerWrapper.appendChild(containerHeader);
    containerWrapper.appendChild(containerContent);

    return containerWrapper;
}

function BottomContainer() {
    const bottomContainer = document.createElement("div");

    const skills = document.createElement("div");
    skills.innerText = "Persönliche Skills";
    skills.classList.add("skills");
    bottomContainer.appendChild(skills);

    const list = document.createElement("ul");
    list.classList.add("list");
    bottomContainer.appendChild(list);

    const skillText = ["Empathie", "Teamfähigkeit", "Geduld", "Kommunikation"];

    for (let skills of skillText) {
        const skillsElement = document.createElement("li");
        skillsElement.innerText = skills;
        skillsElement.classList.add("list");
        list.appendChild(skillsElement);
    }
    return bottomContainer;
}

const data: Props[] = [
    {
        experience: "Ausbildung",
        jobtitle: "Abschluss der allgemeinen Hochschulreife",
        year: "2014",
        text: [
            "Kernfächer im Abitur: Englisch und Geschichte",
            "Weitere Fächer in der Abiturprüfung: Deutsch und Mathematik(4.Fach)",
        ],
    },
    {
        experience: "Bisherige Berufserfahrung",
        jobtitle: "Pinos Eiscafe&Ristorante",
        year: "2014-2015",
        text: [
            "Erste Erfahrungen im Gastronomiebereich",
            "Arbeit hinter der Theke und direkte Bedienung der Kundschaft",
            "Erlernung der Kommunikation im direkten Kundenkontakt",
        ],
    },
    {
        experience: "Weitere Berufserfahrung",
        jobtitle: "Arbeit als Inklusionshelfer",
        year: "2015-2024",
        text: [
            "Begleitung von Kindern von 4-12 Jahren in ihrem Schul- und Kitaalltag",
            "Aneignung breitgefächerten Fachwissens & Erfahrung im pädagogischen Bereich",
            "Spezialisierung auf Begleitung von Kindern mit Autismus, ADHS und ES",
        ],
    },
    {
        experience: "Weitere Berufserfahrung",
        jobtitle: "Junior Software Developer bei Progani GmbH",
        year: "04.2024-heute",
        text: [
            "Erlernung neuer Programmiersprachen und -techniken, zB. HTML und Typescript",
            "Durchführung individuell erstellter Aufgaben durch den Vorgesetzten als Lernprozess",
            "Verköstigung eines kulinarisch erquickenden Mettbrötchens an einem jeden Mettwoch",
        ],
    },
];

for (let container of data) {
    const completeContainer = CvContainer(container);
    element.appendChild(completeContainer);
}

const bottomContainer = BottomContainer();
element.appendChild(bottomContainer);

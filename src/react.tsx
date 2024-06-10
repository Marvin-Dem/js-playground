import { createRoot } from "react-dom/client";

document.body.innerHTML =
    '<div id="app"></div><nav id="navigation"></nav><img id="Avatar></img>';

const root = createRoot(document.getElementById("app")!);
root.render(<div>Hello World!</div>);

function NavigationBar() {
    return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById("navigation");
const root2 = createRoot(domNode!);
root2.render(<NavigationBar />);

type AvatarProps = {
    person: {
        name: string;
    };
    size: number;
};
function Avatar({ person, size }: AvatarProps) {
    return (
        <img
            className="avatar"
            src={
                "https://profile-images.xing.com/images/69f8e0b08c631937469942a9f88c7ce6-1/marvin-demirkaya.1024x1024.jpg"
            }
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

//   root.render(Avatar({person: {name:"abc"}, size: 100}))
root.render(<Avatar person={{ name: "abc" }} size={100} />);

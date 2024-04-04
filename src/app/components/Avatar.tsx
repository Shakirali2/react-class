interface AvatarType {
    person : Person;
    size: number;
}

interface Person {
    name: string;
    imageId : string
}

export default function Avatar({ person, size }: AvatarType) {
    const avatar = "https://i.imgur.com/MK3eW3Am.jpg";
    const description = "Katherine Johnson";
    return <img src= {avatar} alt={description} />;
}
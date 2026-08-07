enum OperatingSystems {
    linux = "Linux",
    windows = "Windows",
    mac = "Mac",
}

let myOS: OperatingSystems = OperatingSystems.windows;
console.log(`My operating system is ${myOS}.`);

let guitars = ["Fender", "Gibson", "Ibanez"];

guitars.push("PRS");
console.log(`My favorite guitars are: ${guitars.join(", ")}.`);
guitars.unshift("Yamaha");
console.log(`After adding Yamaha, my favorite guitars are: ${guitars.join(", ")}.`);

let bands: string[] = ["Metallica", "Nirvana", "Queen"];
bands.push("Pink Floyd");
console.log(`My favorite bands are: ${bands.join(", ")}.`);
bands.unshift("The Beatles");
console.log(`After adding The Beatles, my favorite bands are: ${bands.join(", ")}.`);
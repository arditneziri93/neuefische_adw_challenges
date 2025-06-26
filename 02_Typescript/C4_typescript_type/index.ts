const americanSystemMap = new Map<number, string>([
    [1, "A"],
    [2, "B"],
    [3, "C"],
    [4, "D"],
    [5, "E"],
    [6, "F"]
]);

function getAmericanGrade(grade: number) {
    return americanSystemMap.get(grade);
}

function formatGrades(grades: Grades): (number | string)[] {
    return grades.map((e) => e === undefined ? "*" : e);
}

function displayStudents(students: Student[]) {
    students.forEach((s) => {
        const formattedName = s.firstName + " " + s.lastName + " (" + s.age + ")";
        let underline = "";
        for (let i: number = 0; i < formattedName.length; i++) {
            underline += "=";
        }
        console.log("");
        console.log(s.firstName + " " + s.lastName + " (" + s.age + ")");
        console.log(underline);
        console.log("Grades " + formatGrades(s.grades).join(", "));
        console.log("");
        console.log("");
    });
}


type Grades = (number | string | undefined)[]

type Student = {
    firstName: string,
    lastName: string,
    age: number,
    grades: (number | string | undefined)[]
}



let students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Richard",
        age: 40,
        grades: [1, 2, "A", 4, undefined, "F"]
    },
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5]
    }
] as Student[];

displayStudents(students);

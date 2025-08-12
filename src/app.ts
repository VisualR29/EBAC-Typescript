const nombre: string = "Luis";
const id: number = 5;

function ageCalculator(birthdayStr: string): number {
    const today: Date = new Date();
    const birthday: Date = new Date(birthdayStr);

    let age: number = today.getFullYear() - birthday.getFullYear();
    
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
}

let birthday: string = "2005-03-22";

console.log(`La persona tiene ${ageCalculator(birthday)} años.`);

birthday = "2005-10-22";

console.log(`La persona tiene ${ageCalculator(birthday)} años.`);
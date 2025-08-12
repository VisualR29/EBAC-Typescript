function ageCalculator(birthdayStr: string): number {
    const today: Date = new Date();
    const birthday: Date = new Date(birthdayStr);

    let age: number = today.getFullYear() - birthday.getFullYear();
    
    if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
}

let birthday: string = "2005-08-10";

console.log(`La persona tiene ${ageCalculator(birthday)} años.`);

birthday = "2005-08-22";

console.log(`La persona tiene ${ageCalculator(birthday)} años.`);
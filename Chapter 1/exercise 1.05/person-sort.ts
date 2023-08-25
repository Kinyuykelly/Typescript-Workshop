interface Person {
    firstName: string;
    lastName:string;
}
let count = 0;
function getFullName(person: Person) {
    count += 1;
    return `${person.firstName} ${person.lastName}`;
}
const programmers: Person[] = [
    {firstName: 'kim', lastName: 'Babara'},
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Mark', lastName: 'Smith'},
    {firstName: 'Anders', lastName: 'Guido'},
    {firstName: 'Brandon', lastName: 'Eich'},
]
// a naive and straight forward sorting function
function naiveSortPersons(persons: Person[]): Person[]{
    return persons.slice().sort((first, second) => {
        const firstFullName = getFullName(first);
        const secondFullName = getFullName(second);
        return firstFullName.localeCompare(secondFullName);
    })
}
function schwartzSortPersons (persons: Person[]): Person[]{
    const tuples: [Person, string] [] = persons.map(person => [person, getFullName(person)]);
    tuples.sort((first, second) => first[1].localeCompare(second[1]));
    const result = tuples.map(tuple => tuple[0]);
    return result;
}
count  = 0;
const sortedNaive = naiveSortPersons(programmers);
console.log(sortedNaive);
console.log(`When using the naive approach, the function calles ${count} times`);
count = 0;
const sortedSchwartz = schwartzSortPersons(programmers);
console.log(sortedSchwartz);
console.log(`When using the naive approach, the function calles ${count} times`);
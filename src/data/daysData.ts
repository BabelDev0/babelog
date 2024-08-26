const today = new Date();
const startDate = new Date('2024-08-19');

const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(2);
    return dd + '-' + mm + '-' + yy;
};

// make a function to check if the date is present in the folder ../pages/days
// in the forlder there are markdown files with the name of the date in the format dd-mm-yy.md
// return a boolean if the file is present
const checkIfFileExists = (date: string) => {

};

// put an element in the array for each day from the start date to today
// put in the format dd-mm-yy
const days: string[] = [];
for (let d = startDate; d <= today; d.setDate(d.getDate() + 1)) {
    days.push(formatDate(new Date(d)));
}

export default days;
const today = new Date('2024-09-17');
const startDate = new Date('2024-08-19');

const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(2);
    return dd + '-' + mm + '-' + yy;
};

// put an element in the array for each day from the start date to today
// put in the format dd-mm-yy
const days: string[] = [];
for (let d = startDate; d <= today; d.setDate(d.getDate() + 1)) {
    days.push(formatDate(new Date(d)));
}

export default days;
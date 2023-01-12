export const dateFormatter = (value) => {
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = monthName[value.getMonth()];
    const day = value.getDate();
    const year = value.getFullYear();

    const fullDate = `${day} ${month} ${year}`;
    console.log(fullDate)
    return fullDate;
}
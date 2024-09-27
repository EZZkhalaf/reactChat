export const extractTime = (data) =>{
    const date = new  Date(data);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
}

const padZero=(number)=>{
    return number.toString().padStart(2 , "0");
}
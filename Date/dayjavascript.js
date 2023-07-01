import dayjs from "dayjs";

function humaniceDate(myDate) {
    if (myDate >= dayjs.subtract(1, 'day').toDate()) {
        return dayjs(myDate).format('HH:mm')
    } 
 
}

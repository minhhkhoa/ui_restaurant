import moment from "moment"
export const convertDateTimetoString = (dateTime)=>{
    //Chuyển sang định dạng ISO 8601 để libary support
    const isoDate = moment(dateTime, 'DD/MM/YYYY HH:mm:ss').toISOString();
    return moment(isoDate).format('DD-MM-YYYY')
}
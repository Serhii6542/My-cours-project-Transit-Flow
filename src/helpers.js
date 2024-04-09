export const addZero = n => n < 10 ? '0'+n : ''+n;

export function FormatDate(date){
    const d = new Date(date)
    return addZero(d.getDate())+ '.' + addZero(d.getMonth()+1) +'.'+ d.getFullYear()
}
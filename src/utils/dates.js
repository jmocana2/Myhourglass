const MONTHS = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
const f=new Date();
const date = `${f.getDate()} de ${MONTHS[f.getMonth()]} de ${f.getFullYear()}`;
const datetime = `${f.getDate()}-${f.getMonth()}-${f.getFullYear()}`;

export {date, datetime};
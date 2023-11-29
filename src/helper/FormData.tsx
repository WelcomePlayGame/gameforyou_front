

 const FormDate = (instantDate : any)=> {

  const currentDate = new Date();
  const date = new Date(instantDate*1000);

  const daysAgo = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();


if(daysAgo === 0) {
  return 'Today'
} else if (daysAgo===1) {
  return 'Tomorrow'
}


  return `${day}${month}${year}`


}

export {FormDate as formDate}
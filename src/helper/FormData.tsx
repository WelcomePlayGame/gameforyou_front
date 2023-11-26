

 const FormDate = (instantDate : any)=> {


  const date = new Date(instantDate*1000);


  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();


//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();


  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;


}

export {FormDate as formDate}
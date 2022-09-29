const urlEndpoint = "https://iws.itcn.dk/techcollege/schedules?departmentCode=smed";
//** vores url urlEndpoint */
fetch(urlEndpoint)
  /** return response if urlEndpoint is resolved */
  .then(response => {
    // returns response in json format
    return response.json();
  })
  .then(data => {
    //** console.log the result */
    console.log(data);
  })

  .catch(error => {
    /** throw an error if the promise is not resolved */
    console.error(error);
  })
  /** run a function if everything is resolwed */
  .finally(() => {
    // * run the function showmehej
    showmehej();
  });

const hej = () => {
  //* console.log hej if funtion has run
  console.log("hej");
};

/** this funtion has another function passed as a prop */
renderHej = (callback, b) => {
  console.log(b);
  callback();
};

// this function runs when all is fetched and runs the function
//renderHej right away. adding the function (const) as a property
const showmehej = () => {
  renderHej(hej, "jeg er også med");
};

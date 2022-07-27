
const  updateInputValue=(event, updatefunction)=> {
    const data = event.target.value;
    updatefunction(data);
   }
export default updateInputValue;

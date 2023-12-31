import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import { selectSubtotal, selectTipAmount, selectTotal } from "../store/items/selectors";

const mapStateToProps = state => {
 
    const subtotal = selectSubtotal(state); 
    const tipAmount = selectTipAmount(state); 
    const total = selectTotal(state); 

    //const items = state.items;
    //let subtotal  = 0
    // for(const item of items) {
    //     subtotal += item.quantity * item.price; 
    // }
//     const subtotal = items.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);

//   const tipAmount = subtotal * (state.tipPercentage / 100); 

//   const total = subtotal + tipAmount; 

   return {
    subtotal, 
    tipAmount, 
    total
   }
  
}

export const SummaryContainer = connect(mapStateToProps)(Summary);
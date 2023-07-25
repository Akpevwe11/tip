import { connect } from 'react-redux'; 
import { NewItemForm } from '../components/NewItemForm'; 
import { addNewItem } from '../store/items/action';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
 
          onSubmit: (name, price) => addNewItem(name, price)

    }, dispatch)
  
    // return {
    //     onSubmit: (name, price) => disptch(addNewItem(name, price))

    // }
}

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm); 


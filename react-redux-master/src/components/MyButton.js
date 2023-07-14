import {useDispatch} from 'react-redux';
import inecrement from '../Actions';

const MyButton = () =>{
    const dispatch = useDispatch();
    return (
    <button onClick={()=> dispatch(inecrement(1))} >Increase Counter</button>
    )
}

export default MyButton;
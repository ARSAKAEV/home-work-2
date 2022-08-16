import {useSelector, useDispatch} from 'react-redux'
import Redux from "./Redux";

function DeletedBtn() {
    const dispatch = useDispatch()

    const hadleRemove = () => {
        dispatch({
            type: 'delete'
        })
    }

    return (
    <div>
        <button onClick={hadleRemove}>
            delete
        </button>
    </div>
  );
}

export default DeletedBtn;
import { useSelector } from 'react-redux'

const DivPanel = () => {

    let  counterVal = useSelector(state => state.counter)

return (
    <div>
        The Value of counter is {counterVal}
    </div>
)
}
export default DivPanel
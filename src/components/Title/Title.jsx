import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/about/actions";

function Title(props) {
    console.log("props title >", props);
    const text = useSelector(state => {
        const { text } = state
        return text.text
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-titel-top">
                <input className="h-10 mt-5 border-[3px] border-gray-500 outline-none hover:border-[5px] hover:border-pink-400" type="text" onChange={handleChange} />
            </div>
            <p>{ text }</p>
        </div>
    )
}
export default Title
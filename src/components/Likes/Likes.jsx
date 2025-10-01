import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "../../redux/about/actions";


function Likes(props) {
    console.log("render>", props);
    return (
        <div className="flex justify-between  mt-5">
            <button onClick={props.onIncrementLikes} className="basis-[48%] border-2 border-[wheat] p-[5px] text-center text-[15px] text-purple-700 transition-all duration-500 hover:border-gray-400 hover:text-pink-500">👍{props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes} className="basis-[48%] border-2 border-[wheat] p-[5px] text-center text-[15px] text-purple-700 transition-all duration-500 hover:border-gray-400 hover:text-pink-500">👎</button>
        </div>
    )
}

function mapStateProps(state) {
    const { likes } = state
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Likes); 
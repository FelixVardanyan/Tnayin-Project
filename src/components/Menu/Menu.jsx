import { NavLink } from "react-router-dom"
import { fakeData } from "../../datas/data"

export default function Menu() {
    return (
        <div id="nav">
            <ul className="bg-gray-600 flex justify-around p-8 list-none">
                {fakeData.map((e, i)=>(
                    <NavLink to={e.to} className={({ isActive }) => (isActive ? "text-pink-600 decoration-none text-3xl" : "text-red-600 decoration-none text-3xl")} key={e.id}>{e.text}</NavLink>
                ))}
            </ul>
        </div>
    )
};
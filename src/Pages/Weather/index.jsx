import { useEffect, useState } from "react";
import nkar from "../../assets/City.jpg";
import City from "../../assets/CityBack.jpg";
import axios from "axios"
import Masis from "../../assets/masis.jpg";
import Yerevan from "../../assets/yerevan.png";
import Moscow from "../../assets/moscow.jpg";




function Weather() {

    const [input, setInput] = useState("Yerevan")
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [city, setCity] = useState(Yerevan)




    const change = (e) => {

        setInput(e.target.value)

    }



    const click = () => {


        const api = `https:/api.openweathermap.org/data/2.5/forecast?q=${input}&appid=cb36d56d59a6202351fe6cff27d8977a`
        axios.get(api).then((e) => {
            e.data.gr = gr
            setData(e.data)
        }).catch(err =>
            console.log(err)

        )
    }

    useEffect((e) => {
        if (input == "Yerevan") {
            setCity(Yerevan)
        } else if (input == "Moscow") {
            setCity(Moscow)
        }
        else {
            setCity(Masis)
        }

    }, [data])

    console.log(data, "data");


    useEffect(() => {
        setList(data.list)
    }, [data])

    useEffect(() => {
        const first = "https:/api.openweathermap.org/data/2.5/forecast?q=yerevan&appid=cb36d56d59a6202351fe6cff27d8977a"
        axios.get(first).then((e) => {
            setData(e.data)
        }).catch(err =>
            console.log(err)

        )
    }, [])


    return (
        <div style={{ backgroundImage: `url(${City})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <div className="min-h-screen flex flex-col items-center justify-start p-5 text-white">
                <h1 className="my-5 text-3xl font-bold">CITY WEATHER WIDGET</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-80 relative mr-4 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-100 object-cover"
                            src={city}
                            alt="city"
                        />
                        <div className="absolute bottom-2 left-4 text-left">
                            <h2 className="text-2xl font-bold">{data?.city?.name}</h2>
                            <p>{data?.city?.name}</p>
                            {list?.length > 0 && <p>{list[0].dt_txt}</p>}
                            <p>Thursday, May 19, 2025</p>
                            <div className="text-4xl font-bold">31.09 °C</div>
                        </div>
                    </div>

                    <div className="w-50 p-5 rounded-xl bg-black/85">
                        <div className="text-5xl mb-2">🌤</div>
                        <h2 className="text-xl font-bold">Cloudy</h2>

                        <div className="mt-5">
                            {list?.map((e, i) => {
                                if (i < 5) {
                                    return (
                                        <div key={i}>
                                            <span>
                                                {e.dt_txt + " "}

                                            </span>
                                            <span>
                                                {Math.round(e.main.temp - 273.15) + "°C"}
                                            </span>
                                        </div>)
                                }
                            })}

                        </div>
                    </div>
                </div>

                <div className="mt-5 flex items-center">
                    <input type="text" placeholder="greq qaxaq"
                        onChange={change}
                        value={input}
                        className="border-1 rounded mr-2"
                    />
                    <button onClick={click} className="bg-blue-800 rounded p-2">Click me</button>
                </div>

                <div className="mt-5 text-sm text-center">
                    2025 City Weather Widget, All Rights Reserved | Design by W3layouts
                </div>
            </div>
        </div>
    );
}

export default Weather;
import nkar from "../../assets/City.jpg";
import City from "../../assets/CityBack.jpg";

function Weather() {
    return (
        <div style={{ backgroundImage: `url(${City})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
            <div className="min-h-screen flex flex-col items-center justify-start p-5 text-white">
                <h1 className="my-5 text-3xl font-bold">CITY WEATHER WIDGET</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-80 relative mr-4 rounded-xl overflow-hidden">
                        <img
                            className="w-full h-[300px] object-cover"
                            src={nkar}
                            alt="city"
                        />
                        <div className="absolute bottom-2 left-4 text-left">
                            <h2 className="text-2xl font-bold">Yerevan City</h2>
                            <p>Yerevan</p>
                            <p>14:56:28</p>
                            <p>Thursday, May 19, 2025</p>
                            <div className="text-4xl font-bold">31.09 °C</div>
                        </div>
                    </div>

                    <div className="w-50 p-5 rounded-xl bg-black/85">
                        <div className="text-5xl mb-2">🌤</div>
                        <h2 className="text-xl font-bold">Cloudy</h2>

                        <div className="mt-5">
                            <div className="flex justify-between py-1 border-b border-white">
                                <span>Now</span>
                                <span>20 °C</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-white">
                                <span>09:00</span>
                                <span>22 °C</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-white">
                                <span>12:00</span>
                                <span>24 °C</span>
                            </div>
                            <div className="flex justify-between py-1 border-b border-white">
                                <span>15:00</span>
                                <span>23 °C</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 flex items-center">
                    <input
                        type="text"
                        placeholder="yerevan"
                        className="px-3 py-2 rounded-md mr-2 outline-none"
                    />
                    <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-800 text-white">
                        Click me
                    </button>
                </div>

                <div className="mt-5 text-sm text-center">
                    2025 City Weather Widget, All Rights Reserved | Design by W3layouts
                </div>
            </div>
        </div>
    );
}

export default Weather;
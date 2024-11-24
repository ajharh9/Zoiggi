const Footer = () =>{
    return (
        <div className="bg-black">
            <div className="bg-black text-white mx-56 flex justify-between py-10 font-semibold">
                <div className="w-1/3">
                    <h1 className="text-2xl font-bold">Zoiggi</h1>
                    <h1 className="text-gray-300">2024©️ajharh9 PVT.LTD </h1>
                </div>
                <div className="flex justify-evenly w-2/3 flex-wrap text-center">
                    <div className="w-44">
                        <h1 className="text-xl font-bold">Company</h1>
                        <ul className="text-gray-300 space-y-2 pt-3">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Swiggy One</li>
                            <li>Swiggy Instamart</li>
                            <li>Swiggy Genie</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 justify-evenly w-2/3 flex-wrap text-center">
                    <div className="w-44">
                        <h1 className="text-xl font-bold">Contact us</h1>
                        <ul className="text-gray-300 space-y-2 pt-3">
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul>
                    </div>
                    <div className="w-44">
                        <h1 className="text-xl font-bold">Legal</h1>
                        <ul className="text-gray-300 space-y-2 pt-3">
                            <li>Terms & Conditions</li>
                            <li>Careers</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                            <li>Investor Relations</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-evenly w-2/3 flex-wrap text-center">
                    <div className="w-44">
                        <h1 className="text-xl font-bold">We deliver to:</h1>
                        <ul className="space-y-3 text-gray-300 pt-3">
                            <li>Bangalore</li>
                            <li>Gurgaon</li>
                            <li>Hyderabad</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
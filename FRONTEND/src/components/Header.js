// import { Link } from "react-router-dom";
// const Headers = () =>{
//     return (
//         <div className="bg-gray-100 flex items-center justify-between fixed w-full">
//             <div className="w-1/5 flex items-center">
//                 <img className="ml-4 h-24" alt="logo" src="food.png"/>
//                 <h1 className="font-semibold font-serif text-amber-600 text-3xl ">Zoiggi</h1>
//             </div>
//             <div className="mr-20 w-2/5">
//                 <ul className="flex justify-between">
//                     {/* <li><a href="/home">Home🏠</a></li> */}
//                     {/* <li>< Link to={"./home"}>Search🔎</Link></li> */}
//                     {/* <li><a href="/home">Sign-in✓</a></li>
//                     <li><a href="/home">Help</a></li>
//                     <li><a href="/home">Cart🛒</a></li> */}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Headers;

import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-between fixed w-full">
      <div className="w-1/5 flex items-center">
        <img className="ml-4 h-24" alt="logo" src="food.png" />
        <h1 className="font-semibold font-serif text-amber-600 text-3xl">Zoiggi</h1>
      </div>
      <div className="mr-20 w-2/5">
        <ul className="flex justify-between">
          <li><Link to="/home">Home🏠</Link></li>
          {/* <li>
            <Link to="/home/search"
                >Search🔎
            </Link>
          </li> */}
          <li><Link to="/offer">Offers🥳</Link></li>
          <li><a href="/login">Sign-in✓</a></li>
          <li><a href="/home">Help</a></li>
          <li><a href="/home">Cart🛒</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;

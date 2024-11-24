import { imgApi } from "../services/data";
const Restaurant = (props) =>{
    return (
        <div className="flex flex-col w-52 h-64 m-7 rounded-lg cursor-pointer">
            {/* console.log */}
            <div className="h-1/2">
                <img className="object-cover h-full w-full  rounded-xl"  alt="rest-img" src={imgApi+props.cloudinaryImageId}/>
            </div>
            <div className="h-1/2 flex flex-col pl-4 pt-2">
                <h1 className="truncate text-base font-bold">{props.name}</h1>
                <h1 className="text-base mr-4 ">🤩{props.avgRatingString}•<span className="font-semibold">{props.deliveryTime}</span></h1>
                <h1 className="truncate text-base mr-8 text-gray-600">{props.cuisines.join(", ")}</h1>
                <h1 className="truncate text-base mr-8 text-gray-600">{props.locality}</h1>
            </div>
        </div>
    )
}

export default Restaurant;
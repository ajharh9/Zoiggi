import Restaurant from "./Restaurant";
const RestaurantCards = (props) =>{
    // console.log(props)
    return(
        <div>
            <div className='text-center px-24 pt-6 font-semibold font-serif text-black-600 text-xl'>{props.cardHead}</div>
                <div className='flex flex-wrap justify-evenly px-24'>
                    {
                        // ?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                        props.restData.map(data=>(
                                <Restaurant key={data.id} {...data}/>
                            )
                        )
                    }
                </div>
        </div>
    )

}

export default RestaurantCards;
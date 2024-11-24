const Sheamer = () =>{
    return (
        <div className='flex flex-wrap justify-evenly px-24 pt-24 '>
                {
                    Array.from({ length: 10 }, (_, index) => (
                        // <Sheamer key={index} />
                        <div 
                            className="flex flex-col w-52 h-64 m-7 bg-gray-200 rounded-lg"
                            key={index}
                        >
                        </div>
                    ))
                }
            </div>
        // <div className="flex flex-col w-52 h-64 m-7 bg-gray-200 rounded-lg">
        // </div>
    )
}

export default Sheamer;
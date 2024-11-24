import { imgApi2 } from '../services/data';
const OnMind = (props) =>{
    return (
        <div className='text-center'>
            {/* <div className='px-24 pt-6 font-semibold font-serif text-black-600 text-xl'>{props.onMindTitle}</div> */}
            <div 
                    className="w-full max-w-screen-md mx-auto overflow-x-auto flex space-x-4 scrollbar-hide"
                style={{ scrollbarWidth: 'none', MsOverflowStyle: 'none' }}
            >
                {
                        props.onMindData.map(
                            (data)=>(
                                    <img key={imgApi2+data?.id} src={imgApi2+data?.imageId} alt="Image 1" className="h-32 w-56 object-cover rounded-lg inline-block" />
                            )
                        )
                }
            </div>
        </div>
    )
}

export default OnMind;
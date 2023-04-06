import Charlie from './Charlie.png';
import EmojiFlag from './emojione_flag-for-thailand.png'
import Image from 'next/image';
import Tag from './tag';
const resultblock = ({result=""}) => {
    return (
        <>
        <div className='text-center mt-8'>
            <span className='text-2xl'>ผลลัพธ์การค้นหา "{result}"</span>
        </div>
        <div className="bg-white drop-shadow-xl rounded-lg h-full w-1/3 m-auto mt-8 font-['roboto']">   
            <div className='py-8'>
                <div className="flex justify-center my-1">
                    <Image width={190} height={190} src={Charlie} alt="Example image"/>
                </div>
                <div className="flex justify-center my-1">
                    <span className='text-3xl font-bold'>ชาร์ลี  พูท</span>
                </div>
                <div className="flex justify-center my-1">
                    <span className='text-xl'>นักร้อง - นักแต่งเพลง</span>
                </div>
                <div className="flex justify-center items-center my-1">
                    <Image width={32} height={32} src={EmojiFlag} alt="Example image"/>
                    <span className='text-base mx-1'>Thailand</span>
                    <Tag label='POP'/>
                </div>
            </div>         
        </div>
        </>

    );
}

export default resultblock;
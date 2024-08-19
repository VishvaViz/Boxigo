import { useState, useEffect } from 'react'
import Axios from 'axios';
import { FaHouse } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";
import { FaRoute } from "react-icons/fa6";
import { IoCalendarSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import ViewMoreDetails from '../utils/ViewMoreDetails';
function MyMoves() {
    const [data, setData] = useState([])
    const [model, setModel] = useState(null)

    useEffect(() => {
        Axios.get('http://test.api.boxigo.in/sample-data/')
            .then((resp) => {
                setData(resp.data?.Customer_Estimate_Flow)
            })
            .catch((error) => console.log(error))
    }, [])
    const toggleModel = (id) => {
        setModel(model === id ? null : id);
    };
    var options = { year: 'numeric', month: 'short', day: 'numeric' };

    return (
        <div className='p-[5px]'>
            <h1 className='font-bold'>
                My Moves
            </h1>
            {
                data?.length > 0 ?
                    <>
                        {
                            data?.map((item, index) => {
                                return <>
                                    <div className='flex flex-col gap-6'>
                                        <div className='flex items-center gap-8 mt-[10px]'>
                                            <div className='w-[40%]'>
                                                <span className='text-[16px] font-bold'>
                                                    From
                                                </span>
                                                <p className='text-[14px]'>
                                                    {item?.moving_from}
                                                </p>
                                            </div>
                                            <span className='text-[16px] text-[#ee553b] flex justify-center items-center h-[40px] w-[40px] cursor-pointer bg-white rounded-[50%] shadow'>
                                                <FaArrowRightLong />
                                            </span>
                                            <div className='w-[40%] '>
                                                <span className='text-[16px] font-bold'>
                                                    To
                                                </span>
                                                <p className='text-[14px]'>
                                                    {item?.moving_to}
                                                </p>
                                            </div>
                                            <div className='w-[10%] flex flex-col'>
                                                <span className='text-[16px] font-bold'>
                                                    Request#
                                                </span>
                                                <span className='text-[14px] font-bold text-[#ee553b]'>
                                                    {item?.estimate_id}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <div className='flex gap-10 items-center'>
                                                <div className='flex justify-center items-center gap-2 '>
                                                    <FaHouse className='text-[22px] text-[#ee553b]' /> <span className='text-[12px]'>{item?.property_size}</span>
                                                </div>
                                                <div className='flex justify-center items-center gap-2 '>
                                                    <FaBoxes className='text-[22px] text-[#ee553b]' /> <span className='text-[12px]'>{item?.total_items}</span>
                                                </div>
                                                <div className='flex justify-center items-center gap-2 '>
                                                    <FaRoute className='text-[22px] text-[#ee553b]' /> <span className='text-[12px]'>{item?.distance}</span>
                                                </div>
                                                <div className='flex justify-center items-center gap-2   '>
                                                    <IoCalendarSharp className='text-[22px] text-[#ee553b]' /> <span className='text-[12px]'>
                                                        {new Date(item?.moving_on).toLocaleDateString([], options)
                                                        } at {
                                                            new Date(item?.moving_on).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='text-[14px] cursor-pointer'>
                                                    <FaPencil />
                                                </span>
                                            </div>
                                            <div className='flex items-center gap-[80px]  ml-[30px]'>
                                                <div className='flex items-center gap-1'>
                                                    <input className=' focus:outline-none focus:ring-0 h-[10px] w-[10px]' type='checkbox' checked={item?.move_date_flexible === 1 ? "checked" : ""} /> <span className='text-[12px]'>is flexiable</span>
                                                </div>
                                                <div className='flex gap-[10px]'>
                                                    <button
                                                        onClick={() => toggleModel(index)}
                                                        className='w-[155px] h-[40px] hover:bg-[#ee553b] text-[#ee553b] hover:text-white border-2 p-[1px] text-[14px] border-[#ee553b] rounded-sm'>
                                                        View More Details
                                                    </button>
                                                    <button className='w-[155px] h-[40px] bg-[#ee553b] text-white text-[14px] p-[1px] rounded-sm'>
                                                        Quoutes Awaiting
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <span className='text-[#ee553b] text-[20px]'>
                                                <IoIosWarning />
                                            </span>
                                            <h1 className='text-[16px] font-bold'>
                                                Disclaimer:
                                            </h1>
                                            <span className='text-[14px] '>
                                                Please update your move data before two days of shifting
                                            </span>
                                        </div>
                                        {
                                            model === index && (
                                                <ViewMoreDetails item={item} />
                                            )
                                        }
                                        <hr />
                                    </div>
                                </>
                            })
                        }
                    </>
                    :
                    <div className='w-full h-screen flex justify-center items-center'>
                        Loading ....
                    </div>
            }
        </div>
    )
}

export default MyMoves


import React from 'react'
import AccordionComp from './Accordation';

function ViewMoreDetails({item}) {
    return (
        <div>

            <div className='flex flex-col gap-3 mt-2'>
                <div className='flex gap-4 items-center'>
                    <span className='text-14px font-bold'>
                        Inventory Details
                    </span>
                    <button className='w-[140px] h-[35px] text-[13px] rounded-md font-[500] bg-black text-white'>
                        Edit Inventory
                    </button>
                </div>
                <div>

                    <div className='mt-[10px]'>
                        {item.items.inventory.map((a) => (
                            <AccordionComp item={a} l />
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-4 mt-[20px]'>
                <div className='flex gap-4 items-center'>
                    <span className='text-14px font-bold'>
                        House Details
                    </span>
                    <button className='w-[140px] h-[35px] text-[13px] rounded-md font-[500] bg-black text-white'>
                        Edit house details
                    </button>
                </div>

                <div className='flex flex-col gap-4 mt-[30px]'>
                    <div className='flex flex-col gap-5'>

                        <span className='text-[#ee553b] font-bold'>
                            Existing House Details
                        </span>
                        <div className='flex gap-[130px]'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Floor No.
                                </span>
                                <span>
                                    {item?.old_floor_no}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Elevator Available
                                </span>
                                <span>
                                    {item?.old_elevator_availability}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Packing Required
                                </span>
                                <span>
                                    {item?.packing_service}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Distance from truck / Staircase to truck
                                </span>
                                <span>
                                    {item?.old_parking_distance}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[14px] font-bold '>
                                Additional Information
                            </span>
                            <span className='text-[14px]'>
                                No additional information
                            </span>
                        </div>
                        <hr />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-[#ee553b] font-bold'>
                            New House Details
                        </span>
                        <div className='flex gap-[130px]'>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Floor No.
                                </span>
                                <span>
                                    {item?.new_floor_no}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Elevator Available
                                </span>
                                <span>
                                    {item?.new_elevator_availability}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Packing Required
                                </span>
                                <span>
                                    {item?.packing_service}
                                </span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-[14px] font-bold '>
                                    Distance from truck / Staircase to truck
                                </span>
                                <span>
                                    {item?.new_parking_distance}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-[14px] font-bold '>
                                Additional Information
                            </span>
                            <span>
                                1
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewMoreDetails
import { Accordion } from 'flowbite-react';
export default function AccordionComp({ item }) {
    return (
        <div className='mb-[10px]'>
            <Accordion collapseAll>
                <Accordion.Panel >
                    <Accordion.Title className="text-red-600 focus:outline-none focus:ring-0 bg-slate-100 "> {/* Custom text color */}
                        {item?.displayName}
                        <span className="ml-[20px] bg-red-600 text-white rounded-full px-2">{item?.order}</span>
                    </Accordion.Title>
                    <Accordion.Content>
                        <div className='grid grid-cols-4 gap-4'>
                            {item?.category.map((cat, catIndex) => (
                                <div key={catIndex}>
                                    <h6 className="font-bold text-[]">{cat.displayName}</h6>
                                    {cat.items.map((i, iIndex) => (
                                        <div key={iIndex} className='mb-4'>
                                            <div className='flex justify-between'>
                                                <h6 className="font-medium">{i.displayName}</h6>
                                                <h6 className="font-bold">{i.order}</h6>
                                            </div>
                                            {i.type.map((t, tIndex) => (
                                                <div key={tIndex}>
                                                    <p className="font-bold text-sm">{t.option}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}


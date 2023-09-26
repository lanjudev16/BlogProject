import DiscoverCard from "./DiscoverCard";
import image1 from '../../../../public/DiscoverMore/image1.png'
import image2 from '../../../../public/DiscoverMore/image2.png'
import image3 from '../../../../public/DiscoverMore/image3.png'
import image4 from '../../../../public/DiscoverMore/image4.png'
import person1 from '../../../../public/DiscoverMore/person1.png'
import person2 from '../../../../public/DiscoverMore/person2.png'
import person3 from '../../../../public/DiscoverMore/person3.png'
import person4 from '../../../../public/DiscoverMore/person4.png'
import ethereum2 from '../../../../public/TopCollection/Person/ethereum2.png'
import PrimaryButton from "../../../Shared/Button/PrimaryButton";
import { FaBeer, FaFilter, FaSort } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const DiscoverMore = () => {
    const data = [
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]

    const data1 = [
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]

    const data2 = [
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]
    const data3 = [
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]
    const data4 = [
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]
    const data5 = [
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]
    const data6 = [
        {
            image: image2,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image1,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image4,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
        {
            image: image3,
            person: [person1, person2, person3, person4],
            name: "Aspect",
            ethereum: ethereum2,
            ethValue: 0.25,
        },
    ]
    


    return (
        <Tabs>
            <div className="bg-[#F7F8FA] py-10">
                <div className="lg:w-[1140px] lg:mx-auto ">
                    <TabList>
                        <div className="mb-5 lg:mx-0 mx-5">
                            <h2 className="lg:text-[34px] text-2xl font-extrabold text-black  uppercase">Discover more nfts</h2>
                            <div className="flex justify-between my-8">
                                <div className="flex flex-wrap gap-2 items-center">
                                    <Tab><button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">All Categories</button></Tab>
                                    <Tab><button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Art</button></Tab>
                                    <Tab>
                                        <button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Celebrities</button></Tab>
                                    <Tab>
                                        <button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Gaming</button>
                                    </Tab>
                                    <Tab>
                                        <button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Sport</button>
                                    </Tab>
                                    <Tab>
                                        <button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Music</button>
                                    </Tab>
                                    <Tab><button className="bg-[#DCDCDC] px-5 font-semibold py-2 rounded-full">Crypto</button></Tab>
                                </div>
                                <button className="bg-[#DCDCDC] px-5 lg:h-full h-[50px] font-semibold py-2 rounded-full"><span className="flex justify-between items-center"><FaSort></FaSort>  <span>Filter</span></span></button>
                            </div>
                        </div>
                    </TabList>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data1.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data2.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data3.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data4.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data5.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=" grid lg:grid-cols-4 gap-5">

                            {
                                data6.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    );
};

export default DiscoverMore;
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
import SecondaryButton from "../../../Shared/Button/SecondaryButton";
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
    return (
        <div className="bg-[#F7F8FA] py-10">
            <div className="lg:w-[1140px] mx-auto">
                <div className="mb-5">
                    <h2 className="text-[34px] font-extrabold text-black  uppercase">Discover more nfts</h2>
                    <div className="grid lg:grid-cols-7 gap-3 my-8">
                        <PrimaryButton>All Categories</PrimaryButton>
                        <SecondaryButton>Art</SecondaryButton>
                        <SecondaryButton>Celebrities</SecondaryButton>
                        <SecondaryButton>Gaming</SecondaryButton>
                        <SecondaryButton>Sport</SecondaryButton>
                        <SecondaryButton>Music</SecondaryButton>
                        <SecondaryButton>Crypto</SecondaryButton>
                    </div>
                </div>
                <div className=" grid lg:grid-cols-4 gap-5">

                    {
                        data.map((item, index) => <DiscoverCard key={index} cardData={item}></DiscoverCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
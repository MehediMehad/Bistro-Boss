import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading={"check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div className="">
                    <img src={featuredImg} alt="featured image" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029 </p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum at excepturi tempore inventore quis repellendus quam magnam. Consequatur illo iure, eveniet assumenda corporis ex voluptatem mollitia libero a et quo ab accusantium id magni nobis. Dolorem unde sequi aliquam soluta minus ad deserunt mollitia? Exercitationem esse excepturi numquam recusandae ipsum? </p>
                    <button className="btn btn-outline bottom-0 border-b-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;
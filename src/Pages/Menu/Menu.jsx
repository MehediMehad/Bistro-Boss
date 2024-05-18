import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../.././assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    // const drinks = menu.filter(item => item.category === 'drinks')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"our menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"pizza" } img={pizzaImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={"dessert"} img={dessertImg} ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title={"salad"} img={saladImg} ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={soup} title={"soup"} img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;
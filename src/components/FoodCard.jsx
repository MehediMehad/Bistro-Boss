

const FoodCard = ({item}) => {
    const { image, name, recipe, price } = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center ">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 bottom-0 border-0 border-b-4 border-orange-400 hover:bg-orange-400">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
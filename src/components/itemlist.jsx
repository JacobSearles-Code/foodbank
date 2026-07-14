import { itemCategories } from "../assets/data/items";

const ItemList = () => {
    return (
        <div className="itemCategories">
            {itemCategories.map((category) => (
                <div className="itemCategory" key={category.title}>
                    <h3>{category.title}</h3>

                    <ul>
                        {category.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
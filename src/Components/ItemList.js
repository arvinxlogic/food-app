import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (!items || items.length === 0) {
    return <p className="p-4 text-gray-500">No items available</p>;
  }

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="py-4 flex justify-between items-center"
        >
          <div className="flex-1 pr-4">
            <h3 className="font-medium">{item.card.info.name}</h3>
            <p className="text-sm text-gray-600">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>
          
          {item.card.info.imageId && (
            <div className="w-24 h-24 relative">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-full object-cover rounded-lg"
                alt={item.card.info.name}
              />
              <button
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-2 py-1 text-xs rounded shadow border border-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
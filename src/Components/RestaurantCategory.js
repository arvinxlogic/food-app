import ItemList from './ItemList';

const RestaurantCategory = ({ data, isExpanded, onToggle }) => {
  if (!data) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="font-bold">
          {data.title} ({data.itemCards?.length || 0})
        </h3>
        <span>{isExpanded ? '🔼' : '🔽'}</span>
      </div>
      {isExpanded && (
        <div className="bg-white p-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
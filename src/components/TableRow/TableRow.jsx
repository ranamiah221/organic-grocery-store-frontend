import { MdDelete } from "react-icons/md";
const TableRow = ({ cart, handleDeleteCart }) => {
  const { _id, product_name, product_image, price, category } = cart;
  
  return (
    <tr>
      <td>{product_name}</td>
      <td>
        <img className="w-20 h-10 rounded-xl" src={product_image} alt="" />
      </td>
      <td>{category}</td>
      <td>${price}</td>
      <td>
        <button onClick={() => handleDeleteCart(_id)}>
          <MdDelete className="text-4xl "></MdDelete>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

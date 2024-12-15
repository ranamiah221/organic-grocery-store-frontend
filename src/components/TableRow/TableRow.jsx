const TableRow = ({ cart }) => {
    console.log(cart)
    const{product_name,product_image,  price, category }=cart;
  return (
    <tr>
      <td>
        {product_name}
      </td>
      <td>
        <img className="w-20 h-10 rounded-xl" src={product_image} alt="" />
      </td>
      <td>
       {category}
      </td>
      <td>{price}</td>
      <td>
        
      </td>
    </tr>
  );
};

export default TableRow;

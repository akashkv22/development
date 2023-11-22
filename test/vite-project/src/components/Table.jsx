import "./Table.css";
function Table() {
  return (
    <>
      <div className="table-div">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th style={{
                borderRadius : "15px 0 0 15px"                
              }}>SL.No</th>
              <th style={{width :"17%"}}>Product Name</th>
              <th style={{width :"18%"}}>Category</th>
              <th style={{width :"10%"}}>OEM</th>
              <th style={{width :"12%"}}>Inventory Non-inventory</th>
              <th style={{width :"13%"}}>Opening Date</th>
              <th style={{width :"13%"}}>Exp. Date by Air/Sea/Road </th>
              <th style={{
                borderRadius : "0px 15px 15px 0px",
                width:"13%"
              }}>Status</th>
            </tr>
            
          </thead>
          <tbody className="tbody">
            <tr className="red-color">
              <td style={{
                color:"black",
                fontWeight:"600"

              }}>1</td>
              <td>PFG6-Table</td>
              <td>Furniture </td>
              <td>Franke</td>
              <td>Non-inventory</td>
              <td>01-05-2023</td>
              <td>20-04-2023</td>
              <td>Ordered</td>
            </tr>

            <tr className="yellow-color">
              <td style={{
                color:"black",
                fontWeight:"600"
              }}>2</td>
              <td>PFG690-chair</td>
              <td>Furniture</td>
              <td>Franke</td>
              <td>Non-inventory</td>
              <td>01-05-2023</td>
              <td>02-05-2023</td>
              <td>Ordered</td>
            </tr>

            <tr className="green-color">
              <td style={{
                color:"black",
                fontWeight:"600"
              }}>3</td>
              <td>PFG690-computer</td>
              <td>Technology equipment</td>
              <td>Franke</td>
              <td>Non-inventory</td>
              <td>02-05-2023</td>
              <td>04-07-2023</td>
              <td>Processing</td>
            </tr>

            <tr className="red-color">
              <td style={{
                color:"black",
                fontWeight:"600"
                
              }}>4</td>
              <td>PFG690-fried chicken</td>
              <td>Food</td>
              <td>Make</td>
              <td>Inventory</td>
              <td>01-05-2023</td>
              <td>20-04-2023</td>
              <td>Out for delivery</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

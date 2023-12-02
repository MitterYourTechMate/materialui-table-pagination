import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import TablePagination from '@mui/material/TablePagination';

function App() {


  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 70 },
    { id: 6, lastName: 'Melisandre', firstName: "ross", age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Tony', firstName: 'Stark', age: 60 },
    { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: 70 },
    { id: 16, lastName: 'Melisandre', firstName: "ross", age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 20, lastName: 'Tony', firstName: 'Stark', age: 60 },
  ];

  const [data, setData] = useState(rows)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    // setPage(0);
  };

  useEffect(() => {

    let data_rev = rows.slice(page* rowsPerPage, page * rowsPerPage + rowsPerPage)
    // rows.slice(0,5)
    // rows.slice ( 5, 10)
    setData(data_rev)
    // alert(`${rowsPerPage} ${page}`)

  

  }, [page, rowsPerPage])

  return (
    <>
    <div className="App" style={{marginTop:"5%"}}>
      {data.map(item => {
        return (
          <div style={{display:"grid", gridTemplateColumns:"20% 30% 30% 20%", borderStyle:"solid"}}>
            <div>{item.id}</div>
            <div>{item.firstName}</div>
            <div>{item.lastName}</div>
            <div>{item.age}</div>
          </div>
        )
      })}
    </div>
    <TablePagination
    component="div"
    count={20}
    page={page}
    onPageChange={handleChangePage}
    rowsPerPage={rowsPerPage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    rowsPerPageOptions={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
  />
  </>
  );
}

export default App;

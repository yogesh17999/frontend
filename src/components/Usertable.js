import React from 'react';
import { useHistory } from 'react-router-dom'; 
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import apiService from '../services/ApiService';

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 150 },
  { id: 'actions', label: 'Actions', minWidth: 100, align: 'center' }, // New column for actions
];

function Usertable({ userList }) {
    const history = useHistory();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditClick = async (userId) => {
    // Implement edit functionality here, e.g., open edit modal or navigate to edit page
    console.log(`Edit user with ID: ${userId}`);

    try {
        // Fetch user details based on userId using getUserById method
        const userToUpdate = await apiService.getUserById(userId);
        
        // Example: Open edit form/modal with the fetched user details
        console.log('User details:', userToUpdate);
        if(userToUpdate){
            const navigateToEditUser = () => {
                // Navigate to CreateUserComponent with user data and edit mode
                history.push({
                  pathname: '/createuser',
                  state: { user: userToUpdate, mode: 'edit' },
                });
              };

              navigateToEditUser()
        }
        // Implement edit form/modal opening and pre-filling with userToUpdate data
      } catch (error) {
        console.error('Error fetching user details:', error.message);
        // Handle error gracefully (e.g., display error message to user)
      }
  };

  const handleDeleteClick = async (userId) => {
    // Implement delete functionality here, e.g., show confirmation dialog and delete user
    console.log(`Delete user with ID: ${userId}`);
    try {
        // Call the deleteUser method from apiService to delete the user
        await apiService.deleteUser(userId);
        // Optionally, refresh the user list or update state after successful deletion
        console.log(`User with ID ${userId} deleted successfully`);
      } catch (error) {
        console.error('Error deleting user:', error.message);
        // Handle error gracefully (e.g., display error message to user)
      }
  };

  return (
    <Paper style={{ paddingBottom: '2%' }} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440, overflow: 'auto' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {userList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'}>
                      {column.id !== 'actions' ? (
                        row[column.id]
                      ) : (
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <IconButton
                            aria-label="edit"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label="delete"
                            onClick={() => handleDeleteClick(row.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={userList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default Usertable;

import React, { useMemo, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../../store/user/actions';
import { USER_DETAIL_PATH } from '../../router/paths';
import FilterTable from '../../components/FilterTable'
import styled from 'styled-components';


type UserType = {
  id: string;
  firstName: string;
  lastName: string
	email: string;
	wallets: [];
}

const Container = styled.div`
    width: 80%;
    max-width: 1100px;
`;

const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.user);
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = users.filter((user: UserType) => user.firstName && user.firstName.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterTable onFilter={(e: any) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} filterBy="Filter By Name"/>;
  }, [filterText, resetPaginationToggle]);

  const onRowClicked = (row: UserType) => {
    history.push(USER_DETAIL_PATH.replace(':detailId', row.id));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = useMemo(() => [
    {
      name: 'User ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'First Name',
      selector: 'firstName',
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: 'lastName',
      sortable: true,
      right: true,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    }], []);


  return (
    <Container>
      <DataTable
        title="Registered Users"
        columns={columns}
        data={filteredItems}
        onRowClicked={onRowClicked}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        subHeaderWrap={false}
        persistTableHead
        pointerOnHover
        highlightOnHover	
      />
    </Container>
  
  );
}


export default User;

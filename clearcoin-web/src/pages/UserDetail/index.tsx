import React, {useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getUser, transfer, resetErrorMsg } from '../../store/user/actions';
import DataTable from 'react-data-table-component';
import Modal from '../../components/Modal';
import Card from '../../components/Card';
import { Transfer, Wallet } from '../../types/types';
import FilterTable from '../../components/FilterTable'

const Container = styled.div`
    width: 80%;
    max-width: 1100px;
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

`;

const BalanceWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;
const Balance = styled.h2`
    text-align: center;
    border-radius: .75rem;
    padding: 1rem;
    background-color: rgba(0,0,0,0.2);
`;

const getBalance = (wallets: any) => {
    return wallets.reduce((acc: number, item: any) => {return acc + item.amount}, 0);
}

const UserDetail = () => {
    const dispatch = useDispatch();
    const params: any = useParams();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<Wallet>({} as Wallet);
    const detailId = params.detailId ? parseInt(params.detailId, 10) : 0;
    const { userDetail, hasDataChanged, errorMsg } = useSelector((state: any) => state.user);

    const onSubmitForm = (values: Transfer) => {
        dispatch(transfer(values));
    };

    const columns = useMemo(() => [
    {
        name: 'Wallet ID',
        selector: 'id',
        sortable: true,
        ignoreRowClick: true
    },
    {
        name: 'Amount',
        selector: 'amount',
        sortable: true,
        
    }], []);

    useEffect(() => {
        setIsModalVisible(false);
        dispatch(getUser(detailId));
    }, [dispatch, detailId, hasDataChanged]);
    

    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = userDetail.wallets.filter((wallets: Wallet) => wallets.id && wallets.id.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
        if (filterText) {
            setResetPaginationToggle(!resetPaginationToggle);
            setFilterText('');
        }
    };

    return <FilterTable onFilter={(e: any) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} filterBy="Filter By Wallet ID" />;
    }, [filterText, resetPaginationToggle]);

    const onRowClicked = (row: any) => {
        setSelectedWallet(row);
        setIsModalVisible(true);
    }

    const onModalClose = () => {
        setIsModalVisible(false);
        dispatch(resetErrorMsg());
    }

    useEffect(() => {
        setIsModalVisible(false);
        dispatch(getUser(detailId));
    }, [dispatch, detailId, hasDataChanged]);

    return (
        <Container>
            <Modal visible={isModalVisible} onClose={onModalClose}>
                <Card wallet={selectedWallet} onSubmit={onSubmitForm} errorMsg={errorMsg}/>
            </Modal>
            <UserInfo>
                <div>
                    <h3>First name</h3>
                    <span>{userDetail.firstName}</span>
                </div>

                <div>
                    <h3>Last name</h3>
                    <span>{userDetail.lastName}</span>
                </div>
            
                <div>
                    <h3>Email</h3>
                    <span>{userDetail.email}</span>
                </div>
            </UserInfo>

            <BalanceWrapper>
                <Balance>Balance {`${getBalance(userDetail.wallets)}€`}</Balance>
            </BalanceWrapper>
            
            <DataTable
                columns={columns}
                data={filteredItems}
                onRowClicked={onRowClicked}
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

export default UserDetail;

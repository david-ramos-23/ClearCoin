
import React from 'react';
import styled from 'styled-components';

type FilterType = {
  filterText: string;
  filterBy: string;
  onFilter: (e: any) => void;
  onClear: () => void;
}

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    border: 1px solid #b2fce4;
    cursor: pointer;
  }
  &:focus {
    border: 1px solid #b2fce4;
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: black;
  padding: 8px 32px;
  text-decoration: none;
  font-size: 16px;
  background-color: #b2fce4;
  transition: all .2s ease-in;

  &:hover {
    background-color: #828282;
    color: #fff;
    cursor: pointer;
  }
`;


const FilterTable = ({ filterText, onFilter, onClear, filterBy}: FilterType) => (
  <>
    <TextField id="search" type="text" placeholder={filterBy} aria-label="Search Input" value={filterText} onChange={onFilter} />
    <ClearButton type="button" onClick={onClear}>X</ClearButton>
  </>
);

export default FilterTable
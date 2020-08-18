import styled from 'styled-components';

const Table = styled.table.attrs(
  props => props.type === 'striped' && { className: 'row-striped' }
)`
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }

  th {
    vertical-align: bottom;
    background-color: #e9ecef;
    border-bottom: 2px solid #dee2e6;
  }

  td {
    text-align: center;
  }

  &.row-striped {
    tbody {
      tr {
        &:nth-of-type(even) {
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
`;

export default Table;

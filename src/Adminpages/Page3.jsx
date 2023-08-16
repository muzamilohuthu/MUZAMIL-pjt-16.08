import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../Admin_components/Navbar';
import Pagination from 'react-bootstrap/Pagination';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import jsonexport from 'jsonexport/dist';

import Dropdown from 'react-bootstrap/Dropdown';
import { BsFiletypeCsv } from "react-icons/bs";

const usersPerPage = 10;

function Page3() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);

  // for excel 
  const tableRef = useRef(null); // Define tableRef using useRef

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/contact');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Handle error state here
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const [, setSelectAllChecked] = useState(false);

  const handleCheckboxChange = (userId) => {
    const updatedSelectedUsers = [...selectedUsers];

    if (updatedSelectedUsers.includes(userId)) {
      const index = updatedSelectedUsers.indexOf(userId);
      updatedSelectedUsers.splice(index, 1);
    } else {
      updatedSelectedUsers.push(userId);
    }

    setSelectedUsers(updatedSelectedUsers);
  };

  const handleHeaderCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSelectAllChecked(checked);

    if (checked) {
      const currentPageEmails = currentUsers.map((user) => user.email);
      setSelectedUsers(currentPageEmails);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleDeleteSelected = () => {
    const confirmed = window.confirm('Are you sure you want to delete the selected users?');

    if (confirmed) {
      axios
        .delete('http://localhost:8000/Deletecontact', {
          data: { selectedUsers },
        })
        .then((response) => {
          const updatedUsers = users.filter((user) => !selectedUsers.includes(user.email));
          setUsers(updatedUsers);
          setSelectedUsers([]);
        })
        .catch((error) => {
          console.error('Error deleting users:', error);
        });
    }
  };

  const handleExcelExport = () => {
    if (tableRef.current) {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.table_to_sheet(tableRef.current);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
      XLSX.writeFile(workbook, 'users_table.xlsx');
    } else {
      console.error('Table reference is null or undefined.');
    }
  };

  const handlePdfExport = () => {
    const doc = new jsPDF();

    const tableData = currentUsers.map((user, index) => [
      index + 1,
      user.name,
      user.email,
      user.message,
    ]);

    doc.autoTable({
      head: [['S.No', 'Name', 'Email', 'Message']],
      body: tableData,
      startY: 20,
    });

    doc.save('users_table.pdf');
  };

  const handleCsvExport = () => {
    jsonexport(users, (err, csv) => {
      if (err) {
        console.error('Error exporting CSV:', err);
        return;
      }
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'users_table.csv');
      link.click();
    });
  };

  return (
    <div>
      <Navbar />
      <div className="leftmarginpage">
        <Container>
          <Row>
            <Col>
              <h1>Contact Us User Data</h1>
            </Col>
            <Col>
            <Dropdown className='adminpage2droupdowndiv'>
      <Dropdown.Toggle  id="dropdown-basic" className='adminpage2droupdown' >
        Export
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><Button className="exportexcelbtn" variant='light' onClick={handleExcelExport}>
                <FaFileExcel /> Excel
              </Button></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Button className="exportexcelbtn"  variant='light' onClick={handlePdfExport}>
                <FaFilePdf /> PDF
              </Button></Dropdown.Item>
        <Dropdown.Item href="#/action-3"> <Button className="exportexcelbtn" variant='light' onClick={handleCsvExport}>
               <BsFiletypeCsv /> CSV
              </Button></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Col>
          </Row>
        </Container>

        <Button
          variant="danger"
          className="DeletebtnSignupadmin"
          onClick={handleDeleteSelected}
          disabled={selectedUsers.length === 0}
        >
          Delete Selected
        </Button>

        <table className="table table-bordered mt-4 page2tablestyle" id="table" ref={tableRef}>
          {/* Table Header */}
          <thead>
            <tr>
              <th style={{ width: '50px' }}>
                <input
                  type="checkbox"
                  className="selectAll"
                  value=""
                  id="selectAllCheckbox"
                  checked={selectedUsers.length === currentUsers.length}
                  onChange={handleHeaderCheckboxChange}
                />
              </th>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody id="tableBody">
            {currentUsers.map((user, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    value=""
                    id="checkbox"
                    checked={selectedUsers.includes(user.email)}
                    onChange={() => handleCheckboxChange(user.email)}
                  />
                </td>
                <td>{indexOfFirstUser + index + 1}</td>
                <td style={{ wordWrap: 'break-word',  maxWidth: '150px' }}>
                  {user.name}
                </td>
                <td style={{ wordWrap: 'break-word',  maxWidth: '200px' }}>
                  {user.email}
                </td>
                <td style={{ wordWrap: 'break-word', maxWidth: '200px' }}>
                  {user.message}
                </td>
                {/* <td> </td> */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination className="pagination pagination-md">
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => {
            const pageNumber = Math.ceil(users.length / usersPerPage) - i;

            return (
              <Pagination.Item
                key={pageNumber}
                active={pageNumber === currentPage}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
    </div>
  );
}

export default Page3;


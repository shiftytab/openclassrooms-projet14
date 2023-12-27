import { RootState } from '@/store/index';
import { useSelector } from 'react-redux';
import Navbar from '@/components/Navbar';
import { EmployeePropsType } from '@/types/EmployeeType';
import Table from '@/components/Table';
import dayjs from 'dayjs';
import styled from 'styled-components';

const List = () => {

  // Get the employees from the store
  const employees = useSelector((state: RootState) => state.employee);
  
  // Table columns
  const TableColumns = [
    {
      id: "firstName",
      label: "First Name"
    },
    {
      id: "lastName",
      label: "Last Name"
    },
    {
      id: "dateOfBirth",
      label: "Date of Birth"
    },
    {
      id: "startDate",
      label: "Start Date"
    },
    {
      id: "department",
      label: "Department"
    },
    {
      id: "street",
      label: "Street"
    },
    {
      id: "city",
      label: "City"
    },
    {
      id: "employeeState",
      label: "State"
    },
    {
      id: "zipCode",
      label: "Zip Code"
    }
  ]

  // Format the date to be more readable
  const TableData = employees.map((employee: EmployeePropsType) => {
    return {
      ...employee,
      dateOfBirth: dayjs(employee.dateOfBirth).format('MM/DD/YYYY'),
      startDate: dayjs(employee.startDate).format('MM/DD/YYYY'),
    }
  });

  // Update the document title using the browser API 
  document.title = "HRNet - Employee List";

  return (
    <>
      <Navbar />
      <Container>
        <Title>Employees</Title>
        <Table 
          data={TableData} 
          columns={TableColumns} 
        />
      </Container>
    </>
  );
};

export default List;

const Container = styled.div`
  direction: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

const Title = styled.h2`
  margin-bottom: 15px;
  padding: 0;

`
import { addEmployee } from '@/store/features/employeeSlice';
import { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';

import DepartementData from '@/schema/departement_schema.json';
import StateListData from '@/schema/state_list_schema.json';
import { EmployeePropsType } from '@/types/EmployeeType';
import Navbar from '@/components/Navbar';
import styled from 'styled-components';
import SelectList from '@shiftytab/reactselectlist';
import toast from 'react-hot-toast';
import Modal from '@/components/Modal';

export default function index() : JSX.Element {
  
  const initialData : EmployeePropsType = {
    firstName: '',
    lastName: '',
    dateOfBirth: new Date().toString(),
    startDate: new Date().toString(),
    department: '',
    street: '',
    city: '',
    employeeState: '',
    zipCode: ''
  }
  const [form, setForm] = useState({...initialData});
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  /**
   * Handle save employee
   */
  const handleSaveEmployee = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addEmployee(form));
    setForm({...initialData});
    setShowModal(true);
  };

  /**
   * On user update field
   */
  const handleUpdateField = (field : keyof EmployeePropsType, value : string|number|Date) : void => {
    setForm({
      ...form,
      [field]: value
    });
  }

  return (
    <Fragment>
      <Navbar />
      <Container>
        <h2>Create Employee</h2>
        <form action="#" onSubmit={handleSaveEmployee}>
          <FormRow>
            <FormLeft>
              <FormGroup>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <input type="text" id="first-name" value={form.firstName} onChange={(e) => handleUpdateField('firstName', e.currentTarget.value)} />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <input type="text" id="last-name" value={form.lastName} onChange={(e) => handleUpdateField('lastName', e.currentTarget.value)} />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="date-of-birth">Date of Birth</FormLabel>
                <DatePicker
                  selected={new Date(form.dateOfBirth)}
                  id="date-of-birth"
                  
                  onChange={(date : Date) => handleUpdateField("dateOfBirth", new Date(date as Date).toString() )}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="start-date" >
                  Start Date
                </label>
                <DatePicker
                  selected={new Date(form.startDate)}
                  id="start-date"
                  
                  onChange={(date : Date) => handleUpdateField("startDate", new Date(date as Date).toString())}
                />
              </FormGroup>
              <FormGroup>
                <SelectList 
                  options={DepartementData}
                  onChange={(e : {[key: string] : string}) => handleUpdateField('department', e.value)}
                  label="Department"
                  placeholder='Select a department'
                />
              </FormGroup>
            </FormLeft>
            <FormRight>
              <Fieldset>
                <legend>Address</legend>
                <FormGroup className="nomargin">
                  <label htmlFor="street" >
                    Street
                  </label>
                  <input id="street" type="text"  value={form.street} onChange={(e) => handleUpdateField('street', e.currentTarget.value)} />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="city" >
                    City
                  </label>
                  <input id="city" type="text"  value={form.city} onChange={(e) => handleUpdateField('city', e.currentTarget.value)} />
                </FormGroup>

                <FormGroup>
                  <SelectList 
                    options={StateListData}
                    onChange={(e : {[key: string] : string}) => handleUpdateField('employeeState', e.value)}
                    label="State"
                    placeholder='Select a state'
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="zip-code" >
                    Zip Code
                  </label>
                  <input id="zip-code" type="number"  value={form.zipCode} onChange={(e) => handleUpdateField('zipCode', e.currentTarget.value)}/>
                </FormGroup>
              </Fieldset>
            </FormRight>
          </FormRow>
          <FormGroup>
            <SaveButton type="submit">
              Save
            </SaveButton>
          </FormGroup>
        </form>

      </Container>
      <Modal title="Employee created !" show={showModal} handleClose={() => setShowModal(state => !state)}>
        <p>the employee has been created</p>
      </Modal>
    </Fragment>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 1100px;

  input {
    padding: 10px;
    border: 1px solid #ececec;
    border-radius: 5px;
    outline:none;
  }

  form {
    width: 100%;
    margin: 0 auto;
  }
`

const Fieldset = styled.fieldset`
  padding: 20px;
`

const FormGroup = styled.div`
  margin-top: 20px;
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1em;
  }
  input {
    width: 100%;
  }

  &&:first-child {
    margin-top: 0;
  }
  
  &.nomargin {
    margin: 0;
  }
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`

const FormRow = styled.div`
  display: flex;
  flex-direction:row;
  align-items:flex-start;
  width: 100%;
`
const FormLeft = styled.div`
  padding: 15px;
  flex: 1;
`;
const FormRight = styled.div`
  padding: 15px;
  flex: 1;
`;

const SaveButton = styled.button`
  padding: 15px;
  background-color: dodgerblue;
  border: 3px solid rgba(0,0,0,.1);
  border-radius: 100px;
  text-align: center;
  width: 100%;
  color: #fff;
  font-weight: bold;
  &:hover {
    background-color: #0d6efd;
  }
`
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="title">
        <h1 className="title">HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list" className="small-button">
          View Current Employees
        </Link>
        <h2 className="subtitle">Create Employee</h2>
      </div>
    </>
  );
};

export default Home;

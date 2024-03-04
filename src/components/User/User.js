import React, { useState } from 'react'
import HeaderUi from '../common/HeaderUi/HeaderUi'
import Search from '../common/Search/Search'
import Footer from '../Footer/Footer'
import '../User/User.css'
import Card from '../common/Card/Card'
const employees = [
  {
    EmpId: '1',
    EmpName: 'Arjun',
    Dob: '10-05-2015',
    role: 'Software Engineer'
  },
  {
    EmpId: '2',
    EmpName: 'Sara',
    Dob: '15-09-1990',
    role: 'Data Analyst'
  },
  {
    EmpId: '3',
    EmpName: 'Rahul',
    Dob: '25-03-1985',
    role: 'Project Manager'
  },
  {
    EmpId: '4',
    EmpName: 'Priya',
    Dob: '02-11-1992',
    role: 'UX Designer'
  },
  {
    EmpId: '5',
    EmpName: 'Vijay',
    Dob: '18-07-1988',
    role: 'Software Developer'
  },
  {
    EmpId: '6',
    EmpName: 'Anjali',
    Dob: '07-12-1995',
    role: 'Business Analyst'
  },
  {
    EmpId: '7',
    EmpName: 'Amit',
    Dob: '14-06-1980',
    role: 'System Administrator'
  },
  {
    EmpId: '8',
    EmpName: 'Neha',
    Dob: '21-04-1983',
    role: 'Quality Assurance Engineer'
  },
  {
    EmpId: '9',
    EmpName: 'Kumar',
    Dob: '30-10-1976',
    role: 'Network Engineer'
  },
  {
    EmpId: '10',
    EmpName: 'Raj',
    Dob: '05-08-1998',
    role: 'Technical Support Specialist'
  },
  {
    EmpId: '11',
    EmpName: 'Meera',
    Dob: '12-01-1982',
    role: 'DevOps Engineer'
  },
  {
    EmpId: '12',
    EmpName: 'Deepak',
    Dob: '09-09-1993',
    role: 'Database Administrator'
  },
  {
    EmpId: '13',
    EmpName: 'Ananya',
    Dob: '23-06-1979',
    role: 'UI Designer'
  },
  {
    EmpId: '14',
    EmpName: 'Sanjay',
    Dob: '03-04-1991',
    role: 'Product Manager'
  },
  {
    EmpId: '15',
    EmpName: 'Shreya',
    Dob: '17-02-1987',
    role: 'Software Tester'
  },
  {
    EmpId: '16',
    EmpName: 'Aakash',
    Dob: '29-08-1984',
    role: 'Full Stack Developer'
  },
  {
    EmpId: '17',
    EmpName: 'Mira',
    Dob: '20-11-1994',
    role: 'Cybersecurity Analyst'
  },
  {
    EmpId: '18',
    EmpName: 'Gaurav',
    Dob: '08-07-1981',
    role: 'Scrum Master'
  },
  {
    EmpId: '19',
    EmpName: 'Pooja',
    Dob: '11-03-1997',
    role: 'Technical Writer'
  },
  {
    EmpId: '20',
    EmpName: 'Rohit',
    Dob: '26-05-1986',
    role: 'IT Consultant'
  }
];
function User() {
  const [filteredData,setfilteredData] = useState(employees)
  function handleSearch(e){
    setfilteredData(employees.filter((emp)=>emp.EmpName.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <div className='userContainer'>
      <HeaderUi />
      <div className="searchBar">
        <Search handleSearch={handleSearch}/>
      </div>
      <div className='cards'>
        {
          filteredData.map((emp)=>(
            <Card EMPId={emp.EmpId} EmpName={emp.EmpName} Dob={emp.Dob} role={emp.role} key={emp.EmpId}/>
          ))
        }
       
      
      </div>
      <Footer />
    </div>
  )
}

export default User




import React ,{useState} from 'react';
import Swal from 'sweetalert2'

const Add=({employees,SelectedEmployees,setEmployees,setIsEdditing}) =>{
    const id=SelectedEmployees.id;
    const [firstName,setFistName]=useState('');
    const  [lastName,setLastName]=useState('');

    const [email,setEmail]=useState('');
    const [salary,setSalary]=useState('');

    const [date,setDate]=useState('');


    const handleAdd=e=>{
        e.preventDefault();

        if(!firstName || !lastName || !email || !salary || !date){
            return Swal.fire({
                icon: 'error',
                title:' Error!',
                text:'All fields are required',
                showConfirmButton:'true'
                
            });
        }

        const employee={
            
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for(let i=0;i<employees.length;i++){
            if(employees[i].id===id){
                employees.slice(i,1,employee );
                break;
            }
        }

        localStorage.setItem('employees_data',JSON.stringify(employees))
    }
}
//App.js
import React from "react";
import Treatments from "./MedicalTreatmentList";

export default function App() {

//traetments data are enetered here

  const jsonRecords =[
    {treatId:'a16666', treatCourseId:'abc', type:'Curative ', category: 'Antibiotics',  name:'amoxicillin ', startDate: ' 12-May-20'},
    {treatId:' b16667 ', treatCourseId:' def ', type:'Palliative ', category:'Nutritional changes', name:'low sugar diet', startDate: '12-Jul-21' },
    {treatId:'a36664', treatCourseId:'ghi', type:'Curative', category:'Antibiotics', name:' amoxicillin', startDate: '14-May-20' },
    {treatId:'g54445', treatCourseId:'jkl', type:'Palliative ', category:'Medication', name:'Steroids', startDate: '22-May-20' },
    {treatId:'e12222', treatCourseId:'mno', type:'Palliative ', category:'Medication', name:'Codeine', startDate: '03-Sep-20' },
  ]

  //JSON.stringify() method converts a JavaScript object or value to a JSON string

  const recordsText = JSON.stringify (jsonRecords);


 // filtering records to display tratid and name entires for 'antibiotics' category
 
  return (
    <div>
      <Treatments treatmentsJson = {recordsText} />
      <ul> Filtered records:
     { 
      jsonRecords
      .filter(jsonRecord => jsonRecord.category === 'Antibiotics')
      .map(filteredJsonRecord => (
       <tr> 
         <td>{filteredJsonRecord.treatId}</td>,
         <td>{filteredJsonRecord.name}</td>
         </tr>
       ))
     }
   </ul>
    </div>
    
  );

  


    }



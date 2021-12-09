//MedicalTreatmentList.js

import React from 'react';

function Treatments (props) {
  const treatmentRecords = props.treatmentsJson;

// JSON.parse() coverts string to JAvaScript object
  const items = JSON.parse(treatmentRecords);

// map funtion to create array in the array
  const listTreatments = items.map((item)=> (
    <li>
      key={item.treatId}, {item.treatCourseId}, {item.type}, {item.category},
      {item.name}, {item.startDate}
    </li>
  ));
  
// to display tratment records and listed treatment records in App.js
  return (
    <div>
      Treatment records are: {treatmentRecords}
      <br/> <br/>
      {listTreatments}
      <br />
    </div>
  );
}
export default Treatments;

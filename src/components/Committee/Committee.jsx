import React from 'react';
import './Committee.css';

const committees = [
  {
    title: "Cultural and Co-Curricular Committee",
    members: [
      ["Prof. Phapale Nikhil Shivnath", "President"],
      ["Prof. Dipali Sureshrao Dube", "Vice President"],
      ["Sanskruti Sunil Devkar (BCS SY)", "Member"],
      ["Purva Sudhir Pophale (BCS SY)", "Member"],
      ["Poonam Raju Raut (BCS SY)", "Member"],
    ],
  },
  {
    title: "Academic Committee",
    members: [
      ["Prof. Dipali Sureshrao Dube", "President"],
      ["Prof. Phapale Nikhil Shivnath", "Vice President"],
      ["Janhavi Sachin Deshmukh (BCS FY)", "Member"],
      ["Maherukh Siraj Chaus (BCS FY)", "Member"],
      ["Shraddha Arun Sonune (BCS FY)", "Member"],
    ],
  },
  {
    title: "Anti-Ragging Committee",
    members: [
      ["Prof. Ms Suvarna Sandip Ghuge", "President"],
      ["Prof. Dattarao Dhondipa Lokhande", "Vice President"],
      ["Kiran Ashok Chavan (BCA TY)", "Member"],
      ["Shital Vitthal Ghuge (BCA TY)", "Member"],
      ["Pandurang Ambadas Adhe (BCA TY)", "Member"],
    ],
  },
  {
    title: "Student Support Committee",
    members: [
      ["Prof. Dipali Sureshrao Dube", "President"],
      ["Prof. Dattarao Dhondipa Lokhande", "Vice President"],
      ["Shrawan Sudam Adhe (BCS SY)", "Member"],
      ["Ejas Mujir Shaikh (BCA TY)", "Member"],
      ["Vedant Vaijanath Benure (BCS TY)", "Member"],
    ],
  },
  {
    title: "Administrative Committee",
    members: [
      ["Prof. Dattarao Dhondipa Lokhande", "President"],
      ["Prof. Phapale Nikhil Shivnath", "Vice President"],
      ["Mujahid Mabud Sayyad (BCA SY)", "Member"],
      ["Nandkishor Dnyaneshwar Dhangar (BCA SY)", "Member"],
      ["Zaheer Chand Shaikh (BCA TY)", "Member"],
    ],
  },
  {
    title: "Technical Committee",
    members: [
      ["Prof. Dattarao Dhondipa Lokhande", "President"],
      ["Prof. Phapale Nikhil Shivnath", "Vice President"],
      ["Ritesh Chatrabhuj Sase (BCA SY)", "Member"],
      ["Pankaj Rajebhau Sonwane (BCA SY)", "Member"],
      ["Somnath Dasharath Budhvant (BCS SY)", "Member"],
    ],
  },
  {
    title: "Internal Committee (IC)",
    members: [
      ["Prof. Ms Suvarna Sandip Ghuge", "President"],
      ["Prof. Phapale Nikhil Shivnath", "Vice President"],
      ["Shruti Raju Parse (BCA SY)", "Member"],
      ["Ankita Anandrao Maske (BCS TY)", "Member"],
      ["Durga Dagadoba Raut (BCA TY)", "Member"],
    ],
  },
  {
    title: "SC/ST Committee",
    note:
      'As per Office Order WH/2016/01 dated 10th June, 2016, the Committee for SC/ST has been established under the provisions of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 (No. 33 of 1989) dated 11.09.1989.',
    members: [
      ["Prof. Ms Suvarna Sandip Ghuge", "President"],
      ["Prof. Dipali Sureshrao Dube", "Vice President"],
      ["Bharatee Prasad Ganesh (BCA SY)", "Member"],
      ["Rathod Umesh Bhaushaheb (BCS TY)", "Member"],
      ["Maske Rutuja Vitthal (BCA TY)", "Member"],
    ],
  },
];

const Committees = () => {
  return (
    <div className="committees-page">
      <div className="committees-container">
        <h1>College Committees</h1>
        {committees.map((committee, idx) => (
          <div key={idx} className="committee-card">
            <h2>{committee.title}</h2>
            {committee.note && <p className="note">{committee.note}</p>}
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {committee.members.map(([name, designation], i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{name}</td>
                    <td>{designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;

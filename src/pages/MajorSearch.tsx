import logo from "../assets/MolloyLogo.png";
import React, { useState, useEffect } from "react";
import courseData from '../courses.json';
import majorRequirementsData from '../req-courses.json';


export default function MajorSearch() {
  
  return (
    <div className="major-search">
      <img src={logo} alt="Molloy Logo" />
      <h1>Molloy Advising</h1>
    </div>
  );
}


export function MajorButton() {
  const [selectedMajor, setSelectedMajor] = useState("Computer Science");
  const [offeredCourses, setOfferedCourses] = useState(null);
  const [data, setRequirementData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("req-courses.json");
      const newData = await response.json();
      setRequirementData(newData);

    };
    fetchData();

    const fetchCourses = async () => {
      const response = await fetch("courses.json");
      const newCourses = await response.json();
      setOfferedCourses(newCourses);
    }
    fetchCourses();
  }, []);

  console.log("Keys", data);

  return (
    <>
      <label>
        Select a Major:
        <select
          value={selectedMajor}
          onChange={(e) => setSelectedMajor(e.target.value)}
        >
          {data && Object.keys(data["req-courses"]).map((key) => (
            <option key={key} value={key}>{key}</option>))}

        </select>
      </label>
      <hr />
      <p>Your major: {selectedMajor}</p>
      <p>Required courses: {<div>{data && offeredCourses && majorRequirementCourses(offeredCourses, data, selectedMajor)?.map(item => <tr> {item.course_code}, {item.name}, {item.schedule}, {item.faculty}, {item.credits} </tr>)}</div>}</p>
    </>
  );
}


export function CourseData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("courses.json");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  if (data) {
    //return <div>{data?.courses.map(item => <tr> {item.major_code}, {item.add}, {item.textbooks}, {item.course_code}, {item.name}, {item.type} </tr>)}</div>;
  } else {
    return null;
  }
}

export function MajorRequirementData() {
  const [data, setRequirementData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("req-courses.json");
      const newData = await response.json();
      setRequirementData(newData);
    };
    fetchData();
  }, []);

  if (data) {
    return <div>{data.requirement}</div>;
  } else {
    return null;
  }
}


function majorRequirementCourses(courseData, majorRequirementsData, majorCode) {
  let requiredCourses = majorRequirementsData['req-courses'][majorCode]

  let offeredCourses = courseData['courses'].filter(course => {
    return requiredCourses.some(requiredCourse => {
      let [courseType, courseNumber] = course.course_code.split(' ')
      let [majorType, majorNumber] = requiredCourse.course_code.split(' ')
      return courseType === majorType && courseNumber === majorNumber
    })
  })

  return offeredCourses;
}





 


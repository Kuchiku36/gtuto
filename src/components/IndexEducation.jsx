import React, { useState } from 'react'
import Eduction from './Eduction';

const InitCourses = [
    { id: 1, title: 'Introduction to JavaScript', instructor: 'John Doe', hours: 10 },
    { id: 2, title: 'Advanced CSS', instructor: 'Jane Smith', hours: 8 },
    { id: 3, title: 'React for Beginners', instructor: 'Emily Johnson', hours: 12 },
  ];
const IndexEducation = () => {
    const [courses, setCourses] = useState(InitCourses)
  return (
    <div>
        IndexEducation
        {courses.map (item=> <Eduction key={item.id} item={item} /> )}
    </div>
  )
}

export default IndexEducation
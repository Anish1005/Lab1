import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseCatalog = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/api/courses').then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h1>Online Course Catalog</h1>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseCatalog;

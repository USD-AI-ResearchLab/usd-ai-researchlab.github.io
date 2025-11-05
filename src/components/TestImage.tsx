import React from 'react';

const TestImage: React.FC = () => {
  return (
    <div className="p-4">
      <h2>Test Image Loading</h2>
      <div className="flex gap-4">
        <div>
          <p>Direct path test:</p>
          <img src="/images/books/book3.png" alt="Test 1" style={{width: '100px', height: '150px', border: '1px solid red'}} />
        </div>
        <div>
          <p>Import test:</p>
          <img src="/images/books/book-crackML.png" alt="Test 2" style={{width: '100px', height: '150px', border: '1px solid blue'}} />
        </div>
        <div>
          <p>Different format test:</p>
          <img src="/images/books/book-covid2.jpg" alt="Test 3" style={{width: '100px', height: '150px', border: '1px solid green'}} />
        </div>
      </div>
    </div>
  );
};

export default TestImage;

import React, { useState, useEffect } from 'react';

import './App.css';

/** Require test cases */
const {
  testLoadCollection,
  testLoadDocument,
  testAddDocument,
  testUpdateDocument,
  testDeleteDocument
} = require('./tests');

function App() {
  const [data, setData] = useState(-1);

  useEffect(() => {
    /** Async function within useEffect to wait for tests to complete */
    async function startTests() {
      /** Array to contain the results from the test cases */
      let tests = new Array();

      tests.push({
        case: 'testLoadCollection:',
        result: await testLoadCollection().then(response => { return response; })
      });

      tests.push({
        case: 'testLoadDocument:',
        result: await testLoadDocument().then(response => { return response; })
      });

      tests.push({
        case: 'testAddDocument:',
        result: await testAddDocument().then(response => { return response; })
      });

      tests.push({
        case: 'testUpdateDocument:',
        result: await testUpdateDocument().then(response => { return response; })
      });

      tests.push({
        case: 'testDeleteDocument:',
        result: await testDeleteDocument().then(response => { return response; })
      });

      /** Counts passed test cases */
      let passed = 0;
      tests.forEach(test => { if (test.result !== false) { passed += 1 } });

      /** Sets the data to be displayed by App.js */
      setData({
        passed: passed,
        failed: tests.length - passed,
        tests: tests
      });
    }
    /** Runs the test cases */
    startTests();
  }, []);

  /** Checks the types returned by the tests to account for objects returned by load functions */
  function getResult(result) {
    if (typeof result === 'object') {
      if (result.title !== '') {
        return `Document with title: ${result.title}`;
      }
      return `Array of length: ${result.length}`;
    }
    return result.toString();
  }

  /** Basic UI to display passed and failed tests along with their results */
  return (
    <div className="app">
      {data === -1 ?
        'Loading'
        :
        <>
          <div className='test-results'>
            <div className='test-result-header'>
              <h2>
                Passed
              </h2>
              <span>
                {data.passed}
              </span>
            </div>
            <div className='test-result-header'>
              <h2>
                Failed
              </h2>
              <span>
                {data.failed}
              </span>
            </div>
          </div>
          <div className='test-cases'>
            {data.tests.map(test => (
              <div className='test-case'>
                {test.case}
                <span className='test-case-result-text'>
                  {getResult(test.result)}
                </span>
              </div>
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default App;

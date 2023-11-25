import React, { useState } from "react";
import Button from "../Components/Button";
const FeeCalculator = () => {
  const [selectedFee, setSelectedFee] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [calculatedFee, setCalculatedFee] = useState(null);

  const feeStructure = {
    "Exam Fee": {
      INDIAN: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 400,
          },
        },
      },
      FOREIGN: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 100,
          },
        },
      },
      NRI: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 600,
          },
        },
      },
      SAARC: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 600,
          },
        },
      },
    },
    "Application Fee": {
      INDIAN: {
        ALL_COURSES: {
          UG: {
            amount: 200,
          },
          "UG-DIPLOMA": {
            amount: 300,
          },
          PG: {
            amount: 500,
          },
        },
      },
      FOREIGN: {
        ALL_COURSES: {
          UG: {
            amount: 400,
          },
          "UG-DIPLOMA": {
            amount: 400,
          },
          PG: {
            amount: 700,
          },
        },
      },
    },
  };

  const handleFeeSelection = (fee) => {
    console.log(fee);
    setSelectedFee(fee);
    setSelectedNationality(null);
    setSelectedCourse(null);
    setCalculatedFee(null);
  };

  const handleNationalitySelection = (nationality) => {
    setSelectedNationality(nationality);
    setSelectedCourse(null);
    setCalculatedFee(null);
  };

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    setCalculatedFee(null);
  };
  const calculateFee = (level) => {
    const fee =
      feeStructure[selectedFee][selectedNationality][selectedCourse][level]
        .amount;
    setCalculatedFee(fee);
  };

  return (
    <div>
      <h2>Select Fee:</h2>
      <div>
        {Object.keys(feeStructure).map((feeType, index) => (
          <Button
            type="primary"
            index={index}
            name={feeType}
            function={() => handleFeeSelection(feeType)}
            className={index > 0 ? "ms-3" : ""}
          />
        ))}
      </div>
      {selectedFee && (
        <div>
          <h2>Select Nationality:</h2>
          <div>
            {Object.keys(feeStructure[selectedFee]).map(
              (nationality, index) => (
                <Button
                  type="primary"
                  index={index}
                  name={nationality}
                  function={() => handleNationalitySelection(nationality)}
                  className={index > 0 ? "ms-3" : ""}
                />
              )
            )}
          </div>
        </div>
      )}
      {selectedNationality && (
        <div>
          <h2>Select Course:</h2>
          <div>
            {Object.keys(feeStructure[selectedFee][selectedNationality]).map(
              (course, index) => {
                if (course === "ALL_COURSES") {
                  const specificCourses = ["Medical", "Dental", "Ayurveda"];
                  return specificCourses.map((data, dataIndex) => (
                    <Button
                      type="primary"
                      index={dataIndex}
                      name={data}
                      function={() => handleCourseSelection(course)}
                      className={dataIndex > 0 ? "ms-3" : ""}
                    />
                  ));
                } else {
                  return (
                    <Button
                      type="primary"
                      index={index}
                      name={course}
                      function={() => handleCourseSelection(course)}
                      className={index > 0 ? "ms-3" : ""}
                    />
                  );
                }
              }
            )}
          </div>
        </div>
      )}
      {selectedCourse && (
        <div>
          <h2>Select Level:</h2>
          <div>
            {Object.keys(
              feeStructure[selectedFee][selectedNationality][selectedCourse]
            ).map((level, index) =>
              level === "ALL_LEVEL" ? (
                ["UG", "PG", "DIPLOMA", "Ph.D"].map((data, dataIndex) => (
                  <Button
                    type="primary"
                    index={dataIndex}
                    name={data}
                    function={() => {
                      calculateFee(level);
                    }}
                    className={dataIndex > 0 ? "ms-3" : ""}
                  />
                ))
              ) : (
                <Button
                  type="primary"
                  index={index}
                  name={level}
                  function={() => {
                    calculateFee(level);
                  }}
                  className={index > 0 ? "ms-3" : ""}
                />
              )
            )}
          </div>
        </div>
      )}
      <h5 className="mt-4">
        {calculatedFee && <p>Fee Amount: {calculatedFee}</p>}
      </h5>
    </div>
  );
};

export default FeeCalculator;

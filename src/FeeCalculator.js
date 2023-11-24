import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const FeeCalculator = () => {
  const [selectedFee, setSelectedFee] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
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
    setSelectedFee(fee);
    setSelectedNationality(null);
    setSelectedCourse(null);
    setSelectedLevel(null);
    setCalculatedFee(null);
  };

  const handleNationalitySelection = (nationality) => {
    setSelectedNationality(nationality);
    setSelectedCourse(null);
    setSelectedLevel(null);
    setCalculatedFee(null);
  };

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
    setSelectedLevel(null);
    setCalculatedFee(null);
  };

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
  };

  const calculateFee = () => {
    if (selectedFee && selectedNationality && selectedCourse && selectedLevel) {
      const fee =
        feeStructure[selectedFee][selectedNationality][selectedCourse][
          selectedLevel
        ].amount;
      console.log(fee);
      setCalculatedFee(fee);
    }
  };

  return (
    <div>
      <h2>Select Fee:</h2>
      <div>
        {Object.keys(feeStructure).map((feeType, index) => (
          <Button
            className={index > 0 ? "ms-3" : ""}
            variant="primary"
            key={index}
            onClick={() => handleFeeSelection(feeType)}
          >
            {feeType}
          </Button>
        ))}
      </div>
      {selectedFee && (
        <div>
          <h2>Select Nationality:</h2>
          <div>
            {Object.keys(feeStructure[selectedFee]).map(
              (nationality, index) => (
                <Button
                  onClick={() => handleNationalitySelection(nationality)}
                  key={index}
                  className={index > 0 ? "ms-3" : ""}
                  variant="primary"
                >
                  {nationality}
                </Button>
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
              (course, index) =>
                course === "ALL_COURSES" ? (
                  <>
                    {" "}
                    <Button
                      key={index}
                      onClick={() => handleCourseSelection(course)}
                    >
                      Medical
                    </Button>{" "}
                    <Button
                      key={index}
                      className="ms-3"
                      onClick={() => handleCourseSelection(course)}
                    >
                      Dental
                    </Button>{" "}
                    <Button
                      key={index}
                      className="ms-3"
                      onClick={() => handleCourseSelection(course)}
                    >
                      yurveda
                    </Button>{" "}
                  </>
                ) : (
                  <Button
                    key={index}
                    className={index > 0 ? "ms-3" : ""}
                    onClick={() => handleCourseSelection(course)}
                  >
                    {course}
                  </Button>
                )
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
                <>
                  <Button
                    key={index}
                    onClick={() => {
                      console.log(level);
                      handleLevelSelection(level);
                      const fee =
                        feeStructure[selectedFee][selectedNationality][
                          selectedCourse
                        ][level].amount;
                      setCalculatedFee(fee);
                    }}
                  >
                    UG
                  </Button>
                  <Button
                    key={index}
                    className="ms-3"
                    onClick={() => {
                      console.log(level);
                      handleLevelSelection(level);
                      const fee =
                        feeStructure[selectedFee][selectedNationality][
                          selectedCourse
                        ][level].amount;
                      setCalculatedFee(fee);
                    }}
                  >
                    PG
                  </Button>
                  <Button
                    key={index}
                    className="ms-3"
                    onClick={() => {
                      console.log(level);
                      handleLevelSelection(level);
                      const fee =
                        feeStructure[selectedFee][selectedNationality][
                          selectedCourse
                        ][level].amount;
                      setCalculatedFee(fee);
                    }}
                  >
                    DIPLOMA
                  </Button>
                  <Button
                    key={index}
                    className="ms-3"
                    onClick={() => {
                      console.log(level);
                      handleLevelSelection(level);
                      const fee =
                        feeStructure[selectedFee][selectedNationality][
                          selectedCourse
                        ][level].amount;
                      setCalculatedFee(fee);
                    }}
                  >
                    Ph.D
                  </Button>
                </>
              ) : (
                <Button
                  className={index > 0 ? "ms-3" : ""}
                  key={index + 1}
                  onClick={() => {
                    console.log(level);
                    handleLevelSelection(level);
                    const fee =
                      feeStructure[selectedFee][selectedNationality][
                        selectedCourse
                      ][level].amount;
                    setCalculatedFee(fee);
                  }}
                >
                  {level === "ALL_LEVEL" ? "UG, PG, DIPLOMA, Ph.D" : level}
                </Button>
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

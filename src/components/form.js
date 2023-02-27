import React, { useState } from "react";
import "./form.css";
import axios from "axios"
const Register = () => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const [driverAge, setDriverAge] = useState("");
  const [sex, setSex] = useState('')
  const [education, setEducation] = useState("");
  const [driverRelation, setDriverRelation] = useState("");
  const [experience, setExperience] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleOwner, setvehicleOwner] = useState("");
  const [service, setService] = useState("");
  const [defect, setDefect] = useState("");
  const [areaAccident, setAreaAccident] = useState("");
  const [lanes, setLanes] = useState("");
  const [roadAlign, setRoadAlign] = useState("");
  const [junction, setJunction] = useState("");
  const [roadSurface, setRoadSurface] = useState("");
  const [roadCondition, setRoadCondition] = useState("");
  const [lightCondition, setLightCondition] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [collision, setCollision] = useState("");
  const [vehicleInvolved, setVehicleInvolved] = useState("");
  const [casualites, setCasualites] = useState("");
  const [movement, setMovement] = useState("");
  const [casualtyClass, setCasualtyClass] = useState("");
  const [sexCasualty, setSexCasualty] = useState("");
  const [ageBand, setAgeBand] = useState("");
  const [casualtyServerity, setCasualtyServerity] = useState("");
  const [workCasuality, setWorkCasuality] = useState("");
  const [fitnessCasuality, setFitnessCasuality] = useState("");
  const [pedestrianMovement, setPedestrianMovement] = useState("");
  const [causeAccident, setCauseAccident] = useState("");
  const [accidentSeverity, setAccidentSeverity] = useState("");
  
  const [timeError, setTimeError] = useState(false);
  const [timeErrorMsg, setTimeErrorMsg] = useState("");
  const [dayError, setDayError] = useState(false);
  const [dayErrorMsg, setdayErrorMsg] = useState("");
  const [driverAgeError, setdriverAgeError] = useState(false);
  const [driverAgeErrorMsg, setdriverAgeErrorMsg] = useState("");
  const [genderError, setGenderError] = useState(false);
  const [genderErrorMsg, setGenderErrorMsg] = useState(""); 
  const [educError, seteducError] = useState(false);
  const [educErrorMsg, seteducErrorMsg] = useState("");
  const [driverRelationError, setdriverRelationError] = useState(false);
  const [driverRelationErrorMsg, setdriverRelationErrorMsg] = useState(""); 
  const [experienceError, setexperienceError] = useState(false);
  const [experienceErrorMsg, setexperienceErrorMsg] = useState("");
  const [vehicleTypeError, setvehicleTypeError] = useState(false);
  const [vehicleTypeErrorMsg, setvehicleTypeErrorMsg] = useState("");
  const [vehicleOwnerError, setvehicleOwnerError] = useState(false);
  const [vehicleOwnerErrorMsg, setvehicleOwnerErrorMsg] = useState("");
  const [serviceError, setserviceError] = useState(false);
  const [serviceErrorMsg, setserviceErrorMsg] = useState("");
  const [defectError, setdefectError] = useState(false);
  const [defectErrorMsg, setdefectErrorMsg] = useState("");
  const [areaAccidentError, setareaAccidentError] = useState(false);
  const [areaAccidentErrorMsg, setareaAccidentErrorMsg] = useState("");
  const [lanesError, setlanesError] = useState(false);
  const [lanesErrorMsg, setlanesErrorMsg] = useState("");
  const [roadAlignError, setroadAlignError] = useState(false);
  const [roadAlignErrorMsg, setroadAlignErrorMsg] = useState("");
  const [junctionError, setjunctionError] = useState(false);
  const [junctionErrorMsg, setjunctionErrorMsg] = useState("");
  const [roadSurfaceError, setroadSurfaceError] = useState(false);
  const [roadSurfaceErrorMsg, setroadSurfaceErrorMsg] = useState("");
  const [roadConditionError, setroadConditionError] = useState(false);
  const [roadConditionErrorMsg, setroadConditionErrorMsg] = useState("");
  const [lightConditionError, setlightConditionError] = useState(false);
  const [lightConditionErrorMsg, setlightConditionErrorMsg] = useState("");
  const [weatherConditionError, setweatherConditionError] = useState(false);
  const [weatherConditionErrorMsg, setweatherConditionErrorMsg] = useState("");
  const [collisionError, setcollisionError] = useState(false);
  const [collisionErrorMsg, setcollisionErrorMsg] = useState("");
  const [vehicleInvolvedError, setvehicleInvolvedError] = useState(false);
  const [vehicleInvolvedErrorMsg, setvehicleInvolvedErrorMsg] = useState("");
  const [casualitesError, setcasualitesError] = useState(false);
  const [casualitesErrorMsg, setcasualitesErrorMsg] = useState("");
  const [movementError, setmovementError] = useState(false);
  const [movementErrorMsg, setmovementErrorMsg] = useState("");
  const [casualtyClassError, setcasualtyClassError] = useState(false);
  const [casualtyClassErrorMsg, setcasualtyClassErrorMsg] = useState("");
  const [sexCasualtyError, setsexCasualtyError] = useState(false);
  const [sexCasualtyErrorMsg, setsexCasualtyErrorMsg] = useState("");
  const [ageBandError, setageBandError] = useState(false);
  const [ageBandErrorMsg, setageBandErrorMsg] = useState("");
  const [casualtyServerityError, setcasualtyServerityError] = useState(false);
  const [casualtyServerityErrorMsg, setcasualtyServerityErrorMsg] = useState("");
  const [workCasualityError, setworkCasualityError] = useState(false);
  const [workCasualityErrorMsg, setworkCasualityErrorMsg] = useState("");
  const [fitnessCasualityError, setFitnessCasualityError] = useState(false);
  const [fitnessCasualityErrorMsg, setFitnessCasualityErrorMsg] = useState("");
  const [pedestrianMovementError, setpedestrianMovementError] = useState(false);
  const [pedestrianMovementErrorMsg, setpedestrianMovementErrorMsg] = useState("");
  const [causeAccidentError, setcauseAccidentError] = useState(false);
  const [causeAccidentErrorMsg, setcauseAccidentErrorMsg] = useState("");
  const [accidentSeverityError, setaccidentSeverityError] = useState(false);
  const [accidentSeverityErrorMsg, setaccidentSeverityErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

    const userData = {
      time, day,driverAge,sex,education,driverRelation,experience,vehicleType,vehicleOwner,service,defect,
      areaAccident,lanes,roadAlign,junction,roadSurface,roadCondition,lightCondition,weatherCondition,
      collision,vehicleInvolved,casualites,movement,casualtyClass,sexCasualty,ageBand,casualtyServerity,
      workCasuality,fitnessCasuality,pedestrianMovement,causeAccident
    }
    console.log(userData);
  axios({
    method:"POST",
    url:"http://127.0.0.1:5000/predict",
    UserData : userData,
  }).then((res)=>{
    console.log("res",res)
  })

  const getRegister = (e) => {
    e.preventDefault();
    // if (time == "") {
    //   setTimeError(true);
    //   setTimeError("Enter the time");
    // }
    // if (day == "") {
    //    setDayError(true);
    //    setdayErrorMsg("Enter the day");
    // }
    // if (driverAge == "") {
    //   setdriverAgeError(true);
    //   setdriverAgeErrorMsg("Enter your age");
    // }
    // if (sex == "") {
    //   setGenderError(true);
    //   setGenderErrorMsg("Enter your password");
    // }
    // if (education == "") {
    //    seteducError(true);
    //    seteducErrorMsg("Enter your education");
    // }
    // if (driverRelation === "") {
    //   setdriverRelationError(true);
    //   setdriverRelationErrorMsg("Enter your relation")
    // }
    // if (experience == "") {
    //   setexperienceError(true);
    //   setexperienceErrorMsg("experienced!!")
    // }
    if (
      time != "" &&
      day != "" &&
      driverAge != "" &&
      education != "" &&
      driverRelation != "" &&
      experience!= "" &&
      vehicleType!="" &&
      vehicleOwner != "" &&
      service!="" &&
      defect!="" &&
      areaAccident!="" &&
      lanes!="" &&
      roadAlign!="" &&
      junction != "" &&
      roadSurface!="" &&
      roadCondition!="" &&
      lightCondition!=""&&
      weatherCondition!= "" &&
      collision!="" &&
      vehicleInvolved!="" &&
      casualites!="" &&
      movement!="" &&
      casualtyClass!="" &&
      sexCasualty!="" &&
      ageBand!="" &&
      casualtyServerity!="" &&
      workCasuality!="" &&
      fitnessCasuality!="" &&
      pedestrianMovement!="" &&
      causeAccident!=""
    ) {
      window.location.href = '/second'
     
    }
    else {
      console.log('please enter all fields')
      alert("Please enter all the fields")
    }
  };

  return (
    <div className="form-all">
    <div className="container">
     
      <div className="content">
        <form className="form">
          {/* <input
            type="text"
            value={time}
            onChange={(e) => {
              if (e.target.value != "") {
                setTimeError(false);
              } else if (e.target.value == "") {
                setTimeError(true);
                setTimeErrorMsg("Enter the time");
              }
              setTime(e.target.value);
            }}
            placeholder="Enter the time"
            className="input2"
          />
          <br />
          {timeError && <span style={{ color: "red", marginLeft: "100px" }}>{timeErrorMsg}</span>}
          <br /> */}
           {/* <input
            type="text"
            value={day}
            onChange={(e) => {
              if (e.target.value != "") {
                setDayError(false);
              } else if (e.target.value == "") {
                setDayError(true);
                setdayErrorMsg("Enter your dept");
              }
              setDay(e.target.value);
            }}
            placeholder="day"
            className="input2"
          />
          <br />
          {dayError && <span style={{ color: "red", marginLeft: "100px" }}>{dayErrorMsg}</span>}
          <br />  */}
          <input
            type="text"
            value={driverAge}
            onChange={(e) => {
              if (e.target.value != "") {
                setdriverAgeError(false);
              } else if (e.target.value == "") {
                setdriverAgeError(true);
                setdriverAgeErrorMsg("Enter your email");
              }
              setDriverAge(e.target.value);
            }}
            placeholder="driverAge"
            className="input2"
          />
          <br />
          {driverAgeError && <span style={{ color: "red", marginLeft: "100px" }}>{driverAgeErrorMsg}</span>}
          <br />
          {/* <input
            type="text"
            value={sex}
            onChange={(e) => {
              if (e.target.value != "") {
                setGenderError(false);
              } else if (e.target.value == "") {
                setGenderError(true);
                setGenderErrorMsg("Enter your password");
              }
              setSex(e.target.value);
            }}
            placeholder="gender"
            className="input2"
          />
          <br />
          {genderError && (
            <span style={{ color: "red", marginLeft: "100px" }}>{genderErrorMsg}</span>
          )}
          <br />
          <input type="text" value={education} onChange={(e) => {
            if (e.target.value!==""){
              seteducError(false);
            } else if (e.target.value === "") {
                seteducError(true);
                seteducErrorMsg("Enter your gender");
            }
            setEducation(e.target.value);
          }}
          placeholder = "education"
          className="input2" />
          <br />
          {educError && (<span style={{color: "red", marginLeft: "100px"}}>{educErrorMsg}</span>)}
          <br /> */}
          {/* <input
            type="text"
            value={driverRelation}
            onChange={(e) => {
              if (e.target.value != "") {
                setdriverAgeError(false);
              } else if (e.target.value == "") {
                setdriverAgeError(true);
                setdriverAgeErrorMsg("Enter your relation");
              }
              setDriverRelation(e.target.value);
            }}
            placeholder="driver relation"
            className="input2"
          />
          <br />
          {driverRelationError && (
            <span style={{ color: "red", marginLeft: "100px" }}>{driverRelationErrorMsg}</span>
          )}
          <br /> */}
          <input
            type="text"
            value={experience}
            onChange={(e) => {
              if (e.target.value != "") {
                setexperienceError(false);
              } else if (e.target.value == "") {
                setexperienceError(true);
                setexperienceErrorMsg("Enter the experience");
              }
              setExperience(e.target.value);
            }}
            placeholder="Experience"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {experienceError && <span style={{ color: "red", marginLeft: "100px" }}>{experienceErrorMsg}</span>}
          <br /> 
          <input
            type="text"
            value={vehicleType}
            onChange={(e) => {
              if (e.target.value != "") {
                setvehicleTypeError(false);
              } else if (e.target.value == "") {
                setvehicleTypeError(true);
                setvehicleTypeErrorMsg("Enter type of vehicle");
              }
              setVehicleType(e.target.value);
            }}
            placeholder="vehicle type"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {vehicleTypeError && <span style={{ color: "red", marginLeft: "100px" }}>{vehicleTypeErrorMsg}</span>}
          <br /> 
          {/* <input
            type="text"
            value={vehicleOwner}
            onChange={(e) => {
              if (e.target.value != "") {
                setvehicleOwnerError(false);
              } else if (e.target.value == "") {
                setvehicleOwnerError(true);
                setvehicleOwnerErrorMsg("Enter vehicle owner");
              }
              setvehicleOwner(e.target.value);
            }}
            placeholder="vehicle owner"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {vehicleOwnerError && <span style={{ color: "red", marginLeft: "100px" }}>{vehicleOwnerErrorMsg}</span>}
          <br /> 
          <input
            type="text"
            value={service}
            onChange={(e) => {
              if (e.target.value != "") {
                setserviceError(false);
              } else if (e.target.value == "") {
                setserviceError(true);
                setserviceErrorMsg("Enter service year");
              }
              setService(e.target.value);
            }}
            placeholder="service year"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {serviceError && <span style={{ color: "red", marginLeft: "100px" }}>{serviceErrorMsg}</span>}
          <br /> 
          <input
            type="text"
            value={defect}
            onChange={(e) => {
              if (e.target.value != "") {
                setdefectError(false);
              } else if (e.target.value == "") {
                setdefectError(true);
                setdefectErrorMsg("Enter defect");
              }
              setDefect(e.target.value);
            }}
            placeholder="defect"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {defectError && <span style={{ color: "red", marginLeft: "100px" }}>{defectErrorMsg}</span>}
          <br />  */}
          <input
            type="text"
            value={areaAccident}
            onChange={(e) => {
              if (e.target.value != "") {
                setareaAccidentError(false);
              } else if (e.target.value == "") {
                setareaAccidentError(true);
                setareaAccidentErrorMsg("Enter accidental area");
              }
              setAreaAccident(e.target.value);
            }}
            placeholder="area accident"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {areaAccidentError && <span style={{ color: "red", marginLeft: "100px" }}>{areaAccidentErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={lanes}
            onChange={(e) => {
              if (e.target.value != "") {
                setlanesError(false);
              } else if (e.target.value == "") {
                setlanesError(true);
                setlanesErrorMsg("Enter lanes");
              }
              setLanes(e.target.value);
            }}
            placeholder="lanes"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {lanesError && <span style={{ color: "red", marginLeft: "100px" }}>{lanesErrorMsg}</span>}
          <br /> 
          <input
            type="text"
            value={roadAlign}
            onChange={(e) => {
              if (e.target.value != "") {
                setroadAlignError(false);
              } else if (e.target.value == "") {
                setroadAlignError(true);
                setroadAlignErrorMsg("Enter road align");
              }
              setRoadAlign(e.target.value);
            }}
            placeholder="road align"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {roadAlignError && <span style={{ color: "red", marginLeft: "100px" }}>{roadAlignErrorMsg}</span>}
          <br /> 
          <input
            type="text"
            value={junction}
            onChange={(e) => {
              if (e.target.value != "") {
                setjunctionError(false);
              } else if (e.target.value == "") {
                setjunctionError(true);
                setjunctionErrorMsg("Enter junction");
              }
              setJunction(e.target.value);
            }}
            placeholder="junction"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {junctionError && <span style={{ color: "red", marginLeft: "100px" }}>{junctionErrorMsg}</span>}
          <br /> 
          {/* <input
            type="text"
            value={roadSurface}
            onChange={(e) => {
              if (e.target.value != "") {
                setroadSurfaceError(false);
              } else if (e.target.value == "") {
                setroadSurfaceError(true);
                setroadSurfaceErrorMsg("Enter road surface");
              }
              setRoadSurface(e.target.value);
            }}
            placeholder="road surface"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {roadSurfaceError && <span style={{ color: "red", marginLeft: "100px" }}>{roadSurfaceErrorMsg}</span>}
          <br /> */}
          <input
            type="text"
            value={roadCondition}
            onChange={(e) => {
              if (e.target.value != "") {
                setroadConditionError(false);
              } else if (e.target.value == "") {
                setroadConditionError(true);
                setroadConditionErrorMsg("Enter road condition");
              }
              setRoadCondition(e.target.value);
            }}
            placeholder="road condition"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {roadConditionError && <span style={{ color: "red", marginLeft: "100px" }}>{roadConditionErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={lightCondition}
            onChange={(e) => {
              if (e.target.value != "") {
                setlightConditionError(false);
              } else if (e.target.value == "") {
                setlightConditionError(true);
                setlightConditionErrorMsg("Enter light condition");
              }
              setLightCondition(e.target.value);
            }}
            placeholder="light condition"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {lightConditionError && <span style={{ color: "red", marginLeft: "100px" }}>{lightConditionErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={weatherCondition}
            onChange={(e) => {
              if (e.target.value != "") {
                setweatherConditionError(false);
              } else if (e.target.value == "") {
                setweatherConditionError(true);
                setweatherConditionErrorMsg("Enter weather condition");
              }
              setWeatherCondition(e.target.value);
            }}
            placeholder="weather condition"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {weatherConditionError && <span style={{ color: "red", marginLeft: "100px" }}>{weatherConditionErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={collision}
            onChange={(e) => {
              if (e.target.value != "") {
                setcollisionError(false);
              } else if (e.target.value == "") {
                setcollisionError(true);
                setcollisionErrorMsg("Enter collision");
              }
              setCollision(e.target.value);
            }}
            placeholder="collision"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {collisionError && <span style={{ color: "red", marginLeft: "100px" }}>{collisionErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={vehicleInvolved}
            onChange={(e) => {
              if (e.target.value != "") {
                setvehicleInvolvedError(false);
              } else if (e.target.value == "") {
                setvehicleInvolvedError(true);
                setvehicleInvolvedErrorMsg("Enter vehicle involved");
              }
              setVehicleInvolved(e.target.value);
            }}
            placeholder="vehicle involved"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {vehicleInvolvedError && <span style={{ color: "red", marginLeft: "100px" }}>{vehicleInvolvedErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={casualites}
            onChange={(e) => {
              if (e.target.value != "") {
                setcasualitesError(false);
              } else if (e.target.value == "") {
                setcasualitesError(true);
                setcasualitesErrorMsg("Enter rcasualties");
              }
              setCasualites(e.target.value);
            }}
            placeholder="casualties error"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {casualitesError && <span style={{ color: "red", marginLeft: "100px" }}>{casualitesErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={movement}
            onChange={(e) => {
              if (e.target.value != "") {
                setmovementError(false);
              } else if (e.target.value == "") {
                setmovementError(true);
                setmovementErrorMsg("Enter movement error");
              }
              setMovement(e.target.value);
            }}
            placeholder="movement error"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {movementError && <span style={{ color: "red", marginLeft: "100px" }}>{movementErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={casualtyClass}
            onChange={(e) => {
              if (e.target.value != "") {
                setcasualtyClassError(false);
              } else if (e.target.value == "") {
                setcasualtyClassError(true);
                setcasualtyClassErrorMsg("Enter casualty error");
              }
              setCasualtyClass(e.target.value);
            }}
            placeholder="casualty class"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {casualtyClassError && <span style={{ color: "red", marginLeft: "100px" }}>{casualtyClassErrorMsg}</span>}
          <br />
          {/* <input
            type="text"
            value={sexCasualty}
            onChange={(e) => {
              if (e.target.value != "") {
                setsexCasualtyError(false);
              } else if (e.target.value == "") {
                setsexCasualtyError(true);
                setsexCasualtyErrorMsg("Enter casualty gender");
              }
              setSexCasualty(e.target.value);
            }}
            placeholder="casualty gender"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {sexCasualtyError && <span style={{ color: "red", marginLeft: "100px" }}>{sexCasualtyErrorMsg}</span>}
          <br /> */}
          <input
            type="text"
            value={ageBand}
            onChange={(e) => {
              if (e.target.value != "") {
                setageBandError(false);
              } else if (e.target.value == "") {
                setageBandError(true);
                setageBandErrorMsg("Enter age band");
              }
              setAgeBand(e.target.value);
            }}
            placeholder="age band"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {ageBandError && <span style={{ color: "red", marginLeft: "100px" }}>{ageBandErrorMsg}</span>}
          <br />
          {/* <input
            type="text"
            value={casualtyServerity}
            onChange={(e) => {
              if (e.target.value != "") {
                setcasualtyServerityError(false);
              } else if (e.target.value == "") {
                setcasualtyServerityError(true);
                setcasualtyServerityErrorMsg("Enter casualty severity");
              }
              setCasualtyServerity(e.target.value);
            }}
            placeholder="casualty severity"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {casualtyServerityError && <span style={{ color: "red", marginLeft: "100px" }}>{casualtyServerityErrorMsg}</span>}
          <br /> */}
          {/* <input
            type="text"
            value={workCasuality}
            onChange={(e) => {
              if (e.target.value != "") {
                setworkCasualityError(false);
              } else if (e.target.value == "") {
                setworkCasualityError(true);
                setworkCasualityErrorMsg("Enter casualty work");
              }
              setWorkCasuality(e.target.value);
            }}
            placeholder="casualty work"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {workCasualityError && <span style={{ color: "red", marginLeft: "100px" }}>{workCasualityErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={fitnessCasuality}
            onChange={(e) => {
              if (e.target.value != "") {
                setFitnessCasualityError(false);
              } else if (e.target.value == "") {
                setFitnessCasualityError(true);
                setFitnessCasualityErrorMsg("Enter fitness casualty");
              }
              setFitnessCasuality(e.target.value);
            }}
            placeholder="casualty fitness"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {fitnessCasualityError && <span style={{ color: "red", marginLeft: "100px" }}>{fitnessCasualityErrorMsg}</span>}
          <br /> */}
          <input
            type="text"
            value={pedestrianMovement}
            onChange={(e) => {
              if (e.target.value != "") {
                setpedestrianMovementError(false);
              } else if (e.target.value == "") {
                setpedestrianMovementError(true);
                setpedestrianMovementErrorMsg("Enter pedestrian movement");
              }
              setPedestrianMovement(e.target.value);
            }}
            placeholder="pedestrian movement error"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {pedestrianMovementError && <span style={{ color: "red", marginLeft: "100px" }}>{pedestrianMovementErrorMsg}</span>}
          <br />
          <input
            type="text"
            value={causeAccident}
            onChange={(e) => {
              if (e.target.value != "") {
                setcauseAccidentError(false);
              } else if (e.target.value == "") {
                setcauseAccidentError(true);
                setcauseAccidentErrorMsg("Enter cause of accident ");
              }
              setCauseAccident(e.target.value);
            }}
            placeholder="accident error"
            className="input2"
            // style={{border: experienceError ? "2px solid red" : "none"}}
          />
          <br />
          {causeAccidentError && <span style={{ color: "red", marginLeft: "100px" }}>{causeAccidentErrorMsg}</span>}
          <br />
           <div className="button-container"><button
            className="button"
            style={{ cursor: "pointer" }}
            onClick={getRegister}
          >
            SUBMIT
          </button>
          <br />
          <span style={{ color: "green", fontSize: "20px" }}>{successMsg}</span>
          {}</div>
          
          <br />
          <div style={{ color: "black" }}>{successMsg}</div>
          {/* <a href="/login" style={{ color: "darkgreen" }}>
            Go to Login
          </a> */}
        </form>
      </div>
    </div>
    </div>
  );
};
export default Register;
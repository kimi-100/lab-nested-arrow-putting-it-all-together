// CREATED OBJECT CONTAINING USER INFO/
const userInfo = {
  username: "User",
  password: "Abc123",
};

const createLoginTracker = function (userInfo) {
  let attemptCounter = 0;
  //INNER FUNCTION WITH PASSWORD ATTEMPT LOGIC
  const passwordAttemptLogic = (passwordAttempt) => {
    if (attemptCounter >=3) {
      let returnMessage = `Account locked due to too many failed login attempts`;
      return returnMessage;

    } else if (passwordAttempt === userInfo.password) {
      let returnMessage = `Welcome ${userInfo.username}`;
      return returnMessage;

    } else {
      let returnMessage = `Incorrect Password`;
      attemptCounter++;
      return returnMessage;
    }
  }
  return passwordAttemptLogic;
};

// TEST DATA AND EXECUTION
const login = createLoginTracker(userInfo);
console.log(login("wrongAttemptOne"));
console.log(login("wrongAttemptTwo"));
// console.log(login("wrongAttemptThree"));
console.log(login("Abc123"));

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};


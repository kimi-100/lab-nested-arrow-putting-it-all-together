// CREATED OBJECT CONTAINING USER INFO/
const userInfo = {
  username: "user1",
  password: "password123",
};

const createLoginTracker = function (userInfo) {
  let attemptCounter = 0;
  //INNER FUNCTION WITH PASSWORD ATTEMPT LOGIC
  const passwordAttemptLogic = (passwordAttempt) => {
    if (attemptCounter >3) {
      let returnMessage = `Account locked due to too many failed login attempts`;
      return returnMessage;

    } else if (passwordAttempt === userInfo.password) {
      let returnMessage = `Login successful`;
      return returnMessage;

    } else {
      attemptCounter++;
      let returnMessage = `Attempt ${attemptCounter}: Login failed`;
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
console.log(login("password123"));

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};


import {
  jobDepartments,
  softSkills,
  employeeDescriptions
} from "../static/employeeData";

function randomSubarray(array: any[]) {
  let result: string[] = [];
  let odds = 1;
  for (let i = 0; i < array.length; i++) {
    let randomNumber = Math.random();
    let randomSkill = array[Math.floor(Math.random() * array.length)];
    if (randomNumber < odds && !result.includes(randomSkill)) {
      result.push(randomSkill);
      odds = odds * 0.75;
    }
  }
  return result;
}

const fetchEmployees = async () => {
  const userFecthApi = "https://randomuser.me/api/?results=100";

  try {
    const userFetchResponse = await fetch(userFecthApi);
    if (!userFetchResponse.ok) throw new Error(userFetchResponse.statusText);
    const userData = await userFetchResponse.json();
    const users = userData.results;

    const employees = [];
    let id = 0;

    for (let user of users) {
      const name = `${user.name.first} ${user.name.last}`;
      const jobDeparment =
        jobDepartments[Math.floor(Math.random() * jobDepartments.length)];
      const department = jobDeparment.department;
      const job = jobDeparment.jobs[Math.floor(Math.random() * 5)];
      const jobData = { department, jobTitle: job.title };
      const contact = { email: user?.email ?? "", phone: user?.phone ?? "" };
      let pictures = {
        iconUrl: user.picture.thumbnail,
        imageUrl: user.picture.large
      };
      const skills = {
        softSkills: randomSubarray(softSkills),
        hardSkills: randomSubarray(job.hardSkills)
      };
      const description = `${name} is ${
        employeeDescriptions[
          Math.floor(Math.random() * employeeDescriptions.length)
        ]
      }`;
      const age = user.dob.age;
      const isWorker = !(Math.floor(Math.random() * 10) === 5);

      const employee = {
        name,
        jobData,
        contact,
        pictures,
        description,
        skills,
        age,
        isWorker,
        id
      };

      id++;

      employees.push(employee);
    }
    
    return employees;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`${error.name}: ${error.message}`);
      return { error: true, reason: error.message };
    }
  }
};

export default fetchEmployees;

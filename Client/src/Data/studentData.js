const studentData = [
  {
    id: 1,
    fullName: "Muhammad Aliyan Nadeem",
    regNumber: "BCS07223017",
    currentSemester: 3,
    GPA: {
      "semester-1": {
        gpa: 3.56,
        attendance: 80,
        assignment: 100,
        projects: 100,
        quiz: 100,
        otherActivity: 100,
      },
      "semester-2": {
        gpa: 2.85,
        attendance: 70,
        assignment: 10,
        projects: 0,
        quiz: 80,
        otherActivity: 50,
      },
      "semester-3": {
        gpa: 3.78,
        attendance: 80,
        assignment: 80,
        projects: 100,
        quiz: 90,
        otherActivity: 100,
      },
    },
    sgpa: 3.91,
  },
  {
    id: 2,
    fullName: "Usama Zulfiqar",
    regNumber: "BCS07223013",
    currentSemester: 3,
    GPA: {
      "semester-1": {
        gpa: 3.8,
        attendance: 80,
        assignment: 100,
        projects: 100,
        quiz: 100,
        otherActivity: 100,
      },
      "semester-2": {
        gpa: 3.74,
        attendance: 80,
        assignment: 100,
        projects: 100,
        quiz: 100,
        otherActivity: 100,
      },
      "semester-3": {
        gpa: 4.0,
        attendance: 80,
        assignment: 100,
        projects: 100,
        quiz: 100,
        otherActivity: 100,
      },
    },
    sgpa: 3.91,
  },
  {
    id: 3,
    fullName: "Noor-ul-Ain",
    regNumber: "BCS07223056",
    currentSemester: 3,
    GPA: {
      "semester-1": {
        gpa: 3.0,
        attendance: 0,
        assignment: 0,
        projects: 0,
        quiz: 0,
        otherActivity: 0,
      },
      "semester-2": {
        gpa: 2.94,
        attendance: 80,
        assignment: 20,
        projects: 40,
        quiz: 0,
        otherActivity: 0,
      },
      "semester-3": {
        gpa: 2.5,
        attendance: 80,
        assignment: 30,
        projects: 40,
        quiz: 10,
        otherActivity: 0,
      },
    },
    sgpa: 2.51,
  },
  {
    id: 4,
    fullName: "Mohsin Ikhlaq",
    regNumber: "BCS07223110",
    currentSemester: 3,
    GPA: {
      "semester-1": {
        gpa: 3.78,
        attendance: 0,
        assignment: 0,
        projects: 0,
        quiz: 0,
        otherActivity: 0,
      },
      "semester-2": {
        gpa: 3.56,
        attendance: 80,
        assignment: 20,
        projects: 40,
        quiz: 0,
        otherActivity: 0,
      },
      "semester-3": {
        gpa: 3.1,
        attendance: 80,
        assignment: 30,
        projects: 40,
        quiz: 10,
        otherActivity: 0,
      },
    },
    sgpa: 3.1,
  },
];

function calculateProgress(
  gpa,
  assignment,
  attendance,
  projects,
  quiz,
  otherActivity
) {
  // Calculate the percentage of the total scores (assignment, attendance, projects, quiz, otherActivity)
  const totalScores = assignment + attendance + projects + quiz + otherActivity;
  const maxTotalScores = 500; // Maximum possible total score
  const percentage = (totalScores / maxTotalScores) * 100;

  const progress = percentage * (gpa / 4);

  // Ensure progress is within 0-100 range
  return progress;
}

studentData.forEach((student) => {
  student.progress = {
    semester1: calculateProgress(
      student.GPA["semester-1"].gpa,
      student.GPA["semester-1"].assignment,
      student.GPA["semester-1"].attendance,
      student.GPA["semester-1"].projects,
      student.GPA["semester-1"].quiz,
      student.GPA["semester-1"].otherActivity
    ),
    semester2: calculateProgress(
      student.GPA["semester-2"].gpa,
      student.GPA["semester-2"].assignment,
      student.GPA["semester-2"].attendance,
      student.GPA["semester-2"].projects,
      student.GPA["semester-2"].quiz,
      student.GPA["semester-2"].otherActivity
    ),
    semester3: calculateProgress(
      student.GPA["semester-3"].gpa,
      student.GPA["semester-3"].assignment,
      student.GPA["semester-3"].attendance,
      student.GPA["semester-3"].projects,
      student.GPA["semester-3"].quiz,
      student.GPA["semester-3"].otherActivity
    ),
  };
});

export default studentData;

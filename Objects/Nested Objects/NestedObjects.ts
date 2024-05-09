// nested objects
// we can add objects inside another object it is called nested objects
type DepartmentInfo = {
  deptName: string;
  totalDevelopers: number;
  productName?: string;
};

type Employee = {
  designation: string;
  personalInfo: {
    name: string;
    email: string;
    dob: string;
    phoneNumber: number;
    gender: "male" | "female";
    nationality?: string;
    religion?: string;
  };
  departmentInfo: DepartmentInfo; // in this property we use another type DepartmentInfo
};
const employee: Employee = {
  designation: "Software Engineer",
  personalInfo: {
    name: "Hamza Alvi",
    email: "hamza@h.com",
    dob: "15-07-1997",
    phoneNumber: 122134151,
    gender: "male",
    nationality: "Pakistani",
    religion: "Islam",
  },
  departmentInfo: {
    deptName: "Product",
    totalDevelopers: 15,
    productName: "SS",
  },
};
console.log(employee.personalInfo.name, "employee.personalInfo.name"); // we can also access nested object via dot notation
console.log(employee.departmentInfo.deptName);
console.log(employee.designation, "employee.designation");

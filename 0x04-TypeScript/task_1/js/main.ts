interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional attributes
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

    console.log(director1);

    export interface printTeacherFunction {
        (firstName: string, lastName: string): string;
    }

    export const printTeacher: printTeacherFunction = (firstName, lastName) => {
        return `${firstName[0]}. ${lastName}`;
    };

    console.log(printTeacher('John', 'Doe'));

    export interface StudentConstructor {
        new (firstName: string, lastName: string): StudentInterface;
    }

    export interface StudentInterface {
        workOnHomework(): string;
        displayName(): string;
    }


    export class StudentClass implements StudentInterface {
        private firstName: string;
        private lastName: string;


        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        workOnHomework(): string {
            return 'Currently working';
        }
        displayName(): string {
            return this.firstName;
        }
    }
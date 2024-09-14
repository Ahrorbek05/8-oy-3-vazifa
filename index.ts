// 1
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
  }
  
  const person: Person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
  };
  
  interface Book {
    title: string;
    author: string;
    publishedYear: number;
  }
  
  const book: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  };
  
// 2
const studentRecord: [string, number, boolean] = ["Alice", 22, true];

const coordinate: [number, number] = [10, 20];

// 3
let unknownVar: unknown = "hello";

function toStringIfUnknown(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  return "Not a string";
}
console.log(toStringIfUnknown(unknownVar));

// 4
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function printDay(day: DaysOfWeek): void {
    console.log(DaysOfWeek[day]);
  }
  printDay(DaysOfWeek.Monday);
  
// 5

interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    employeeId: number;
    department: string;
  }
  
  type Worker = Person & Employee;
  
  const worker: Worker = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
    department: "HR",
  };

// 6

interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
  interface Car extends Vehicle {
    numberOfDoors: number;
    isElectric: boolean;
  }
  
  const car: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
  };

// 7
type Address = {
    street: string;
    city: string;
    postalCode: string;
  };
  
  type PersonWithAddress = Person & { address: Address };
  
  const personWithAddress: PersonWithAddress = {
    name: "Mark",
    age: 28,
    isStudent: true,
    address: {
      street: "Main St",
      city: "Springfield",
      postalCode: "12345",
    },
  };
  

// 8
enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
  }
  
interface Order {
    orderId: number;
    status: OrderStatus;
    totalAmount: number;
  }
  
interface Customer {
    customerId: number;
    name: string;
  }
  
type CustomerOrder = Order & Customer;
  
const customerOrder: CustomerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.0,
    customerId: 789,
    name: "Sarah",
  };
  
  


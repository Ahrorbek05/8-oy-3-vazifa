"use strict";
const person = {
    name: "John Doe",
    age: 25,
    isStudent: false,
};
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
};
// 2
const studentRecord = ["Alice", 22, true];
const coordinate = [10, 20];
// 3
let unknownVar = "hello";
function toStringIfUnknown(value) {
    if (typeof value === "string") {
        return value;
    }
    return "Not a string";
}
console.log(toStringIfUnknown(unknownVar));
// 4
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
function printDay(day) {
    console.log(DaysOfWeek[day]);
}
printDay(DaysOfWeek.Monday);
const worker = {
    name: "Jane Doe",
    age: 30,
    employeeId: 12345,
    department: "HR",
};
const car = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    numberOfDoors: 4,
    isElectric: true,
};
const personWithAddress = {
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
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
const customerOrder = {
    orderId: 456,
    status: OrderStatus.Shipped,
    totalAmount: 150.0,
    customerId: 789,
    name: "Sarah",
};

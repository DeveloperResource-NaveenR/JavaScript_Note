// creating class

const Student = {
    fullName: "naveen",
    marks: 350,
    printMarks: function () {
        console.log("marks", this.marks);
    }
}

const employee = {
    tax_1() {
        console.log("tax 1")
    },
    tax_2: function () {
        console.log("tax 2");
    }
}


const karanEmployee = {
    salary: 500
}

karanEmployee.__proto__ = employee;
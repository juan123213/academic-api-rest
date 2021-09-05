/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);

const ipFn = require("./middleware/getipAddress");
app.use("*",ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// Student Routes Loading
const studentRoutes = require("./routes/student.routes");
StudentRoutes(app);

// teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
TeacherRoutes(app);

// period Routes Loading
const periodRoutes = require("./routes/period.routes");
PeriodRoutes(app);

// course Routes Loading
const courseRoutes = require("./routes/course.routes");
CourseRoutes(app);

// vehicle Routes Loading
const vehicleRoutes = require("./routes/vehicle.routes");
VehicleRoutes(app);

// user Routes Loading
const userRoutes = require("./routes/user.routes");
UserRoutes(app);

//token middleware
tkFn = require("./middleware/verifyToken");
app.use(tkFn);

app.listen(port, () => {
    console.log("server is running...")
});
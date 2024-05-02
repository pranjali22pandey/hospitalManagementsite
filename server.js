// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const patientsRouter = require('./routes/patients');
const doctorsRouter = require('./routes/doctors');
const appoinmentsRouter = require('./routes/appointments');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    'mongodb+srv://pranjali:1234@cluster0.4zhetmc.mongodb.net/hospital',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appoinmentsRouter);

// Root endpoint handler
app.get('/', (req, res) => {
    res.send('Server is running!'); // Send a simple message indicating server is running
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const app = express();

const { mongoose } = require('./database');
// settings
app.set('port', process.env.PORT || 3000 ); // es como crear una variable y su valor tomado del servidor

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
// Routes
app.use('/api/employees',require('./routes/employee.routes'));

// Starting the Server
app.listen(app.get('port'), () => {
          console.log('Server on port ', app.get('port'));         
});
const Employee =  require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
          const employees = await Employee.find();
          res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
          // const employee = new Employee(req.body); este valor es para la parte uno del servidor
          const employee = new Employee({  // De la línea 12 a la 16 las usaremos para Angular 9
                 name: req.body.name,
                 position: req.body.position,
                 office: req.body.office,
                 salary: req.body.salary
          });
          await employee.save();
          // console.log(req.body); con está linea comprobamos lo que hace en la consola
          res.json({
                 'status': 'Employee Saved'   
          });
}

employeeCtrl.getEmployee =  async (req, res) => {
         const employee = await Employee.findById(req.params.id);
         res.json(employee);
}

employeeCtrl.editEmployee = async (req, res) => {
          const  { id } = req.params;
          const employee = {
                    name: req.body.name,
                    position: req.body.position,
                    office: req.body.office,
                    salary: req.body.salary
          };
          await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
          res.json({status: 'Employee Update'});
}

employeeCtrl.deleteEmployee = async (req, res) => {
          await Employee.findByIdAndRemove(req.params.id);
          res.json({status: 'Employee Deleted'});
}

module.exports = employeeCtrl;
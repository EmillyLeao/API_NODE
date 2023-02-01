const form = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    firstname: {
      type: DataTypes.STRING
    },
    lastname: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING  
    }
  }, {
    tableName: 'form'
  })

  return Form
}

module.exports = form


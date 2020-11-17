module.exports = function(sequelize, DataTypes) {
    const Scores = sequelize.define("Scores", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      score: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      dateTime: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    });
    return Scores;
  };
  
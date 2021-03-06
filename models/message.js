module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define(
    "Message",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Anonymous"
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      sentiment: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      dislikes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: true
    }
  );

  return Message;
};

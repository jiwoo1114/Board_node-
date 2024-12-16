const Sequelize = require('sequelize')

module.exports = class Board extends Sequelize.Model {
   static init(sequelize) {
       return super.init({
           content: {
               type: Sequelize.TEXT,
               allowNull: false,
           },
           img: {
               type: Sequelize.STRING(200),
               allowNull: false,
           },
       }, {
            sequelize,
            timestamps: true, //creatAT,updatAT .. 등 자동 생성
            underscored: false,
            modelName: 'Board',
            tableName: 'boards',
            paranoid: true,
            charset: 'utf8mb4 ',
            collate: 'utf8mb4_general_ci',
       }
      )
   }

 static associate(db) {
       db.Board.belongsTo(db.User)
   }
}
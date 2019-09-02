// toda vez que um file for criado, ele será referenciado com o campo avatar_id na tabela de usuearios. Caso o campo seja atualizado, a atualização será refletida na tabela referenciada. Caso o avatar seja deletado, será setado NULL.

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};

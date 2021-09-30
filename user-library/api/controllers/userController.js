const service = require('../services/userService');

const getAllUsers = async (_req, res) => {
  const data = await service.getAllUsers();

  if (data.error) return res.state(data.error).json({ message: data.message })

  return res.status(200).json(data)
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await service.getUserById(id);

  if (user.error) return res.status(user.error).json({message: user.message})

  return res.status(200).json([user]);
}

const insertNewUser = async (req, res) => {
  const { body } = req;

  const newUser = await service.insertNewUser(body)

  if (newUser.error) return res.status(newUser.error).json({ message: newUser.message })

  return res.status(200).json(newUser);
}

module.exports = {
  getAllUsers,
  getUserById,
  insertNewUser
};

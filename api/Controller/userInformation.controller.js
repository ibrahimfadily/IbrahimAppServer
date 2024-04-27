const UserInformation = require('../modules/userInformation.model');

exports.submitUserInformation = async (req, res) => {
  const { idNumber, carNumber, carType, price } = req.body;

  try {
    const userInformation = new UserInformation({
      idNumber,
      carNumber,
      carType,
      price,
    });

    await userInformation.save();

    res.status(201).json({ message: 'User information submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit user information' });
  }
};

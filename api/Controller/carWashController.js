const CarWash = require('../modules/carWashModule');

exports.create = async (req, res) => {
  try {
    const { carType, washType, price } = req.body;
    const carWash = new CarWash({
      carType,
      washType,
      price,
    });
    await carWash.save();
    res.status(201).json(carWash);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

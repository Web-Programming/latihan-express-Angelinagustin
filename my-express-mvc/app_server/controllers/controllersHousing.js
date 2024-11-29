const Register = require('../models/register');

const getHousingById = async (req, res) => {
  const { id } = req.params;
  try {
    const housing = await HousingApplication.findById(id);
    if (!housing) {
      return res.status(404).json({ message: 'Housing not found' });
    }
    res.json(housing);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving housing', error });
  }
};

// Menyimpan data registrasi
const submitApplication = async (req, res) => {
  try {
    const applicationData = new HousingApplication(req.body);
    await applicationData.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting application', error });
  }
};

module.exports = {
  getHousingById,
  submitApplication,
};
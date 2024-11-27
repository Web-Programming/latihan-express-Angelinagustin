const HousingApplication = require('../models/housingApplication');

// Controller untuk menyimpan data registrasi
const submitApplication = async (req, res) => {
  try {
    const applicationData = new HousingApplication(req.body);
    await applicationData.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error });
  }
};

module.exports = { submitApplication };
const User = require('./../models/userModel');

exports.getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'Success',
    users,
  });
};

exports.getUser = async (req, res) => {
  try {
    const username = req.params;
    // console.log(req.params);

    const user = await User.findOne(username).select('-password');

    res.status(200).json({
      status: 'Success',
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const user = req.body;

    // console.log(user);

    await User.create(user);

    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { Username, password } = req.body;

    // console.log(req.body);
    const user = await User.findOne({ Username });

    // console.log(user);

    const userCheck = await user.comparePassword(password, user.password);

    if (user && userCheck) {
      res.status(200).json({
        status: 'success',
        data: Username,
      });
    } else {
      res.status(404).json({
        status: 'fail',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err.stack,
    });
  }
};

const { user } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.regitrasi = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = req.body;

    const schema = joi.object({
      email: joi.string().email().min(6).required(),
      password: joi.string().required(),
      fullName: joi.string().min(3).required(),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validation Failed",
        message: error.details[0].message,
      });
    }

    const checkEmail = await user.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      return res.send({
        status: "Failed",
        message: "Email Already Registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const dataUser = await user.create({
      ...data,
      password: hashedPassword,
    });

    const updateUser = await user.findOne({
      where: {
        email,
      },
    });

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: updateUser.id,
      },
      secretKey
    );
    res.send({
      status: "Success",
      data: {
        user: {
          email: dataUser.email,
          fullName: dataUser.fullName,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return res.send({
        status: "Validation Failed",
        message: error.details[0].message,
      });
    }

    const checkEmail = await user.findOne({
      where: {
        email,
      },
    });

    if (!checkEmail) {
      return res.send({
        status: "Login Failed",
        message: "Email and Password don't match",
      });
    }
    const checkPassword = await bcrypt.compare(password, checkEmail.password);

    if (!checkPassword) {
      return res.send({
        status: "Login Failed",
        message: "Email and Password don't match",
      });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: checkEmail.id,
      },
      secretKey
    );

    res.send({
      status: "success",
      data: {
        user: {
          id: checkEmail.id,
          fullName: checkEmail.fullName,
          email: checkEmail.email,
          token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.authUser = async (req, res) => {
  try {
    const id = req.userid;

    const dataUser = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updateAt", "password"],
      },
    });

    if (!dataUser) {
      return res.status(404).send({
        status: "Failed",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "user valid",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.fullName,
          email: dataUser.email,
          avatar: dataUser.avatar,
          phone: dataUser.phone,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "server error",
    });
  }
};

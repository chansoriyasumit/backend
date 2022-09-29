import { DataTypes } from "sequelize";

const initTestimonialModel = (sequelize) => {
  const Testimonial = sequelize.define(
    "Testimonial",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: "compositeIndex",
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      post: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      testimonial_description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      active: { type: DataTypes.TINYINT, defaultValue: 1 },
    },
    {
      timestamps: true,
      tableName: "testimonial",
      schema: "freedb_testimonial",
    }
  );
  Testimonial.sync({ alter: true });
  return Testimonial;
};

export default initTestimonialModel;

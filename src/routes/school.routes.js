import db from "../db/index.js";
import express from "express";

const router = express.Router();
router.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).send({ error: "All fields are required." });
  }

  const query =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) throw err;
    res.send({
      message: "School added successfully!",
      schoolId: result.insertId,
    });
  });
});

router.get("/listSchools", (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude) {
    return res
      .status(400)
      .send({ error: "Latitude and Longitude are required." });
  }

  const userLat = parseFloat(latitude);
  const userLng = parseFloat(longitude);

  const query = "SELECT * FROM schools";
  db.query(query, (err, schools) => {
    if (err) throw err;
    const sortedSchools = schools
      .map((school) => {
        const distance = Math.sqrt(
          Math.pow(userLat - school.latitude, 2) +
            Math.pow(userLng - school.longitude, 2)
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.send(sortedSchools);
  });
});

export default router;

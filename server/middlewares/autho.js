import express from "express";
import jwt from "jsonwebtoken";
import config from "config";

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(404).send("Access denied!. No token provoided");
  try {
    const decoded = jwt.verify(token, config.get("KEY"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(401).send("Invalid token");
  }
};

import express from "express";
import { SearchbyGEO, calender, getAutocomplete, register, searchByLocation } from "../Controllers/airControllers.js";


const router=express.Router();



router.post('/register',register);
router.get('/searchByLocation',searchByLocation);
router.get('/calender',calender);
router.get('/getAutocomplete',getAutocomplete);
router.get('/SearchbyGEO',SearchbyGEO)

export default router;
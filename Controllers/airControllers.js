import User from "../modules/user.js";
import encrypt from "encryptjs";

import axios from "axios";

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        if(!name)return res.send("name is required");
        if(!email)return res.send("email is required");
        if(!password)return res.send("password is required");


         const response=await User.find({email}).exec();

         if(response.length) return res.send("email is already exits");

         const secretkey="pin";
         const encryptkey=encrypt.encrypt(password,secretkey,256);


         const user= new User({
            name,
            email,
            password:encryptkey
         });

         await  user.save();
         return res.send("registeration done");

    }
    catch(error){
        return res.send(error);
    }
}




export const searchByLocation=async(req,res)=>{
    try{

        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
              location: 'Paris',
              checkin: '2023-09-16',
              checkout: '2023-09-17',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
	       res.send(response.data);
    }
    catch(error){
        return res.send(error);
    }
}


export const calender=async(req,res)=>{
    try{
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
              location: 'Paris',
              checkin: '2023-09-16',
              checkout: '2023-09-17',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
	            res.send(response.data);
          

    }
    catch(error){
        return res.send(error)
    }
}


export const getAutocomplete=async(req,res)=>{
    try{
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/autocomplete',
            params: {query: 'paris'},
            headers: {
              'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
	            res.send(response.data);

    }
    catch(error){
        return res.send(error);
    }
}



export const SearchbyGEO=async(req,res)=>{
    try{
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-geo',
            params: {
              ne_lat: '52.51',
              ne_lng: '13.41',
              sw_lat: '52.41',
              sw_lng: '13.31',
              checkin: '2023-09-15',
              checkout: '2023-09-16',
              adults: '1',
              children: '0',
              infants: '0',
              pets: '0',
              page: '1',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
              'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
          res.send(response.data);

    }
    catch(error){
        return res.send(error);
    }
}



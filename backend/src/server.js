import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import 'dotenv/config';
const app=express(); const PORT=process.env.PORT||5000;
const DATA=path.resolve('data/leads.json');
app.use(helmet()); app.use(cors({origin:process.env.CLIENT_URL||'*'})); app.use(express.json({limit:'1mb'})); app.use(morgan('dev'));
function read(){try{return JSON.parse(fs.readFileSync(DATA,'utf8'))}catch{return []}}
function write(d){fs.mkdirSync(path.dirname(DATA),{recursive:true});fs.writeFileSync(DATA,JSON.stringify(d,null,2))}
app.get('/',(_,res)=>res.json({ok:true,service:'Deepthi Sales Shakthi API'}));
app.get('/api/health',(_,res)=>res.json({ok:true,time:new Date().toISOString()}));
app.post('/api/leads',(req,res)=>{const {name='',email='',phone='',interest='Website Lead',message=''}=req.body||{}; if(!phone && !email) return res.status(400).json({error:'Phone or email required'}); const leads=read(); const lead={id:nanoid(),name,email,phone,interest,message,source:'website',createdAt:new Date().toISOString()}; leads.unshift(lead); write(leads); res.status(201).json({ok:true,lead});});
app.get('/api/leads',(req,res)=>{const key=req.headers['x-admin-key']; if(process.env.ADMIN_KEY && key!==process.env.ADMIN_KEY) return res.status(401).json({error:'Unauthorized'}); res.json(read());});
app.post('/api/whatsapp/preview',(req,res)=>{const {name='Student',training='Psychology of Sales'}=req.body||{}; res.json({message:`Hi ${name}! Your registration for ${training} is received. Team Deepthi Sales Shakthi will share Zoom details soon.`});});
app.listen(PORT,()=>console.log(`Deepthi API running on ${PORT}`));

import express  from 'express';
import Conversation from '../models/conversation.js';
import Message from '../models/messages.js';
import { getSocketRecieverId } from '../socket/socket.js';
import { io } from '../socket/socket.js';

export  const sendMessage = async (req,res) =>{
    try{    
        const {message}=req.body;
        const {id : recieverId} = req.params;
        const senderId = req.user._id

        
        let conversation =  await Conversation.findOne({
            participants : {$all : [senderId , recieverId]},

        });
        
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId , recieverId],
            })
        }
        

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id); 
        }
        

//we can run 
        
        await conversation.save();
        await newMessage.save();
        
       //or 
        // await Promise.all( conversation.save() , newMessage.save());

        //socket part
        const recieverSocketId = getSocketRecieverId(recieverId);
        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage" , newMessage);//io.to used to send specific event to a specific client
        }
        


        res.status(201).json("message sent successfully ");

    }catch(err){
        console.error(err)
        res.status(400).json("error in sendMessage /message/:id");
    }
}


export const getMessages = async (req,res) =>{
    try{

        const {id:userToChatId} = req .params;
        const senderId = req.user._id;


        const conversation = await Conversation.findOne({
            participants:{$all : [senderId , userToChatId]}
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        
        res.status(200).json(messages);

    }catch(err){
        console.error(err)
        res.status(400).json("error in getMEssages /message/:id");
    }
}


import connectDB from "@/app/utils/connectDB";
import Message from "@/app/models/message";
export default async function handler(req, res) {

    if (req.method == 'POST') {
        try {
            const {name,email,message,number}=req.body;
        
        await connectDB()
        
        if (!name || !email || !message || !number) {
            return res.status(400).json({error: 'Please fill all fields'});
            
        }
        
        const newMessage= new Message({name, email, number, message})
        await newMessage.save();
        
        return res.status(201).json({message: 'Message sent successfully'});
        } catch (error) {
            console.error("Error saving message:", error);
      return res.status(500).json({ status: "error", message: "Something went wrong" });
        }
        
    } else{
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ status: "error", message: `Method ${req.method} not allowed` });
        }

}
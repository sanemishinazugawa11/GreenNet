import mongoose, { Schema, Document } from 'mongoose'

const connect = async (): Promise<void> => {
    if (mongoose.connection.readyState >= 1) {
        console.log('Already connected');
        return;
      }
        try{
            await mongoose.connect('your database connection string')
            console.log('Connected to the database')
        }
        catch(e){
            console.error(e)
        }
}



const OrganizerSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    events : {type : [Schema.Types.ObjectId], ref: 'Events',required : false}
});

const EventSchema:Schema = new Schema({
    organizer: { type: Schema.Types.ObjectId, ref: 'Organizer' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    volunteers_size: { type: Number, required: true },
    PreEventPhotos:{ type: [String], required: false },
    PostEventPhotos:{ type: [String], required: false },
    date: { type: Date, required: false },  
    time: { type: String, required: true },
    duration: { type: String, required: false },
    tags: { type: [String], required: false },
    contact_number : {type:Number, required: true},
    status: { type: String, enum: ['pending', 'upcoming', 'completed'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
})

interface Event extends Document {
    organizer: string;
    title: string;
    description: string;
    location: string;
    volunteers_size: number;
    PreEventPhotos: string[];
    PostEventPhotos: string[];
    date: Date;
    time: string;
    duration?: string;
    tags?: string[];
    contact_number: number;
    status: 'pending' | 'upcoming' | 'completed';
    createdAt: Date;
}

interface organizer extends Document {
    name: string;
    email: string;
    password: string;
    events: Event[];
    createdAt: Date;
}


const Organizer = mongoose.models.Organizer || mongoose.model<organizer>('Organizer', OrganizerSchema);
const Event= mongoose.models.Events || mongoose.model<Event>('Events', EventSchema);


export default Organizer;
export { connect , Event };
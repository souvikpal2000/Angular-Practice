export class Youtube{
    public constructor( public id: string, public title: string, public channel: string, 
                        public image: string, public type: string, public description: string){
        
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.image = image;
        this.type = type;
        this.description = description;

    }
}
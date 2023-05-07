export class Data {
    timeStamp: Date
    temp: number
    hum: number
    constructor (body: any) {
        this.timeStamp = body.timeStamp
        this.temp = body.temp
        this.hum = body.hum
    }
}
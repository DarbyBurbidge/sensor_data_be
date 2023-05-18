export class Data {
    timeStamp: Date
    temp: number
    hum: number
    constructor (body: any, time: Date) {
        this.timeStamp = time
        this.temp = body.temp
        this.hum = body.hum
    }
}
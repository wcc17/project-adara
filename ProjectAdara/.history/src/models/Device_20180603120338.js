var DeviceType = {
    CAMERA: 1,
    MICROPHONE: 2,
    SENSOR: 3,
    LOCK: 4
}
class Device {
    constructor(deviceType, deviceName) {
        this.deviceType = deviceType;
    }
}
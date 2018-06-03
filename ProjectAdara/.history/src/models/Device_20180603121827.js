class Device {
    DeviceType = {
        CAMERA: 1,
        MICROPHONE: 2,
        SENSOR: 3,
        LOCK: 4
    }

    get deviceType() {
        return this.DeviceType;
    }

    constructor(deviceType, deviceName) {
        this.deviceType = deviceType;
        this.deviceName = deviceName;
    }
}
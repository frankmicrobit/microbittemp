basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15))
basic.pause(100)
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
})

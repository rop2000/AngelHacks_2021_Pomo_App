// EXAMPLE - implementing a custom signaling pattern
class CustomStatus: public LEDStatus {
public:
    explicit CustomStatus(LEDPriority priority) :
        LEDStatus(LED_PATTERN_CUSTOM, priority),
        colorIndex(0),
        colorTicks(0) {
    }

protected:
    virtual void update(system_tick_t ticks) override {
        // Change status color every 300 milliseconds
        colorTicks += ticks;
        if (colorTicks > 30) {
            if (++colorIndex == colorCount) {
                colorIndex = 0;
            }
            setColor(colors[colorIndex]);
            colorTicks = 0;
        }
    }

private:
    size_t colorIndex;
    system_tick_t colorTicks;

    static const uint32_t colors[];
    static const size_t colorCount;
};

const uint32_t CustomStatus::colors[] = {
    RGB_COLOR_MAGENTA,
    RGB_COLOR_BLUE,
    RGB_COLOR_CYAN,
    RGB_COLOR_GREEN,
    RGB_COLOR_YELLOW
};

const size_t CustomStatus::colorCount =
    sizeof(CustomStatus::colors) /
    sizeof(CustomStatus::colors[0]);

CustomStatus customStatus(LED_PRIORITY_IMPORTANT);
bool toggleState = false;
double btnVal = 0;

void setup() {
    Particle.function("Pomo Toggle",ledToggle);
    Particle.variable("toggleState", toggleState);
    Particle.variable("btnVal", btnVal);
}

void loop() {
      // Read the analog value of the sensor (TMP36)
  btnVal = digitalRead(D0);
  // Convert the reading into degree Celsius
  delay(200);
}

int ledToggle(String test) {
    /* Particle.functions always take a string as an argument and return an integer.
    Since we can pass a string, it means that we can give the program commands on how the function should be used.
    In this case, telling the function "on" will turn the LED on and telling it "off" will turn the LED off.
    Then, the function returns a value to us to let us know what happened.
    In this case, it will return 1 for the LEDs turning on, 0 for the LEDs turning off,
    and -1 if we received a totally bogus command that didn't do anything to the LEDs.
    */

    if (!customStatus.isActive()) {
        customStatus.setActive(true);
        toggleState = true;
    }
    else {
        customStatus.setActive(false);
        toggleState = false;
    }
    return 1;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.print("Starting");
  pinMode(7, INPUT);
  pinMode(8, INPUT);
  pinMode(9, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int bit1 = digitalRead(7);
  int bit2 = digitalRead(8);
  int bit3 = digitalRead(9);
  Serial.print(bit3);
  Serial.print(" ");
  Serial.print(bit2);
  Serial.print(" ");
  Serial.print(bit1);
  Serial.print("\n");
  delay(50);
}

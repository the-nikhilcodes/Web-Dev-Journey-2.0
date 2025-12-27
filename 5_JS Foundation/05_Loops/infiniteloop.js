let attempts = 0;

while (true) {
  attempts++;

  if (Math.random() > 0.8) {
    console.log(`Success after ${attempts} attempts`);
    break;
  }
}

const fs = require('fs');
const path = require('path');

const codeSamples = [
  `function decrypt(message, key) {
    return message.split('').map((char, i) => 
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join('');
}`,
`class AI_MalwareDetector {
    constructor(model) {
        this.model = model;
    }
    async detect(file) {
        const features = extractFeatures(file);
        return await this.model.predict(features);
    }
}`,
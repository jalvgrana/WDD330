function spinalCase(str) {
  return str.replace(/([A-Z])/g, ' $1').trim().split(/[\W_]/).filter(item => item !=='').map(item => item.toLowerCase()).join('-');
}

spinalCase('This Is Spinal Tap');
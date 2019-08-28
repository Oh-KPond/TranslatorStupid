document.getElementById("translate-btn").addEventListener("click", function(){
  const phrases = [
    'Avoir un chat dans la gorge',
    'Ah, la vache!',
    'Devenir chêvre',
    'Faire l’andouille',
    'Tremper son biscuit'
  ]
  // To have a cat in the throat
  // Oh, my cow
  // To become a goat
  // To make the sausage
  // Dip their biscuit

  console.log(phrases)

  return alert(phrases[Math.floor(Math.random()*phrases.length)])
});

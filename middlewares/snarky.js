let quotes = [
    'Computers themselves, and software yet to be developed, will revolutionize the way we learn.',
    'A user interface is like a joke. If you have to explain it, it’s not that good.',
    'My code DOESN’T work, I have no idea why. My code WORKS, I have no idea why.',
    'Things aren’t always #000000 and #FFFFFF',
    'One man’s crappy software is another man’s full time job. – Jessica Gaston',
    'Old programmers never die. They simply give up their resources.',
    'Software is like sex: It’s better when it’s free. – (Linus Torvalds)',
]

const snarky = function(req, res, next) {
    console.log(quotes[Math.floor(Math.random()*quotes.length)]);
    next()
}

module.exports = snarky;
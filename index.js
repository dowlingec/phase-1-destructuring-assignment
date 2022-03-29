const farmAnimals = 'cow horse sheep pig chicken';
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
// let farmAnimals2 = farmAnimals.split(' ')
// console.log(farmAnimals2)

let farmAnimals2 = farmAnimals.split(' ')
console.log(farmAnimals2)
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
// let farmAnimals3 = farmAnimals2.slice(0, 1).concat(farmAnimals2.slice(2, 5))
// console.log(farmAnimals3)
let [bessie, dolly, babe, little] = farmAnimals2.slice(0, 1).concat(farmAnimals2.slice(2, 5))
// console.log(bessie)
//=> LOG: cow

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let [blackAndWhite, black, pink] = farmAnimals2.slice(0, 1).concat(farmAnimals2.slice(2, 5))
// let farmAnimals4 = farmAnimals3.slice(0, 3)
// // console.log(farmAnimals4)
// let [blackAndWhite, black, pink] = farmAnimals4
// console.log(pink)

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 4. Use destructuring to assign appropriate variables using the color names.
let [red, orange, yellow, green, blue, indigo, violet] = colors
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let [r, o, y, g, b, v] = colors.slice(0, 5).concat(colors.pop(6))
console.log(r, o, y, g, b, v)
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
let [indg] = colors.slice(5,6)

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {album : {
  theMuppetMovie:{
    song2, song4
    },
  },
  nestedJob, nestedPartner
} = nestedMuppet

  console.log(song4)
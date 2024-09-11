import d1 from '@assets/petImage/d1.jpg'
import c1 from '@assets/petImage/d1.jpg'
import b1 from '@assets/petImage/d1.jpg'
import f1 from '@assets/petImage/d1.jpg'
import r1 from '@assets/petImage/d1.jpg'
export const categories = [
  {
    id: 1,
    animal: "dog",
    image: d1
  },
  {
    id: 2,
    animal: "cat",
    image: c1
  },
  {
    id: 3,
    animal: "bird",
    image: b1
  },
  {
    id: 4,
    animal: "fish",
    image: f1
  },
  {
    id: 5,
    animal: "rabbit",
    image: r1
  }
]

export const pets = {
  dog: [{ name: 'Bulldog', image: d1 }, { name: 'Labrador', image: d1 }, { name: 'Poodle', image: d1 }],
  cat: [{ name: 'Siamese', image: c1 }, { name: 'Persian', image: c1 }, { name: 'Maine Coon', image: c1 }],
  bird: [{ name: 'Parrot', image: b1 }, { name: 'Canary', image: b1 }, { name: 'Sparrow', image: b1 }],
  fish: [{ name: 'Goldfish', image: f1 }, { name: 'Betta', image: f1 }, { name: 'Guppy', image: f1 }],
  rabbit: [{ name: 'Dutch', image: r1 }, { name: 'Lionhead', image: r1 }, { name: 'Mini Lop', image: r1 }],
};
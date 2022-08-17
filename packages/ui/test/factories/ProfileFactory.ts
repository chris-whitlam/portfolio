import { Profile } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';

class ProfileDataObjectFactory extends Factory<Profile> {}

const ProfileFactory = ProfileDataObjectFactory.define(() => ({
  name: faker.name.fullName(),
  roles: faker.helpers.arrayElements([
    'Full-Stack Engineer',
    'Guitarist',
    'Song Writer'
  ]),
  bio: faker.lorem.lines(4),
  socials: {
    githubUrl: faker.internet.url(),
    linkedInUrl: faker.internet.url(),
    email: faker.internet.url()
  },
  image: ImageFactory.build()
}));

export default ProfileFactory;

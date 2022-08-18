import { Profile } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';
import SocialsFactory from './SocialsFactory';

class ProfileDataObjectFactory extends Factory<Profile> {}

const ProfileFactory = ProfileDataObjectFactory.define(() => ({
  name: faker.name.fullName(),
  roles: faker.helpers.arrayElements([
    'Full-Stack Engineer',
    'Guitarist',
    'Song Writer'
  ]),
  bio: faker.lorem.lines(4),
  socials: SocialsFactory.build(),
  image: ImageFactory.build()
}));

export default ProfileFactory;

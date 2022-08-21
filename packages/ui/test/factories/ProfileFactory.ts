import { Profile } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';
import SocialsFactory from './SocialsFactory';
import RichContentFactory from './RichContentFactory';

class ProfileDataObjectFactory extends Factory<Profile> {}

const ProfileFactory = ProfileDataObjectFactory.define(() => ({
  name: faker.name.fullName(),
  roles: faker.helpers.arrayElements([
    'Full-Stack Engineer',
    'Guitarist',
    'Song Writer'
  ]),
  bio: RichContentFactory.build(),
  socials: SocialsFactory.build(),
  image: ImageFactory.build()
}));

export default ProfileFactory;

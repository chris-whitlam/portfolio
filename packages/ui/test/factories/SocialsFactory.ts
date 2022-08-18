import { Socials } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

class SocialsDataObjectFactory extends Factory<Socials> {}

const SocialsFactory = SocialsDataObjectFactory.define(() => ({
  githubUrl: faker.internet.url(),
  linkedInUrl: faker.internet.url(),
  email: faker.internet.email()
}));

export default SocialsFactory;

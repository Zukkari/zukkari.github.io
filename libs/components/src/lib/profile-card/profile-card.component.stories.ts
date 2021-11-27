import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ComponentsModule } from '../components.module';
import { ProfileCardComponent } from './profile-card.component';

export default {
  title: 'ProfileCardComponent',
  component: ProfileCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
    }),
  ],
} as Meta<ProfileCardComponent>;

const Template: Story<ProfileCardComponent> = (args: ProfileCardComponent) => ({
  component: ProfileCardComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  model: {
    name: 'Stanislav Mõškovski',
    role: 'Senior Software Engineer @ Helmes',
    biography: 'Hello, twice!',
    profilePictureLink: '',
    socialMediaLinks: [
      {
        profileUrl: 'https://github.com/zukkari',
        iconUrl:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        profileUrl: 'https://github.com/zukkari',
        iconUrl:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        profileUrl: 'https://github.com/zukkari',
        iconUrl:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        profileUrl: 'https://github.com/zukkari',
        iconUrl:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
    ],
  },
};

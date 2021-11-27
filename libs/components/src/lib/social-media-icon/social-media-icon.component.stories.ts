import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SocialMediaIconComponent } from './social-media-icon.component';

export default {
  title: 'SocialMediaIconComponent',
  component: SocialMediaIconComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SocialMediaIconComponent>;

const Template: Story<SocialMediaIconComponent> = (
  args: SocialMediaIconComponent
) => ({
  component: SocialMediaIconComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  model: {
    profileUrl: '',
    iconUrl: '',
  },
};

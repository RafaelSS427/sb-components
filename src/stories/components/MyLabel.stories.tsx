import { MyLabel } from "../../components/MyLabel"

import { ComponentMeta, ComponentStory  } from '@storybook/react'

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/> 

// cloning component
export const Basic = Template.bind({})
Basic.args = {
    label: 'Basic',
    size: 'normal'
}

// cloning component
export const AllCaps = Template.bind({})
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

// cloning component
export const Secondary = Template.bind({})
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

// cloning component
export const Tertiary = Template.bind({})
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

// cloning component
export const CustomFormColor = Template.bind({})
CustomFormColor.args = {
    size: 'h1',
    fontColor: '#5517AC'
}
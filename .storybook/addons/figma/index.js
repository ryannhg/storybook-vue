import addons, { makeDecorator } from '@storybook/addons'

export const withFigma = makeDecorator({
  name: 'withFigma',
  parameterName: 'figma',
  wrapper: (getStory, context, { parameters }) => {
    addons.getChannel().emit('FIGMA/figma', parameters)
    return getStory(context)
  }
})

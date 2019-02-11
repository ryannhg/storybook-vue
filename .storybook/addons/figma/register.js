import React from 'react'
import addons from '@storybook/addons'

class Figma extends React.Component {
  state = {
    url: ''
  }
  onUpdateUrl = url => {
    console.log(url)
    this.setState({ url });
  }
  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('FIGMA/figma', this.onUpdateUrl);
    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() =>
      this.onUpdateUrl('')
    )
  }
  render() {
    const { url } = this.state
    const { active } = this.props

    return (active && url)
      ? React.createElement('iframe', {
        key: 'iframe',
        height: '100%',
        width: '100%',
        src: `https://www.figma.com/embed?embed_host=storybook&url=${url}`
      }, null)
      : null
  }
  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory()
    }

    this.unmounted = true
    const { channel } = this.props
    channel.removeListener('FIGMA/figma', this.onUpdateUrl)
  }
}
addons.register('FIGMA', api => {
  addons.addPanel('FIGMA/figma', {
    title: 'Design',
    render: ({ active }) =>
      React.createElement(Figma, {
        key: 'figma1234567890',
        channel: addons.getChannel(),
        api,
        active
      }, null)
  })
})
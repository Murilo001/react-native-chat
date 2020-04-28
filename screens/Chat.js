import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'react-native-elements';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { withTheme } from 'react-native-paper';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSend = this.renderSend.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Canal Aberto',
  });

  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Olá, como posso ajudá-lo?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        }, {
          _id: 3,
          text: 'Bem-vindo ao canal aberto',
          createdAt: new Date(),
          system: true,
        }
      ],
    })
  }

  onSend(newMessage) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, newMessage),
    }));

    /* Mocando mensagem vinda do outro usuário */
    const previousMessages = [{ 
      _id: `${Math.random()}`,
      createdAt: new Date(new Date(newMessage[newMessage.length - 1].createdAt)
        .setSeconds(
          new Date(newMessage[newMessage.length - 1].createdAt)
          .getSeconds() + 10 
        )
      ),
      text: newMessage[newMessage.length - 1].text,
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    }];
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, previousMessages),
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: this.props.theme.colors.primary
          }
        }}
      />
    )
  }

  renderSend(props) {
    return (
      <Send {...props} containerStyle={{ borderWidth: 0}}>
        <View style={{ marginRight: 5, marginBottom: 12.5 }}>
          <Icon
            name='paper-plane'
            type='font-awesome'
            color={this.props.theme.colors.primary}
            style={styles.sendIcon}
          />
        </View>
      </Send>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          onSend={messages => this.onSend(messages)}
          messages={this.state.messages}
          renderBubble={this.renderBubble}
          renderSend={this.renderSend}
          placeholder="Digite uma mensagem..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sendIcon: {
    color: '#3A97F9'
  }
})

export default withTheme(Chat);

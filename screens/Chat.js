import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {

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
        },{
          _id: 3,
          text: 'Bem-vindo ao canal aberto',
          createdAt: new Date(),
          system: true,
        }
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
  
  render() {
    return (
    <GiftedChat
      onSend={messages => this.onSend(messages)}
      messages={this.state.messages}
      placeholder="Digite uma mensagem..."
    />
  );
  }
}

// const styles = StyleSheet.create({});

export default Chat;

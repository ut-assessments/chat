import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  conversations = [
    {
      name: 'Amy',
      role: 'Marketing',
      message: 'Here are your top 3 answers: 1. Make it...',
      time: '7:21 pm',
      active: true
    },
    {
      name: 'Jonathan',
      message: 'Your social media post should include...',
      time: '5:35 pm',
      active: false
    },
    {
      name: 'Tricia',
      message: 'Thank you for providing these. Please t...',
      time: '1:02 pm',
      active: false
    },
    {
      name: 'Jason',
      message: 'Try this: try {Secret?Client.getSecret("d...',
      time: 'Yesterday',
      active: false
    },
    {
      name: 'Gary',
      message: 'Your social media post should include...',
      time: 'Sunday',
      active: false
    }
  ];

  currentChat = {
    chatInfo: {
      name: 'Amy',
      role: 'Marketing',
    },
    messages: [
      {
        name: 'Amy',
        me: false,
        message: 'Here are your top 3 answers: 1. Make it good, 2. Make it fast, 3. Make it cheap.',
        time: '7:21 pm',
        active: true
      },
      {
        name: 'You',
        me: true,
        message: 'Thank you for providing these. Please tell me more about the project.',
        time: '1:02 pm',
        active: false
      }
    ]
  }
}

//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '喵哥AI摸鱼交流群',
    description: '喵哥AI摸鱼交流群',
    members: ['ai1', 'ai2', 'ai3']
  },
  {
    id: 'group2',
    name: '喵哥AI交流群',
    description: '喵哥AI交流群',
    members: ['ai4', 'ai5', 'ai6', 'ai7']
  }
];

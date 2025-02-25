export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  model: 'gpt' | 'claude' | 'deepseek';
  timestamp: number;
}

export interface ApiKeys {
  openai?: string;
  anthropic?: string;
  deepseek?: string;
}

export interface UISettings {
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
  streamResponses: boolean;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  createdAt: number;
  updatedAt: number;
}

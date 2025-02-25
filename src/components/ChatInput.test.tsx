import { render, screen, fireEvent } from '@testing-library/react';
import { ChatInput } from './ChatInput';
import { useChatState } from '~/hooks/useChatState';

// Mock the useChatState hook
jest.mock('~/hooks/useChatState', () => ({
  useChatState: jest.fn(),
}));

describe('ChatInput', () => {
  const mockAddMessage = jest.fn();

  beforeEach(() => {
    (useChatState as jest.Mock).mockReturnValue({
      addMessage: mockAddMessage,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('submits message on Enter', () => {
    render(<ChatInput />);
    const textarea = screen.getByPlaceholderText(/type a message/i);

    fireEvent.change(textarea, { target: { value: 'test message' } });
    fireEvent.keyDown(textarea, { key: 'Enter' });

    expect(mockAddMessage).toHaveBeenCalledWith('test message', 'gpt');
  });

  it('allows multiline input on Shift+Enter', () => {
    render(<ChatInput />);
    const textarea = screen.getByPlaceholderText(/type a message/i);

    fireEvent.change(textarea, { target: { value: 'line 1' } });
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true });

    expect(mockAddMessage).not.toHaveBeenCalled();
  });

  it('focuses input on "/" shortcut', () => {
    render(<ChatInput />);
    const textarea = screen.getByPlaceholderText(/type a message/i);

    // Simulate global "/" keypress
    fireEvent.keyDown(document, { key: '/' });

    expect(document.activeElement).toBe(textarea);
  });
});

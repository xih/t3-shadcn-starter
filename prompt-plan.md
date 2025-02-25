# Test-Driven Implementation Prompts for AI Chat Interface

## **Phase 1: Project Setup & Infrastructure**

### **1. Initialize the Next.js Project**
```text
You are a React and Next.js expert. Set up a new Next.js project with TypeScript.

Requirements:
- Initialize a Next.js project (`npx create-next-app@latest --typescript`)
- Configure ESLint, Prettier, and Husky for consistent formatting and linting.
- Install Tailwind CSS and set up global styles.
- Set up a clean folder structure: `components/`, `hooks/`, `utils/`, `pages/`, `styles/`.
- Verify that `npm run dev` starts the project without errors.

Test Cases:
- Ensure Next.js builds successfully.
- Verify that ESLint and Prettier enforce code standards.
- Confirm Tailwind CSS is applied correctly.
```

### **2. Configure Jotai for Global State Management**
```text
You are an expert in state management. Implement Jotai for managing global state in a Next.js project.

Requirements:
- Install Jotai (`npm install jotai`).
- Create atoms for chat history, API keys, and UI settings.
- Implement a `useChatState` hook to manage chat messages.
- Store chat history in local storage for session persistence.

Test Cases:
- Ensure chat history is stored in and retrieved from local storage.
- Verify UI state updates reactively when atoms change.
- Confirm API keys are securely handled in state.
```

## **Phase 2: Core Chat System**

### **3. Implement Chat Input & Keyboard Shortcuts**
```text
You are an expert in UI and keyboard interactions. Create a chat input component with keyboard shortcuts.

Requirements:
- Implement an input box for user prompts.
- Support `Enter` to send messages and `Shift+Enter` for multi-line input.
- Add a global shortcut (`Cmd+/` or `/`) to focus the input box.

Test Cases:
- Ensure pressing `Enter` submits messages.
- Verify `Shift+Enter` allows multi-line input.
- Confirm `/` brings focus to the input field.
```

### **4. Set Up Multi-Column Layout for LLM Responses**
```text
You are an expert in responsive UI design. Implement a multi-column layout using Tailwind CSS.

Requirements:
- Display LLM responses in separate columns (ChatGPT, Claude, DeepSeek).
- Ensure mobile view collapses into a single-column layout.
- Implement a toggle to switch between LLMs in mobile view.

Test Cases:
- Verify correct column layout on desktop.
- Ensure mobile mode switches to a single-column with a toggle.
- Confirm smooth animations between layout changes.
```

## **Phase 3: API Integration & Response Handling**

### **5. Implement API Request Handling**
```text
You are an expert in API integrations. Implement API request handling for multiple LLMs.

Requirements:
- Create a modular function to send prompts to ChatGPT, Claude, and DeepSeek.
- Implement error handling for invalid API responses.
- Allow user-provided API keys to be stored securely.

Test Cases:
- Verify API calls return expected responses.
- Ensure errors are caught and displayed properly.
- Confirm API keys are securely stored and retrieved.
```

### **6. Implement Streaming Response Handling**
```text
You are an expert in real-time UX. Implement streaming response handling for LLMs.

Requirements:
- Display partial responses as they arrive.
- Ensure responses appear incrementally for a smooth experience.
- Optimize performance for handling long responses.

Test Cases:
- Verify real-time streaming works for all LLMs.
- Ensure UI updates smoothly without freezing.
- Confirm large responses are handled efficiently.
```

## **Phase 4: UX Enhancements & Performance Optimizations**

### **7. Implement Error Handling & Status Indicators**
```text
You are an expert in error handling. Implement UI indicators for API failures and system status.

Requirements:
- Display inline error messages when an API request fails.
- Implement a real-time status indicator for each LLM.
- Add a retry button for failed requests.

Test Cases:
- Verify errors appear correctly in the chat UI.
- Ensure the status indicator updates dynamically.
- Confirm retry functionality works.
```

### **8. Implement Auto-Collapse for Long Responses**
```text
You are an expert in UI behavior. Implement auto-collapsing for long responses.

Requirements:
- Collapse responses longer than 500 words.
- Add a "Show More" button for expanding messages.
- Ensure smooth animations when expanding/collapsing.

Test Cases:
- Verify long responses are collapsed by default.
- Ensure expanding responses works correctly.
- Confirm smooth animations without performance issues.
```

## **Final Phase: Deployment & Maintenance**

### **9. Implement Authentication & API Key Management**
```text
You are an expert in authentication. Implement Clerky for user sign-in and API key management.

Requirements:
- Integrate Clerky for authentication.
- Store user API keys securely.
- Implement a minimal settings panel for managing API keys.

Test Cases:
- Verify users can sign in successfully.
- Ensure API keys are encrypted and stored securely.
- Confirm settings updates persist across sessions.
```

### **10. Final Testing & Deployment**
```text
You are an expert in testing and deployment. Ensure the app is production-ready.

Requirements:
- Conduct full UI/UX testing across devices.
- Optimize performance and ensure no memory leaks.
- Deploy the app using Vercel with auto-updates enabled.

Test Cases:
- Verify all core functionalities work as expected.
- Confirm smooth performance and animations.
- Ensure deployment is seamless with no runtime errors.
```

---

This structured set of **test-driven development prompts** ensures **incremental progress, best practices, and robust testing at every stage**. Each prompt builds upon the previous, **avoiding orphaned or unused code**. 🚀 Let me know if you'd like any refinements!


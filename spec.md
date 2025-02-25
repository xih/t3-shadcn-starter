AI-Assisted Writing & Code Generation Chat Interface

Overview

This document provides a comprehensive specification for a web-based AI chat interface that allows users to interact with multiple Large Language Models (LLMs) in parallel, with responses displayed in a TweetDeck-style multi-column layout.

Core Features

Multi-LLM Unified Chat: Users send a single prompt, and all predefined LLMs respond within separate columns.

Streaming Responses: Partial responses appear as they arrive, similar to ChatGPT.

Keyboard Shortcuts:

Cmd+/ or / to focus the input box.

Enter to send messages, Shift+Enter for multi-line input.

Cmd+1, Cmd+2, etc., to resend the last prompt to specific LLMs.

Multi-Column Layout: Responses from each LLM appear in independent columns, stacked horizontally.

Mobile-Friendly Adaptation: On smaller screens, columns collapse into a single-column layout with a toggle to switch between LLMs.

Persistent Local History: Chat sessions persist in local storage and reload automatically upon reopening the app.

Manual Session Reset: Users can clear the current conversation and start fresh using a "New Chat" button.

Fixed Set of LLMs: Only predefined models (e.g., ChatGPT, Claude, DeepSeek) are available.

User-Provided API Keys: Users must enter API keys for each LLM in the settings panel.

1 Free Query per Day: Each signed-in user gets one free request before requiring their API key.

Dark & Light Mode Toggle: Users can switch between themes.

Error Handling: Inline error messages display API failures and rate limits next to the affected LLM’s response.

Status Indicator: A banner shows real-time API status for each LLM.

Loading Indicators: Spinners show when LLM responses are being processed.

Auto-Collapse Long Responses: Responses exceeding 500 words are collapsed with a “Show More” button.

Fluid Animations: Smooth scrolling, sliding panels, and micro-interactions enhance usability.

Bottom Navigation Bar (Mobile): Allows quick access to chat and settings.

Auto-Recovery: If the app crashes or refreshes, the last session is restored.

No Data Storage on Server: All conversations remain on the client side, ensuring privacy.

Minimal Settings Panel: Only essential options (API keys, theme toggle) are included.

Clickable Links: URLs in responses are automatically detected and formatted.

Lite Mode Toggle: Disables animations and reduces UI complexity for low-performance devices.

Silent Auto-Updates: The app always loads the latest version without notifying users.

Technical Architecture

Frontend:

Framework: React (Next.js for SSR optimization)

State Management: React Context API / jotai

Styling: Tailwind CSS, shadcn for components

Animations: Framer Motion

Local Storage: Browser localStorage for persisting sessions

Backend:

No Backend: The app runs fully client-side, relying on user-provided API keys.
in the future, add trpc, prisma, supabase for backend

Clerky for Authentication: Handles user sign-in and API key storage in local settings.

Minimal Analytics: Collects only anonymous usage data, session sign in, excluding chat content. Use posthog for analytics

Data Handling & Privacy

Local Storage:

Stores session history and user API keys.
use Jotai for state management.

No syncing across devices.

Error Handling:

Displays inline errors for API failures.

No retries; users see an error message if a request fails.

Session Persistence:

Last session automatically reloads.

Independent chat sessions per tab.

Testing Plan

Functional Tests:

Verify multi-column LLM responses load correctly.

Ensure keyboard shortcuts work as expected.

Test API key input and usage tracking.

Validate persistent history and manual session reset.

UI/UX Tests:

Responsive layout across desktop, tablet, and mobile.

Smooth animations and transitions.

Proper display of error messages and status indicators.

Performance Tests:

Ensure large responses render progressively.

Optimize for low-performance devices via Lite Mode.

Security Tests:

Validate API keys are stored securely on the client side.

Ensure no user data is transmitted or stored on a server.

Conclusion

This specification outlines the full functionality, technical architecture, and implementation strategy for a streamlined multi-LLM chat interface. With a focus on simplicity, client-side execution, and a user-friendly experience, the project is ready for development.


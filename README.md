# LlamaFrontend

A React-based frontend framework with pre-built components for AI-powered applications.

## Overview

LlamaFrontend provides a comprehensive set of React components and utilities designed specifically for AI applications. From chat interfaces to document viewers and vector visualizations, it offers everything needed to build modern AI user interfaces that connect seamlessly with the llama backend services.

## Features

- **Chat UI Components**: Message bubbles, typing indicators, chat history
- **Document Viewers**: PDF, markdown, code with syntax highlighting
- **Vector Visualizations**: 2D/3D embedding space viewers
- **Authentication**: Auth flows, token management, user profiles
- **Theming**: Customizable light/dark themes and component styling

## Installation

```bash
npm install @llamasearch/llamafrontend
```

## Quick Start

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  LlamaProvider, 
  ChatInterface,
  DocumentViewer,
  ThemeProvider
} from '@llamasearch/llamafrontend';

function App() {
  return (
    <ThemeProvider theme="light">
      <LlamaProvider endpoint="https://api.yourdomain.com">
        <div className="app-container">
          <DocumentViewer 
            documentUrl="https://example.com/document.pdf" 
            highlightTerms={["AI", "machine learning"]}
          />
          <ChatInterface 
            initialMessage="How can I help you understand this document?"
            tools={["document_search", "web_search"]} 
          />
        </div>
      </LlamaProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Component Categories

### Chat Components

- `<ChatInterface />` - Complete chat UI with messages, input, and history
- `<MessageBubble />` - Individual message display with support for markdown, code, etc.
- `<MessageInput />` - Text input with file upload and tool selection
- `<TypingIndicator />` - Animated indicator showing when the AI is responding

### Document Components

- `<DocumentViewer />` - Multi-format document viewer with search and highlights
- `<PDFViewer />` - Specialized PDF viewer with annotation support
- `<CodeBlock />` - Code display with syntax highlighting and copy functionality
- `<MarkdownRenderer />` - Renders markdown content with customizable styles

### Visualization Components

- `<VectorSpaceViewer />` - 2D/3D visualization of embedding spaces
- `<SimilarityGraph />` - Network graph showing document relationships
- `<ChartBuilder />` - Dynamic chart generation from data objects

### Authentication Components

- `<LoginForm />` - Customizable login interface
- `<UserProfile />` - User information display and settings
- `<AuthProvider />` - Context provider for authentication state

## Integration with Llama Ecosystem

LlamaFrontend integrates with:
- **LlamaDB**: For fetching and displaying vector data
- **LlamaAgent**: For agent interaction through the UI
- **LlamaServe**: For model inference and generation
- **LlamaStream**: For real-time updates and notifications

## License

MIT 
# Updated in commit 1 - 2025-04-04 17:23:27

# Updated in commit 9 - 2025-04-04 17:23:28

# Updated in commit 17 - 2025-04-04 17:23:28

# Updated in commit 25 - 2025-04-04 17:23:29

# Updated in commit 1 - 2025-04-05 14:31:12

# Updated in commit 9 - 2025-04-05 14:31:12

# Updated in commit 17 - 2025-04-05 14:31:13

# Updated in commit 25 - 2025-04-05 14:31:13

# Updated in commit 1 - 2025-04-05 15:17:40

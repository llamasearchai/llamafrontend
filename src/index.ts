/**
 * LlamaFrontend - React components for AI-powered applications
 * @module llamafrontend
 */

export const version = '0.1.0';

// Core providers
export { LlamaProvider } from './providers/LlamaProvider';
export { ThemeProvider } from './providers/ThemeProvider';
export { AuthProvider } from './providers/AuthProvider';

// Chat components
export { ChatInterface } from './components/chat/ChatInterface';
export { MessageBubble } from './components/chat/MessageBubble';
export { MessageInput } from './components/chat/MessageInput';
export { TypingIndicator } from './components/chat/TypingIndicator';

// Document components
export { DocumentViewer } from './components/document/DocumentViewer';
export { PDFViewer } from './components/document/PDFViewer';
export { CodeBlock } from './components/document/CodeBlock';
export { MarkdownRenderer } from './components/document/MarkdownRenderer';

// Visualization components
export { VectorSpaceViewer } from './components/visualization/VectorSpaceViewer';
export { SimilarityGraph } from './components/visualization/SimilarityGraph';
export { ChartBuilder } from './components/visualization/ChartBuilder';

// Authentication components
export { LoginForm } from './components/auth/LoginForm';
export { UserProfile } from './components/auth/UserProfile';

// Hooks
export { useLlamaDB } from './hooks/useLlamaDB';
export { useLlamaAgent } from './hooks/useLlamaAgent';
export { useLlamaServe } from './hooks/useLlamaServe';
export { useChat } from './hooks/useChat';
export { useDocumentViewer } from './hooks/useDocumentViewer';
export { useAuth } from './hooks/useAuth';

// Types
export type { 
  LlamaProviderProps,
  ThemeProviderProps,
  AuthProviderProps,
  ChatInterfaceProps,
  DocumentViewerProps,
  VectorSpaceViewerProps,
  LoginFormProps,
  UserProfileProps,
  ChatMessage,
  ChatResponse,
  Document,
  Vector,
  User,
  Theme
} from './types'; 
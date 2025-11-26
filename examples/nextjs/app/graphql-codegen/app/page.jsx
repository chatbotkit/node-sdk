import ChatbotList from '../components/ChatbotList.jsx'

export default function Page() {
  return (
    <div>
      <h1>GraphQL Code Generator Example</h1>
      <p>
        This example demonstrates how to use GraphQL Code Generator with
        ChatBotKit's GraphQL API to create type-safe queries.
      </p>
      <ChatbotList />
    </div>
  )
}
